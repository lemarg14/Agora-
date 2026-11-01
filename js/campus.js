/* ============================================================
   POLYMATH ACADEMY — le campus 3D (Three.js r128, sans build)
   Un village façon « Yard » : une grande cour centrale (le Quad),
   la Bibliothèque au nord, les facultés tout autour, une porte
   monumentale au sud. Esthétique grecque modernisée : marbre poli,
   verre teinté, or, volumes arrondis.
   createCampus(container, labelsEl, faculties, { onSelect, onLibrary })
   → { focus(id), unfocus(), setPaused(bool) }
   ============================================================ */
(function () {
  const A = (window.AGORA = window.AGORA || {});
  const LIB = "__library";
  let ENV = null; // carte d’environnement (reflets), créée au lancement

  /* ---------- Emplacements : x, z, direction de la façade ---------- */
  const QX = 31, QZ = 23; // demi-dimensions de la cour
  const SLOTS = [
    { x: -45, z: -12, f: [1, 0] },
    { x: 45, z: -12, f: [-1, 0] },
    { x: -45, z: 17, f: [1, 0] },
    { x: 45, z: 17, f: [-1, 0] },
    { x: -25, z: 43, f: [0, -1] },
    { x: 25, z: 43, f: [0, -1] },
    // emplacements suivants (nouvelles facultés)
    { x: -32, z: -42, f: [0.6, 0.8] },
    { x: 32, z: -42, f: [-0.6, 0.8] },
    { x: -72, z: 3, f: [1, 0] },
    { x: 72, z: 3, f: [-1, 0] },
    { x: -55, z: 52, f: [0.7, -0.7] },
    { x: 55, z: 52, f: [-0.7, -0.7] },
  ];
  const LIB_POS = { x: 0, z: -44, f: [0, 1] };
  // lieux hors du village, reliés à la cour par la grande allée est-ouest
  // (clé = style du bâtiment ; c = centre de l’emprise, clear = rayon sans arbres)
  const SPECIAL = {
    stadium: { x: 80, z: 0, f: [-1, 0], front: 6.5, view: 70, c: [100, 0], clear: 36 },
    restaurant: { x: -80, z: 0, f: [1, 0], front: 12.5, view: 46, c: [-82, 0], clear: 22 },
    workshop: { x: 25, z: 68, f: [-1, 0], front: 7.5, view: 48, c: [32, 68], clear: 20 },
  };

  /* ---------- Matériaux ---------- */
  const greyed = (hex, amt) => {
    const c = new THREE.Color(hex);
    const g = c.r * 0.3 + c.g * 0.59 + c.b * 0.11;
    return c.lerp(new THREE.Color(g, g, g), amt);
  };
  const phys = (o) => new THREE.MeshPhysicalMaterial(Object.assign({ roughness: 0.4, metalness: 0, clearcoat: 0.6, clearcoatRoughness: 0.15, envMap: ENV, envMapIntensity: 0.45 }, o));
  const std = (color, o) => new THREE.MeshStandardMaterial(Object.assign({ color, roughness: 0.85 }, o || {}));

  function palette(color, open) {
    const col = (hex, a) => (open ? new THREE.Color(hex) : greyed(hex, a));
    const fc = col(color, 0.75);
    return {
      marble: phys({ color: col("#f7f3ec", 0.5), roughness: 0.28, clearcoat: 0.8 }),
      marble2: phys({ color: col("#e9e1d3", 0.5), roughness: 0.35 }),
      gold: phys({ color: col("#d9ab4e", 0.7), metalness: 0.85, roughness: 0.22, clearcoat: 1, envMapIntensity: 1 }),
      color: phys({ color: fc, roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.08 }),
      glass: phys({ color: fc.clone().lerp(new THREE.Color("#ffffff"), 0.12), roughness: 0.05, metalness: 0.15, clearcoat: 1, clearcoatRoughness: 0.02, transparent: true, opacity: open ? 0.72 : 0.5, envMapIntensity: 1.1 }),
      clear: phys({ color: col("#a9cfe2", 0.4), roughness: 0.03, metalness: 0.1, clearcoat: 1, transparent: true, opacity: 0.6, envMapIntensity: 1.1 }),
      dark: phys({ color: col(new THREE.Color(color).multiplyScalar(0.55).getHex(), 0.75), roughness: 0.3 }),
    };
  }

  /* ---------- Géométries arrondies ---------- */
  function rrShape(w, d, r) {
    const s = new THREE.Shape();
    const x = -w / 2, y = -d / 2;
    s.moveTo(x + r, y);
    s.lineTo(x + w - r, y);
    s.quadraticCurveTo(x + w, y, x + w, y + r);
    s.lineTo(x + w, y + d - r);
    s.quadraticCurveTo(x + w, y + d, x + w - r, y + d);
    s.lineTo(x + r, y + d);
    s.quadraticCurveTo(x, y + d, x, y + d - r);
    s.lineTo(x, y + r);
    s.quadraticCurveTo(x, y, x + r, y);
    return s;
  }
  const geoCache = new Map();
  function rboxGeo(w, h, d, r) {
    const key = [w, h, d, r].join("|");
    if (geoCache.has(key)) return geoCache.get(key);
    r = Math.max(0.02, Math.min(r, w / 2 - 0.01, d / 2 - 0.01));
    const b = Math.min(r * 0.6, h / 2 - 0.01, 0.6);
    const depth = Math.max(0.01, h - 2 * b);
    const g = new THREE.ExtrudeGeometry(rrShape(w, d, r), { depth, bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelOffset: -b, bevelSegments: 3, curveSegments: 6 });
    g.rotateX(-Math.PI / 2);
    g.translate(0, -depth / 2, 0);
    g.computeVertexNormals();
    geoCache.set(key, g);
    return g;
  }
  const shadowy = (o) => ((o.castShadow = true), (o.receiveShadow = true), o);
  const at = (o, x, y, z) => (o.position.set(x, y, z), o);
  const rbox = (w, h, d, r, m) => shadowy(new THREE.Mesh(rboxGeo(w, h, d, r), m));
  const cyl = (rt, rb, h, m, seg) => shadowy(new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg || 24), m));
  const sph = (r, m, ws, hs) => shadowy(new THREE.Mesh(new THREE.SphereGeometry(r, ws || 24, hs || 16), m));
  const dome = (r, m) => shadowy(new THREE.Mesh(new THREE.SphereGeometry(r, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), m));
  function torus(R, r, m) {
    const t = shadowy(new THREE.Mesh(new THREE.TorusGeometry(R, r, 12, 48), m));
    t.rotation.x = Math.PI / 2;
    return t;
  }
  function pediment(w, h, d, m) {
    const s = new THREE.Shape();
    s.moveTo(-w / 2, 0);
    s.lineTo(w / 2, 0);
    s.lineTo(0, h);
    s.lineTo(-w / 2, 0);
    const b = 0.18;
    const g = new THREE.ExtrudeGeometry(s, { depth: d - 2 * b, bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelOffset: -b, bevelSegments: 3 });
    g.translate(0, 0, -(d - 2 * b) / 2);
    return shadowy(new THREE.Mesh(g, m));
  }
  // colonne : base, fût, chapiteau arrondis
  function column(g, c, x, z, h, r, y0) {
    y0 = y0 || 0;
    g.add(at(cyl(r * 1.35, r * 1.45, 0.35, c.marble2, 20), x, y0 + 0.18, z));
    g.add(at(cyl(r * 0.92, r, h - 0.8, c.marble, 20), x, y0 + 0.35 + (h - 0.8) / 2, z));
    g.add(at(cyl(r * 1.4, r * 0.95, 0.45, c.marble2, 20), x, y0 + h - 0.22, z));
  }
  // emmarchement grec (stylobate) arrondi
  function steps(g, c, w, d, n, h) {
    n = n || 3;
    h = h || 0.45;
    for (let k = 0; k < n; k++) g.add(at(rbox(w - k * 1.1, h, d - k * 1.1, 0.9, k % 2 ? c.marble2 : c.marble), 0, h / 2 + k * h, 0));
    return n * h;
  }
  function door(g, c, y, z, w, h) {
    g.add(at(rbox(w + 0.6, h + 0.3, 0.3, 0.12, c.gold), 0, y + (h + 0.3) / 2, z));
    g.add(at(rbox(w, h, 0.32, 0.1, c.dark), 0, y + h / 2, z + 0.02));
  }

  /* ---------- Bâtiments (façade vers +z). Chaque style renvoie sa hauteur. ---------- */
  const BUILDERS = {
    // Droit : temple grec, cella de verre teinté
    temple(g, c) {
      const y = steps(g, c, 16, 13, 3);
      g.add(at(rbox(8.6, 6, 6.4, 0.5, c.glass), 0, y + 3, -1.4));
      g.add(at(rbox(8.2, 5.8, 6, 0.4, c.marble2), 0, y + 2.9, -1.7));
      door(g, c, y, 1.5, 1.8, 3.4);
      for (let k = 0; k < 6; k++) column(g, c, -5.2 + k * 2.08, 4.4, 6.4, 0.45, y);
      for (let k = 1; k < 4; k++) {
        column(g, c, -5.2, 4.4 - k * 2.6, 6.4, 0.45, y);
        column(g, c, 5.2, 4.4 - k * 2.6, 6.4, 0.45, y);
      }
      g.add(at(rbox(12.6, 0.9, 11.2, 0.45, c.marble), 0, y + 6.85, -0.4));
      g.add(at(rbox(12.8, 0.28, 11.4, 0.14, c.gold), 0, y + 7.42, -0.4));
      g.add(at(pediment(12.6, 2.4, 11, c.color), 0, y + 7.56, -0.4));
      g.add(at(sph(0.38, c.gold), 0, y + 10.1, 5.1));
      return y + 11.5;
    },
    // Économie : panthéon à coupole de verre
    dome(g, c) {
      const y = steps(g, c, 15, 15, 2);
      g.add(at(cyl(5.6, 5.8, 6, c.marble, 48), 0, y + 3, -1));
      g.add(at(torus(5.75, 0.25, c.gold), 0, y + 6.05, -1));
      g.add(at(dome(5.6, c.glass), 0, y + 6.1, -1));
      for (let k = 0; k < 8; k++) {
        const rib = shadowy(new THREE.Mesh(new THREE.TorusGeometry(5.62, 0.09, 6, 32, Math.PI / 2), c.gold));
        rib.position.set(0, y + 6.1, -1);
        rib.rotation.y = (k / 8) * Math.PI * 2;
        rib.rotation.z = 0;
        g.add(rib);
      }
      g.add(at(cyl(0.8, 1, 1.2, c.marble, 20), 0, y + 12.2, -1));
      g.add(at(sph(0.6, c.gold), 0, y + 13.3, -1));
      for (let k = 0; k < 4; k++) column(g, c, -3.3 + k * 2.2, 5.3, 5.2, 0.4, y);
      g.add(at(rbox(8.6, 0.7, 3.8, 0.3, c.marble), 0, y + 5.55, 4.7));
      g.add(at(pediment(8.6, 1.6, 3.6, c.color), 0, y + 5.9, 4.7));
      door(g, c, y, 4.75 - 0.05, 1.6, 3);
      return y + 14.5;
    },
    // Histoire : bibliothèque d’archives et tour de l’horloge
    tower(g, c) {
      const y = steps(g, c, 14, 11, 2);
      g.add(at(rbox(12.4, 6.6, 8, 0.8, c.marble), 0, y + 3.3, -0.8));
      for (let k = 0; k < 5; k++) g.add(at(rbox(1.1, 3.6, 0.3, 0.5, c.glass), -4.4 + k * 2.2, y + 3.6, 3.25));
      g.add(at(rbox(12.8, 0.5, 8.4, 0.25, c.gold), 0, y + 6.85, -0.8));
      g.add(at(rbox(11.6, 1.2, 7.4, 0.6, c.color), 0, y + 7.6, -0.8));
      g.add(at(cyl(2.1, 2.3, 14, c.marble, 32), 0, y + 7, 3.6));
      g.add(at(torus(2.2, 0.16, c.gold), 0, y + 10.5, 3.6));
      const clock = cyl(1.15, 1.15, 0.2, c.gold, 32);
      clock.rotation.x = Math.PI / 2;
      g.add(at(clock, 0, y + 12.2, 5.8));
      g.add(at(cyl(1.7, 1.7, 2.4, c.glass, 32), 0, y + 15.2, 3.6));
      g.add(at(dome(1.95, c.color), 0, y + 16.4, 3.6));
      g.add(at(sph(0.35, c.gold), 0, y + 18.5, 3.6));
      door(g, c, y, 5.75, 1.6, 2.6);
      return y + 19;
    },
    // Langues : tour de Babel moderne, anneaux de verre
    pagoda(g, c) {
      let y = steps(g, c, 14, 14, 2);
      let r = 5.2;
      for (let k = 0; k < 4; k++) {
        const h = 2.8 - k * 0.3;
        g.add(at(cyl(r, r, h, c.glass, 48), 0, y + h / 2, 0));
        g.add(at(cyl(r * 0.8, r * 0.8, h, c.marble2, 32), 0, y + h / 2, 0));
        y += h;
        g.add(at(cyl(r + 0.4, r + 0.4, 0.4, c.marble, 48), 0, y + 0.2, 0));
        g.add(at(torus(r + 0.4, 0.12, c.gold), 0, y + 0.4, 0));
        y += 0.4;
        r *= 0.76;
      }
      g.add(at(dome(r + 0.2, c.color), 0, y, 0));
      g.add(at(cyl(0.1, 0.1, 2.6, c.gold, 8), 0, y + 2, 0));
      g.add(at(sph(0.32, c.gold), 0, y + 3.4, 0));
      door(g, c, 0.9, 5.3, 1.6, 2.4);
      return y + 4.2;
    },
    // Management : pavillon de verre sous un toit-terrasse, colonnade fine
    modern(g, c) {
      const y = steps(g, c, 15, 12, 2, 0.4);
      g.add(at(rbox(12, 4.4, 8, 1.6, c.glass), 0, y + 2.2, -0.6));
      g.add(at(rbox(13.2, 0.55, 9.6, 2, c.marble), 0, y + 4.7, -0.4));
      g.add(at(rbox(9, 3.8, 6.4, 1.4, c.glass), -1.2, y + 6.9, -1));
      g.add(at(rbox(10, 0.5, 7.4, 1.6, c.color), -1.2, y + 9.05, -1));
      for (let k = 0; k < 6; k++) g.add(at(cyl(0.18, 0.18, 4.4, c.gold, 12), -5.5 + k * 2.2, y + 2.2, 4.1));
      g.add(at(rbox(4, 2.2, 2.2, 1, c.marble2), 0, y + 1.1, -0.6));
      door(g, c, y, 3.45, 1.8, 3);
      return y + 10.5;
    },
    // Finance : tour de verre arrondie sur un portique grec
    skyscraper(g, c) {
      const y = steps(g, c, 13, 13, 2, 0.4);
      g.add(at(rbox(11, 3.4, 9, 1.2, c.marble), 0, y + 1.7, -0.5));
      for (let k = 0; k < 5; k++) column(g, c, -4 + k * 2, 4.6, 3.6, 0.32, y);
      g.add(at(rbox(11.4, 0.5, 10.4, 0.6, c.marble), 0, y + 3.85, 0));
      g.add(at(rbox(6.4, 17, 6.4, 2.2, c.glass), 0, y + 4.1 + 8.5, -0.8));
      for (let k = 0; k < 6; k++) g.add(at(rbox(6.8, 0.22, 6.8, 2.3, c.marble), 0, y + 6.5 + k * 2.6, -0.8));
      g.add(at(rbox(6.9, 0.6, 6.9, 2.3, c.gold), 0, y + 21.4, -0.8));
      g.add(at(dome(2.6, c.color), 0, y + 21.7, -0.8));
      g.add(at(cyl(0.07, 0.07, 3.5, c.gold, 6), 0, y + 25.5, -0.8));
      g.add(at(sph(0.25, c.gold), 0, y + 27.3, -0.8));
      door(g, c, y, 3.55, 1.6, 2.6);
      return y + 27.5;
    },

    // Sport : gymnase grec moderne, piste d’athlétisme, tribunes, vasque olympique
    stadium(g, c) {
      const y = steps(g, c, 19, 11, 2, 0.4);
      g.add(at(rbox(16, 6, 8, 2.4, c.glass), 0, y + 3, -0.5));
      g.add(at(rbox(14.6, 5.6, 6.6, 2, c.marble2), 0, y + 2.8, -0.9));
      g.add(at(rbox(17.2, 0.22, 9.6, 2.8, c.gold), 0, y + 6.05, -0.4));
      g.add(at(rbox(17, 0.8, 9.4, 2.8, c.color), 0, y + 6.55, -0.4));
      g.add(at(dome(3.2, c.glass), 0, y + 6.9, -0.6));
      for (let k = 0; k < 6; k++) column(g, c, -6.5 + k * 2.6, 4.8, 6, 0.38, y);
      door(g, c, y, 3.6, 2.2, 3.2);
      // vasque olympique
      const fl = new THREE.MeshStandardMaterial({ color: "#ffb347", emissive: "#ff7a1a", emissiveIntensity: 0.9 });
      g.add(at(cyl(0.55, 0.75, 4.2, c.marble, 20), 11.2, 2.1, 4.2));
      g.add(at(cyl(1.3, 0.5, 0.9, c.gold, 24), 11.2, 4.6, 4.2));
      const flame = at(new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 12), fl), 11.2, 5.5, 4.2);
      flame.scale.set(1, 1.6, 1);
      flame.userData.flame = true;
      g.add(flame);
      // piste d’athlétisme derrière le gymnase
      const trackM = std("#c8603f", { roughness: 0.8 });
      const white = std("#f6f3ee", { roughness: 0.7 });
      const turf = std("#6fae55", { roughness: 0.9 });
      const z0 = -29;
      g.add(at(Object.assign(new THREE.Mesh(rboxGeo(26, 0.14, 44, 12.99), trackM), { receiveShadow: true }), 0, 0.07, z0));
      g.add(at(Object.assign(new THREE.Mesh(rboxGeo(22.4, 0.16, 40.4, 11.19), white), { receiveShadow: true }), 0, 0.08, z0));
      g.add(at(Object.assign(new THREE.Mesh(rboxGeo(21.8, 0.17, 39.8, 10.89), trackM), { receiveShadow: true }), 0, 0.085, z0));
      g.add(at(Object.assign(new THREE.Mesh(rboxGeo(18, 0.19, 36, 8.99), turf), { receiveShadow: true }), 0, 0.095, z0));
      g.add(at(rbox(18, 0.05, 0.25, 0.1, white), 0, 0.22, z0));
      [-1, 1].forEach((s) => {
        g.add(at(cyl(0.1, 0.1, 2, white, 8), -2, 1, z0 + s * 15));
        g.add(at(cyl(0.1, 0.1, 2, white, 8), 2, 1, z0 + s * 15));
        g.add(at(rbox(4.2, 0.2, 0.2, 0.08, white), 0, 2, z0 + s * 15));
      });
      // tribunes
      for (let k = 0; k < 4; k++) g.add(at(rbox(2.2, 0.9 + k * 0.9, 30, 0.5, k % 2 ? c.marble2 : c.marble), 15.2 + k * 2, (0.9 + k * 0.9) / 2, z0));
      g.add(at(rbox(9, 0.3, 31, 1, c.color), 18.2, 5.6, z0));
      [-14, 0, 14].forEach((dz) => g.add(at(cyl(0.12, 0.12, 5.6, c.gold, 8), 21.6, 2.8, z0 + dz)));
      return y + 9;
    },
    // Construction : chantier-école, halle voûtée, grue, mur en cours, échafaudage
    workshop(g, c) {
      const y = steps(g, c, 16, 12, 2, 0.4);
      g.add(at(rbox(14, 3.2, 9, 1.4, c.marble), 0, y + 1.6, -0.8));
      const vault = shadowy(new THREE.Mesh(new THREE.CylinderGeometry(4.5, 4.5, 14, 40, 1, false, 0, Math.PI), c.glass));
      vault.rotation.z = Math.PI / 2;
      vault.rotation.x = 0;
      const vg = new THREE.Group();
      vg.add(vault);
      vg.rotation.y = 0;
      vg.position.set(0, y + 3.2, -0.8);
      g.add(vg);
      for (let k = 0; k < 6; k++) {
        const rib = shadowy(new THREE.Mesh(new THREE.TorusGeometry(4.55, 0.12, 8, 32, Math.PI), c.color));
        rib.position.set(-6.5 + k * 2.6, y + 3.2, -0.8);
        rib.rotation.y = Math.PI / 2;
        g.add(rib);
      }
      for (let k = 0; k < 4; k++) column(g, c, -4.5 + k * 3, 3.9, 3.2, 0.34, y);
      door(g, c, y, 3.75, 2.4, 2.6);
      // grue à tour
      const yellow = phys({ color: c.color.color, roughness: 0.35, clearcoat: 0.8 });
      const crane = new THREE.Group();
      crane.add(at(rbox(3, 0.8, 3, 0.4, c.marble2), 0, 0.4, 0));
      for (let k = 0; k < 9; k++) crane.add(at(rbox(1.2, 2.1, 1.2, 0.2, yellow), 0, 0.8 + k * 2.2 + 1.05, 0));
      crane.add(at(rbox(1.6, 1.4, 1.6, 0.3, c.marble), 0, 21.3, 0));
      crane.add(at(rbox(1, 0.7, 16, 0.25, yellow), 0, 22.4, -5));
      crane.add(at(rbox(1.6, 1.2, 3, 0.3, c.dark), 0, 22.3, 4.5));
      crane.add(at(cyl(0.12, 0.25, 3.2, yellow, 8), 0, 24, 0));
      const hook = at(cyl(0.03, 0.03, 9, c.dark, 4), 0, 17.6, -11);
      crane.add(hook);
      crane.add(at(rbox(1.4, 0.8, 1.4, 0.2, c.marble2), 0, 12.7, -11));
      crane.position.set(-12, 0, -12);
      crane.userData.crane = true;
      g.add(crane);
      // mur en cours de construction + palettes de blocs + échafaudage
      const brick = std("#d9cfc0", { roughness: 0.8 });
      for (let r = 0; r < 5; r++)
        for (let k = 0; k < 6 - (r > 2 ? r - 2 : 0); k++) g.add(at(rbox(1.5, 0.6, 0.6, 0.08, brick), 9.5 + k * 1.58 + (r % 2) * 0.79, 0.3 + r * 0.62, -10));
      [[10.5, -5], [13.5, -5]].forEach(([x, z]) => {
        g.add(at(rbox(1.8, 0.2, 1.8, 0.1, std("#9a6b45")), x, 0.1, z));
        g.add(at(rbox(1.6, 1.2, 1.6, 0.15, brick), x, 0.8, z));
      });
      const scaf = phys({ color: "#c9cdd2", metalness: 0.6, roughness: 0.3 });
      [[8.5, -12.5], [8.5, -14.5], [19, -12.5], [19, -14.5]].forEach(([x, z]) => g.add(at(cyl(0.07, 0.07, 6, scaf, 6), x, 3, z)));
      [2, 4, 6].forEach((h) => g.add(at(rbox(11, 0.12, 2.2, 0.06, std("#b88a55")), 13.75, h, -13.5)));
      // cônes de chantier
      const cone = std("#e2672a");
      for (let k = 0; k < 4; k++) g.add(at(shadowy(new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.8, 12), cone)), -7 + k * 1.6, 0.4, 6.5));
      return y + 9;
    },
    // Nutrition et cuisine : restaurant, terrasse, pergola, potager
    restaurant(g, c) {
      const y = steps(g, c, 16, 12, 2, 0.4);
      g.add(at(rbox(12, 5, 8, 2.5, c.marble), 0, y + 2.5, -1.5));
      g.add(at(rbox(10.6, 3.8, 0.5, 0.3, c.glass), 0, y + 2.2, 2.45));
      door(g, c, y, 2.75, 1.8, 3);
      g.add(at(rbox(13, 0.35, 3.2, 0.8, c.color), 0, y + 4.5, 3.4));
      g.add(at(rbox(12.6, 0.5, 8.6, 2.6, c.gold), 0, y + 5.25, -1.5));
      g.add(at(rbox(10.6, 0.5, 6.4, 2, std("#7cb35a")), 0, y + 5.7, -1.5));
      for (let k = 0; k < 5; k++) g.add(at(sph(0.45, std("#5f9e47")), -4 + k * 2, y + 6.15, -1.5 + (k % 2 ? 1.2 : -1.2)));
      g.add(at(cyl(0.5, 0.6, 3, c.marble, 16), 4.5, y + 7, -3.5));
      g.add(at(cyl(0.7, 0.7, 0.25, c.gold, 16), 4.5, y + 8.6, -3.5));
      // terrasse
      g.add(at(Object.assign(new THREE.Mesh(rboxGeo(17, 0.24, 6.5, 1.5), c.marble2), { receiveShadow: true }), 0, 0.12, 9.3));
      const top = phys({ color: "#ffffff", roughness: 0.3, clearcoat: 1 });
      [[-5, 8], [0, 8.2], [5, 8], [-2.5, 10.8], [2.5, 10.8]].forEach(([x, z]) => {
        g.add(at(cyl(0.08, 0.12, 0.9, c.gold, 8), x, 0.7, z));
        g.add(at(cyl(0.8, 0.8, 0.1, top, 24), x, 1.2, z));
        g.add(at(cyl(0.05, 0.05, 2.4, c.gold, 6), x, 2.4, z));
        const um = dome(1.5, c.color);
        um.scale.y = 0.45;
        g.add(at(um, x, 3.4, z));
      });
      // pergola
      [[-10, -3], [-10, 3], [-13.5, -3], [-13.5, 3]].forEach(([x, z]) => g.add(at(cyl(0.18, 0.18, 4, c.gold, 10), x, 2, z)));
      for (let k = 0; k < 5; k++) g.add(at(rbox(4.6, 0.18, 0.3, 0.08, c.marble), -11.75, 4.1, -3 + k * 1.5));
      // potager
      const wood = std("#9a6b45"), soil = std("#6b4a32"), leaf = std("#6fb04f");
      for (let k = 0; k < 4; k++) {
        const x = -6 + k * 4;
        g.add(at(rbox(2.6, 0.6, 6, 0.4, wood), x, 0.3, -12));
        g.add(at(rbox(2.1, 0.1, 5.5, 0.3, soil), x, 0.62, -12));
        for (let j = 0; j < 4; j++) g.add(at(sph(0.38, leaf, 10, 8), x, 0.85, -14 + j * 1.35));
      }
      return y + 9;
    },
  };

  /* ---------- La Bibliothèque : tholos de verre et ailes modernes ---------- */
  function buildLibrary(g) {
    const c = palette("#c9a24a", true);
    c.glass = phys({ color: new THREE.Color("#9fcbe0"), roughness: 0.03, metalness: 0.15, clearcoat: 1, transparent: true, opacity: 0.6, envMapIntensity: 1.1 });
    for (let k = 0; k < 4; k++) g.add(at(cyl(13 - k * 0.9, 13.3 - k * 0.9, 0.45, k % 2 ? c.marble2 : c.marble, 72), 0, 0.22 + k * 0.45, 0));
    const y = 1.8;
    // grand escalier vers le Quad
    for (let k = 0; k < 4; k++) g.add(at(rbox(9, 0.45, 2.4, 0.4, c.marble), 0, 0.22 + k * 0.45, 12.6 - k * 0.9));
    g.add(at(cyl(7.2, 7.2, 9, c.glass, 64), 0, y + 4.5, 0));
    g.add(at(cyl(6.4, 6.4, 8.8, c.marble2, 48), 0, y + 4.4, 0));
    // rayonnages visibles derrière le verre
    const shelf = std("#8a5a3a");
    for (let k = 0; k < 12; k++) {
      const a = (k / 12) * Math.PI * 2;
      const s = rbox(1.6, 7, 0.5, 0.2, shelf);
      s.position.set(Math.cos(a) * 6.65, y + 3.8, Math.sin(a) * 6.65);
      s.rotation.y = -a + Math.PI / 2;
      g.add(s);
    }
    const n = 18;
    for (let k = 0; k < n; k++) {
      const a = (k / n) * Math.PI * 2;
      column(g, c, Math.cos(a) * 9.3, Math.sin(a) * 9.3, 9.4, 0.5, y);
    }
    g.add(at(cyl(10.2, 10.2, 1, c.marble, 72), 0, y + 9.9, 0));
    g.add(at(torus(10.25, 0.18, c.gold), 0, y + 10.45, 0));
    g.add(at(cyl(8, 8.6, 1.4, c.marble2, 64), 0, y + 11.1, 0));
    g.add(at(dome(8, c.glass), 0, y + 11.8, 0));
    for (let k = 0; k < 12; k++) {
      const rib = shadowy(new THREE.Mesh(new THREE.TorusGeometry(8.03, 0.1, 6, 32, Math.PI / 2), c.gold));
      rib.position.set(0, y + 11.8, 0);
      rib.rotation.y = (k / 12) * Math.PI * 2;
      g.add(rib);
    }
    g.add(at(cyl(1.2, 1.5, 1.6, c.marble, 24), 0, y + 20.3, 0));
    g.add(at(sph(0.9, c.gold), 0, y + 21.8, 0));
    // ailes modernes arrondies
    [-1, 1].forEach((s) => {
      g.add(at(rbox(10, 6.5, 11, 2.6, c.marble), s * 15.5, 3.25, -2));
      for (let k = 0; k < 3; k++) g.add(at(rbox(8.6, 0.9, 11.2, 2.2, c.glass), s * 15.5, 1.6 + k * 1.9, -2));
      g.add(at(rbox(10.4, 0.5, 11.4, 2.7, c.marble2), s * 15.5, 6.7, -2));
      g.add(at(rbox(10.5, 0.16, 11.5, 2.7, c.gold), s * 15.5, 6.4, -2));
    });
    door(g, c, y, 7.25, 2.4, 4.2);
    return 25;
  }

  /* ---------- Porte monumentale (propylée) ---------- */
  function buildGate(g) {
    const c = palette("#c9a24a", true);
    steps(g, c, 16, 5, 2, 0.35);
    [-5.4, -2.2, 2.2, 5.4].forEach((x) => column(g, c, x, 0, 6.5, 0.48, 0.7));
    g.add(at(rbox(13.6, 1.1, 3, 0.5, c.marble), 0, 7.75, 0));
    g.add(at(rbox(13.8, 0.3, 3.2, 0.15, c.gold), 0, 8.45, 0));
    g.add(at(pediment(13.6, 2, 2.8, c.marble), 0, 8.6, 0));
    g.add(at(sph(0.45, c.gold), 0, 11, 0));
  }

  /* ---------- Ciel et environnement brillant ---------- */
  function skyTexture() {
    const cv = document.createElement("canvas");
    cv.width = 4;
    cv.height = 256;
    const x = cv.getContext("2d");
    const gr = x.createLinearGradient(0, 0, 0, 256);
    gr.addColorStop(0, "#9fcbe8");
    gr.addColorStop(0.55, "#d9ecf4");
    gr.addColorStop(1, "#f6efe2");
    x.fillStyle = gr;
    x.fillRect(0, 0, 4, 256);
    return new THREE.CanvasTexture(cv);
  }
  function envMap(renderer) {
    const es = new THREE.Scene();
    const geo = new THREE.SphereGeometry(50, 32, 16);
    const cols = [];
    const pos = geo.attributes.position;
    const top = new THREE.Color("#5d97c9"), mid = new THREE.Color("#cfdde4"), bot = new THREE.Color("#5f7f4a");
    for (let i = 0; i < pos.count; i++) {
      const t = pos.getY(i) / 50;
      const cc = t > 0 ? mid.clone().lerp(top, t) : mid.clone().lerp(bot, Math.min(1, -t * 2));
      cols.push(cc.r, cc.g, cc.b);
    }
    geo.setAttribute("color", new THREE.Float32BufferAttribute(cols, 3));
    es.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide })));
    const lightM = new THREE.MeshBasicMaterial({ color: 0xffffff });
    [[30, 35, 20, 14], [-35, 25, -10, 10], [0, 45, -30, 8]].forEach(([x, y, z, s]) => {
      const p = new THREE.Mesh(new THREE.SphereGeometry(s, 16, 8), lightM);
      p.position.set(x, y, z);
      es.add(p);
    });
    const pm = new THREE.PMREMGenerator(renderer);
    const tex = pm.fromScene(es, 0.03).texture;
    pm.dispose();
    return tex;
  }

  A.createCampus = function (container, labelsEl, faculties, opts) {
    opts = opts || {};
    const W = () => container.clientWidth,
      H = () => container.clientHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(W(), H());
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    const canvas = renderer.domElement;

    const scene = new THREE.Scene();
    scene.background = skyTexture();
    const FOG = new THREE.Color("#e9eef0");
    scene.fog = new THREE.Fog(FOG, 120, 260);
    try {
      ENV = envMap(renderer);
    } catch (e) {
      ENV = null; // reflets facultatifs
    }
    const camera = new THREE.PerspectiveCamera(42, W() / H(), 0.5, 700);

    scene.add(new THREE.HemisphereLight(0xeaf3ff, 0x7d8a5c, 0.55));
    const sun = new THREE.DirectionalLight(0xfff0d8, 0.9);
    sun.position.set(55, 85, 40);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left: -95, right: 95, top: 95, bottom: -95, near: 10, far: 260 });
    sun.shadow.bias = -0.0004;
    scene.add(sun);

    /* ---------- Sol, Quad, allées ---------- */
    const grass = std("#9cc47c", { roughness: 0.95 });
    const ground = new THREE.Mesh(new THREE.CylinderGeometry(190, 190, 1, 96), grass);
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    scene.add(ground);
    const lawn = std("#a9d184", { roughness: 0.9 });
    scene.add(at(Object.assign(new THREE.Mesh(rboxGeo(2 * QX - 4, 0.12, 2 * QZ - 4, 6), lawn), { receiveShadow: true }), 0, 0.06, 0));
    const pathM = std("#dccfb2", { roughness: 0.9 });
    const pave = (w, d, x, z, rotY) => {
      const p = new THREE.Mesh(rboxGeo(w, 0.2, d, Math.min(1.4, w / 2, d / 2)), pathM);
      p.receiveShadow = true;
      p.position.set(x, 0.1, z);
      if (rotY) p.rotation.y = rotY;
      scene.add(p);
      return p;
    };
    // pourtour du Quad
    pave(2 * QX + 3.5, 3.5, 0, -QZ);
    pave(2 * QX + 3.5, 3.5, 0, QZ);
    pave(3.5, 2 * QZ + 3.5, -QX, 0);
    pave(3.5, 2 * QZ + 3.5, QX, 0);
    // diagonales façon « Yard »
    const diag = Math.hypot(QX, QZ);
    [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([sx, sz]) => {
      const L = diag - 9;
      const ang = Math.atan2(sx * QX, sz * QZ);
      pave(2.6, L, (sx * QX * (9 + L / 2)) / diag, (sz * QZ * (9 + L / 2)) / diag, ang);
    });
    // axe nord-sud : Bibliothèque → fontaine → porte
    pave(4.5, QZ - 9, 0, -(9 + (QZ - 9) / 2));
    pave(4.5, QZ - 9, 0, 9 + (QZ - 9) / 2);
    pave(5, 60, 0, QZ + 30);
    pave(2 * QX - 6, 3, 0, 0);
    // place centrale
    const plaza = new THREE.Mesh(new THREE.CylinderGeometry(9.5, 9.5, 0.24, 72), std("#e6dcc6", { roughness: 0.8 }));
    plaza.position.y = 0.12;
    plaza.receiveShadow = true;
    scene.add(plaza);

    /* ---------- Fontaine et sphère d’or ---------- */
    const cc = palette("#c9a24a", true);
    scene.add(at(cyl(5.4, 5.8, 0.9, cc.marble, 64), 0, 0.6, 0));
    scene.add(at(torus(5.5, 0.22, cc.gold), 0, 1.05, 0));
    const water = new THREE.Mesh(new THREE.CylinderGeometry(4.9, 4.9, 0.12, 64), phys({ color: "#3fa7c9", roughness: 0.05, clearcoat: 1, transparent: true, opacity: 0.9, envMapIntensity: 1 }));
    water.position.y = 1.08;
    scene.add(water);
    scene.add(at(cyl(0.7, 1.1, 3.6, cc.marble, 24), 0, 2.9, 0));
    scene.add(at(cyl(1.6, 0.9, 0.5, cc.marble2, 24), 0, 4.9, 0));
    const globe = sph(1.7, cc.gold, 40, 24);
    globe.position.y = 7;
    scene.add(globe);
    const orbit = shadowy(new THREE.Mesh(new THREE.TorusGeometry(2.6, 0.07, 8, 64), cc.gold));
    orbit.position.y = 7;
    scene.add(orbit);

    /* ---------- Bâtiments ---------- */
    const pickables = [];
    const buildings = [];
    function place(g, slot) {
      g.position.set(slot.x, 0, slot.z);
      g.rotation.y = Math.atan2(slot.f[0], slot.f[1]);
    }
    function pathTo(slot, front) {
      // allée de la porte jusqu’au pourtour du Quad (ou de la place)
      const fx = slot.f[0], fz = slot.f[1];
      const n = Math.hypot(fx, fz);
      const ux = fx / n, uz = fz / n;
      const sx = slot.x + ux * front, sz = slot.z + uz * front;
      let L = 0;
      const reached = (x, z) => (Math.abs(x) <= QX && Math.abs(z) <= QZ) || (Math.abs(x) <= 2.5 && z > QZ && z < QZ + 60) || (Math.abs(z) <= 1.75 && Math.abs(x) < 82);
      while (L < 80 && !reached(sx + ux * L, sz + uz * L)) L += 0.5;
      if (L < 1) return;
      pave(3, L + 1, sx + (ux * L) / 2, sz + (uz * L) / 2, Math.atan2(ux, uz));
    }
    function addLabel(id, title, sub, color, cls) {
      const label = document.createElement("button");
      label.className = "bldg-label " + cls;
      label.style.setProperty("--c", color);
      label.innerHTML = `<b>${title}</b><small>${sub}</small>`;
      label.addEventListener("click", (e) => {
        e.stopPropagation();
        select(id);
      });
      labelsEl.appendChild(label);
      return label;
    }
    function register(g, id) {
      g.traverse((o) => {
        if (o.isMesh) {
          o.userData.fid = id;
          pickables.push(o);
        }
      });
    }

    let si = 0;
    faculties.forEach((fac) => {
      const sp = SPECIAL[fac.style];
      const slot = sp || SLOTS[si++ % SLOTS.length];
      const g = new THREE.Group();
      place(g, slot);
      const open = fac.status === "open";
      const top = (BUILDERS[fac.style] || BUILDERS.temple)(g, palette(fac.color, open));
      register(g, fac.id);
      scene.add(g);
      pathTo(slot, sp ? sp.front : 7.5);

      const n = Math.hypot(slot.f[0], slot.f[1]);
      const ux = slot.f[0] / n, uz = slot.f[1] / n;
      let halo = null;
      if (open) {
        halo = new THREE.Mesh(new THREE.RingGeometry(1.6, 2.3, 48), new THREE.MeshBasicMaterial({ color: fac.color, transparent: true, opacity: 0.7, side: THREE.DoubleSide }));
        halo.rotation.x = -Math.PI / 2;
        const hd = (sp ? sp.front : 7.5) + 2.5;
        halo.position.set(slot.x + ux * hd, 0.25, slot.z + uz * hd);
        scene.add(halo);
        // oriflammes arrondies de part et d’autre de l’entrée
        [-1, 1].forEach((s) => {
          const px = slot.x + ux * 9.5 - uz * 4.2 * s, pz = slot.z + uz * 9.5 + ux * 4.2 * s;
          scene.add(at(cyl(0.09, 0.09, 7, cc.gold, 8), px, 3.5, pz));
          const ban = rbox(0.12, 2.6, 1.3, 0.06, phys({ color: fac.color, roughness: 0.3, clearcoat: 1 }));
          ban.position.set(px, 5.4, pz);
          ban.rotation.y = Math.atan2(ux, uz) + Math.PI / 2;
          scene.add(ban);
          scene.add(at(sph(0.18, cc.gold), px, 7.1, pz));
        });
      }
      const label = addLabel(fac.id, fac.short, open ? "Ouvert" : "Bientôt", fac.color, open ? "open" : "soon");
      buildings.push({ id: fac.id, fac, slot, top, halo, label, anchor: new THREE.Vector3(slot.x, Math.min(top, 13) + 2.5, slot.z) });
    });

    // Bibliothèque
    {
      const g = new THREE.Group();
      place(g, LIB_POS);
      const top = buildLibrary(g);
      register(g, LIB);
      scene.add(g);
      pathTo(LIB_POS, 13.5);
      const label = addLabel(LIB, "Bibliothèque", "Fiches · Révisions", "#b8892f", "open lib");
      buildings.push({ id: LIB, fac: null, slot: Object.assign({ near: true }, LIB_POS), top, halo: null, label, anchor: new THREE.Vector3(LIB_POS.x, top + 2, LIB_POS.z) });
    }
    // Porte
    {
      const g = new THREE.Group();
      g.position.set(0, 0, QZ + 22);
      buildGate(g);
      scene.add(g);
    }

    /* ---------- Végétation ---------- */
    let seed = 11;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const trunkG = new THREE.CylinderGeometry(0.2, 0.3, 2, 8);
    const trunkM = std("#8a6544");
    const leafM = ["#6fae5a", "#5d9f4f", "#82bd63", "#4f8f46"].map((c) => phys({ color: c, roughness: 0.45, clearcoat: 0.5, clearcoatRoughness: 0.3 }));
    const cypM = phys({ color: "#3f7a45", roughness: 0.5, clearcoat: 0.4 });
    const ballG = new THREE.SphereGeometry(1.7, 20, 14);
    function tree(x, z, s) {
      const t = new THREE.Group();
      t.add(at(shadowy(new THREE.Mesh(trunkG, trunkM)), 0, 1, 0));
      const m = leafM[Math.floor(rnd() * leafM.length)];
      t.add(at(shadowy(new THREE.Mesh(ballG, m)), 0, 3.3, 0));
      if (rnd() < 0.5) {
        const b2 = at(shadowy(new THREE.Mesh(ballG, m)), 0.9, 2.7, 0.3);
        b2.scale.setScalar(0.6);
        t.add(b2);
      }
      t.position.set(x, 0, z);
      t.scale.setScalar(s);
      scene.add(t);
    }
    function cypress(x, z, s) {
      const t = new THREE.Group();
      t.add(at(shadowy(new THREE.Mesh(trunkG, trunkM)), 0, 0.6, 0));
      const c = at(shadowy(new THREE.Mesh(ballG, cypM)), 0, 3.6, 0);
      c.scale.set(0.55, 1.9, 0.55);
      t.add(c);
      t.position.set(x, 0, z);
      t.scale.setScalar(s);
      scene.add(t);
    }
    const blocked = (x, z) => {
      for (const b of buildings) {
        if (b.slot.c) {
          if (Math.hypot(x - b.slot.c[0], z - b.slot.c[1]) < b.slot.clear) return true;
          continue;
        }
        const r = b.id === LIB ? 28 : 14;
        if (Math.hypot(x - b.slot.x, z - b.slot.z) < r) return true;
      }
      if (Math.abs(x) < QX + 4 && Math.abs(z) < QZ + 4) return true; // Quad
      if (Math.abs(x) < 9 && z > QZ && z < QZ + 64) return true; // avenue
      if (Math.abs(z) < 6 && Math.abs(x) < 90) return true; // allée est-ouest
      return false;
    };
    // rangées d’arbres dans le Quad, le long du pourtour (hors diagonales)
    const onDiag = (x, z) => Math.min(Math.abs(QZ * x - QX * z), Math.abs(QZ * x + QX * z)) / Math.hypot(QX, QZ) < 3.2;
    const qtree = (x, z) => !onDiag(x, z) && tree(x, z, 0.85);
    for (let x = -QX + 6; x <= QX - 6; x += 7.5) {
      if (Math.abs(x) < 5) continue;
      qtree(x, -QZ + 4.5);
      qtree(x, QZ - 4.5);
    }
    for (let z = -QZ + 8; z <= QZ - 8; z += 7.5) {
      if (Math.abs(z) < 4) continue;
      qtree(-QX + 4.5, z);
      qtree(QX - 4.5, z);
    }
    // cyprès le long de l’avenue et autour de la Bibliothèque
    for (let z = QZ + 6; z < QZ + 58; z += 6) {
      if (Math.abs(z - (QZ + 22)) < 5) continue;
      cypress(-5, z, 1);
      cypress(5, z, 1);
    }
    for (let k = 0; k < 9; k++) {
      const a = Math.PI * (0.05 + (k / 8) * 0.9);
      cypress(LIB_POS.x + Math.cos(a) * 31, LIB_POS.z - Math.sin(a) * 18 - 2, 1.1);
    }
    // bosquets à l’extérieur du village
    for (let k = 0; k < 260; k++) {
      const ang = rnd() * Math.PI * 2;
      const r = 40 + rnd() * 120;
      const x = Math.cos(ang) * r, z = Math.sin(ang) * r;
      if (blocked(x, z)) continue;
      if (rnd() < 0.25) cypress(x, z, 0.8 + rnd() * 0.5);
      else tree(x, z, 0.8 + rnd() * 0.7);
    }

    /* ---------- Bancs et lampadaires ---------- */
    const benchM = phys({ color: "#f3ede2", roughness: 0.35, clearcoat: 0.6 });
    const lampM = phys({ color: "#3f4144", roughness: 0.35, metalness: 0.6 });
    const glow = new THREE.MeshStandardMaterial({ color: "#fff6d8", emissive: "#ffdf8a", emissiveIntensity: 0.7 });
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2 + Math.PI / 8;
      const b = rbox(2.4, 0.5, 0.8, 0.3, benchM);
      b.position.set(Math.cos(a) * 11.5, 0.45, Math.sin(a) * 11.5);
      b.rotation.y = -a + Math.PI / 2;
      scene.add(b);
    }
    const lamp = (x, z) => {
      scene.add(at(cyl(0.08, 0.12, 3.6, lampM, 8), x, 1.8, z));
      scene.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 10), glow), x, 3.8, z));
    };
    for (let x = -QX; x <= QX; x += 15.5) {
      lamp(x, -QZ - 2.6);
      lamp(x, QZ + 2.6);
    }
    for (let z = -QZ + 11.5; z <= QZ - 11; z += 11.5) {
      lamp(-QX - 2.6, z);
      lamp(QX + 2.6, z);
    }

    for (let x = QX + 8; x < 74; x += 10) {
      lamp(x, 3);
      lamp(-x, -3);
    }
    const flames = [];
    scene.traverse((o) => o.userData.flame && flames.push(o));

    /* ---------- Nuages arrondis ---------- */
    const clouds = [];
    const cloudM = phys({ color: "#ffffff", roughness: 0.7, clearcoat: 0.3, transparent: true, opacity: 0.92 });
    for (let k = 0; k < 8; k++) {
      const c = new THREE.Group();
      for (let j = 0; j < 4; j++) {
        const s = new THREE.Mesh(new THREE.SphereGeometry(2.6 + rnd() * 2, 16, 12), cloudM);
        s.position.set(j * 3 - 4.5, rnd() * 1.2, rnd() * 2);
        c.add(s);
      }
      c.position.set(-170 + rnd() * 340, 88 + rnd() * 14, -170 + rnd() * 340);
      clouds.push(c);
      scene.add(c);
    }

    /* ---------- Obstacles (balade) ---------- */
    const colliders = [{ x: 0, z: 0, r: 6.2 }]; // fontaine
    [-5.4, -2.2, 2.2, 5.4].forEach((x) => colliders.push({ x, z: QZ + 22, r: 0.9 }));
    const toWorld = (slot, lx, lz) => {
      const th = Math.atan2(slot.f[0], slot.f[1]);
      return [slot.x + lx * Math.cos(th) + lz * Math.sin(th), slot.z - lx * Math.sin(th) + lz * Math.cos(th)];
    };
    const LOCAL_COLL = {
      stadium: [[-4.5, 0, 6.5], [4.5, 0, 6.5], [11.2, 4.2, 1.3], [18, -40, 4.5], [18, -29, 4.5], [18, -18, 4.5]],
      restaurant: [[-3.5, -1, 6.5], [3.5, -1, 6.5], [-2, -12, 5.5], [4, -12, 5]],
      workshop: [[-3.5, -0.5, 7], [3.5, -0.5, 7], [-12, -12, 2.2], [13.5, -10, 5], [12, -5, 2.5]],
      library: [[0, 0, 13.5], [-15.5, -2, 6.5], [15.5, -2, 6.5]],
      default: [[-3.5, 0, 7], [3.5, 0, 7]],
    };
    buildings.forEach((b) => {
      const kind = b.id === LIB ? "library" : LOCAL_COLL[b.fac.style] ? b.fac.style : "default";
      LOCAL_COLL[kind].forEach(([lx, lz, r]) => {
        const [x, z] = toWorld(b.slot, lx, lz);
        colliders.push({ x, z, r });
      });
      const n = Math.hypot(b.slot.f[0], b.slot.f[1]);
      const front = b.id === LIB ? 16 : (SPECIAL[b.fac && b.fac.style] || {}).front || 7.5;
      b.door = { x: b.slot.x + (b.slot.f[0] / n) * (front + 4), z: b.slot.z + (b.slot.f[1] / n) * (front + 4) };
    });
    scene.traverse((o) => {
      if (o.isGroup && o.children.length && o.children[0].geometry === trunkG) colliders.push({ x: o.position.x, z: o.position.z, r: 0.55 * o.scale.x });
    });

    /* ---------- Caméras : balade (à hauteur d’yeux) et vue du ciel ---------- */
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    const EYE = 3.2, PR = 0.8;
    const player = { x: 0, z: QZ + 36, yaw: Math.PI, pitch: -0.04 };
    let mode = "walk";
    let target = null; // { x, z, id? }
    let bob = 0;
    const keys = new Set();
    const homeR = () => {
      const asp = W() / H();
      return asp < 1 ? Math.min(210, 128 * (1 + (1 - asp) * 1.1)) : 128;
    };
    const HOME = { target: new THREE.Vector3(0, 2, 2), r: homeR(), phi: 0.92 };
    const sky = { target: HOME.target.clone(), r: HOME.r, theta: Math.PI / 2, phi: HOME.phi };
    const camPos = new THREE.Vector3(0, 140, 210), camLook = new THREE.Vector3(0, 0, 0);
    const wantPos = new THREE.Vector3(), wantLook = new THREE.Vector3();
    let soft = performance.now() + 2600; // transition douce (arrivée, changement de vue)
    let focused = null,
      paused = false;

    function setFog() {
      if (mode === "walk") {
        scene.fog.near = 60;
        scene.fog.far = 240;
      } else {
        scene.fog.near = sky.r + 20;
        scene.fog.far = sky.r + 170;
      }
    }
    setFog();

    // marqueur de destination
    const marker = new THREE.Mesh(new THREE.RingGeometry(0.7, 1.05, 40), new THREE.MeshBasicMaterial({ color: "#ffffff", transparent: true, opacity: 0, depthWrite: false }));
    marker.rotation.x = -Math.PI / 2;
    marker.position.y = 0.3;
    scene.add(marker);

    // bouton balade / vue du ciel
    const toggle = document.createElement("button");
    toggle.className = "view-toggle";
    labelsEl.appendChild(toggle);
    const renderToggle = () => (toggle.innerHTML = mode === "walk" ? "<span>🗺️</span> Vue du ciel" : "<span>🚶</span> Se balader");
    renderToggle();
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      setMode(mode === "walk" ? "sky" : "walk");
    });
    function setMode(m) {
      if (m === mode) return;
      mode = m;
      target = null;
      focused = null;
      if (mode === "sky") {
        sky.target.set(player.x * 0.5, 2, player.z * 0.5);
        sky.r = HOME.r;
        sky.phi = HOME.phi;
        sky.theta = Math.atan2(player.z - sky.target.z, player.x - sky.target.x) || Math.PI / 2;
      }
      soft = performance.now() + 2200;
      setFog();
      renderToggle();
    }

    /* ---------- Entrées ---------- */
    const pointers = new Map();
    let dragDist = 0,
      pinch0 = 0,
      pinchR = 0;
    const pdist = () => {
      const [p, q] = [...pointers.values()];
      return Math.hypot(p.x - q.x, p.y - q.y);
    };
    canvas.addEventListener("pointerdown", (e) => {
      canvas.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 1) dragDist = 0;
      if (pointers.size === 2) {
        pinch0 = pdist();
        pinchR = sky.r;
      }
    });
    canvas.addEventListener("pointermove", (e) => {
      if (!pointers.has(e.pointerId)) return hover(e);
      const prev = pointers.get(e.pointerId);
      const dx = e.clientX - prev.x,
        dy = e.clientY - prev.y;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 1) {
        dragDist += Math.abs(dx) + Math.abs(dy);
        if (dragDist < 4) return;
        canvas.style.cursor = "grabbing";
        if (mode === "walk") {
          player.yaw += dx * 0.0045;
          player.pitch = clamp(player.pitch + dy * 0.0035, -0.75, 0.6);
        } else {
          sky.theta += dx * 0.006;
          sky.phi = clamp(sky.phi - dy * 0.004, 0.4, 1.38);
        }
      } else if (pointers.size === 2 && mode === "sky") {
        sky.r = clamp((pinchR * pinch0) / Math.max(pdist(), 1), 24, 220);
        dragDist += 20;
      }
    });
    const up = (e) => {
      const wasTap = pointers.size === 1 && dragDist < 6;
      pointers.delete(e.pointerId);
      canvas.style.cursor = "";
      if (!wasTap || e.type !== "pointerup") return;
      const id = pick(e);
      if (id) return select(id);
      const g = groundAt(e);
      if (!g) return;
      if (mode === "sky") {
        // descendre se balader à l’endroit cliqué
        player.x = g.x;
        player.z = g.z;
        player.yaw = Math.atan2(-g.x, -g.z);
        player.pitch = -0.04;
        resolve();
        setMode("walk");
      } else walkTo(g.x, g.z);
    };
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointercancel", up);
    canvas.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        if (mode === "sky") sky.r = clamp(sky.r * (1 + e.deltaY * 0.001), 24, 220);
        else {
          // molette : avancer / reculer
          const step = clamp(-e.deltaY * 0.03, -6, 6);
          target = null;
          player.x += Math.sin(player.yaw) * step;
          player.z += Math.cos(player.yaw) * step;
          resolve();
        }
      },
      { passive: false }
    );
    const MOVE_KEYS = ["z", "w", "s", "q", "a", "d", "arrowup", "arrowdown", "arrowleft", "arrowright", "shift"];
    window.addEventListener("keydown", (e) => {
      const tag = (e.target && e.target.tagName) || "";
      if (paused || tag === "INPUT" || tag === "TEXTAREA") return;
      const k = e.key.toLowerCase();
      if (!MOVE_KEYS.includes(k)) return;
      if (mode === "sky") setMode("walk");
      keys.add(k);
      target = null;
      if (k.startsWith("arrow")) e.preventDefault();
    });
    window.addEventListener("keyup", (e) => keys.delete(e.key.toLowerCase()));
    window.addEventListener("blur", () => keys.clear());

    const ray = new THREE.Raycaster(),
      ndc = new THREE.Vector2(),
      groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
      hitP = new THREE.Vector3();
    function setRay(e) {
      const rect = canvas.getBoundingClientRect();
      ndc.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
      ray.setFromCamera(ndc, camera);
    }
    function pick(e) {
      setRay(e);
      const hit = ray.intersectObjects(pickables, false)[0];
      return hit ? hit.object.userData.fid : null;
    }
    function groundAt(e) {
      setRay(e);
      if (!ray.ray.intersectPlane(groundPlane, hitP)) return null;
      const d = Math.hypot(hitP.x - player.x, hitP.z - player.z);
      if (mode === "walk" && d > 140) return null;
      const r = Math.hypot(hitP.x, hitP.z);
      if (r > 165) return null;
      return { x: hitP.x, z: hitP.z };
    }
    let hovered = null;
    function hover(e) {
      const id = pick(e);
      if (id === hovered) return;
      hovered = id;
      canvas.style.cursor = id ? "pointer" : "";
      buildings.forEach((b) => b.label.classList.toggle("hover", b.id === id));
    }

    function walkTo(x, z, id) {
      target = { x, z, id: id || null, since: performance.now(), lastD: Infinity, stuck: 0 };
      marker.position.x = x;
      marker.position.z = z;
      marker.material.opacity = id ? 0 : 0.9;
    }
    function openBuilding(id) {
      const b = buildings.find((x) => x.id === id);
      if (!b) return;
      focused = id;
      if (id === LIB) opts.onLibrary && opts.onLibrary();
      else opts.onSelect && opts.onSelect(b.fac);
    }
    function select(id) {
      const b = buildings.find((x) => x.id === id);
      if (!b) return;
      if (mode === "sky") {
        skyFocus(b);
        return openBuilding(id);
      }
      if (Math.hypot(player.x - b.door.x, player.z - b.door.z) < 5) {
        faceBuilding(b);
        return openBuilding(id);
      }
      walkTo(b.door.x, b.door.z, id);
    }
    function faceBuilding(b) {
      player.yaw = Math.atan2(b.slot.x - player.x, b.slot.z - player.z);
      player.pitch = 0.12;
    }
    function skyFocus(b) {
      const n = Math.hypot(b.slot.f[0], b.slot.f[1]);
      const ux = b.slot.f[0] / n, uz = b.slot.f[1] / n;
      const lib = b.id === LIB;
      sky.target.set(b.slot.x + ux * (lib ? 8 : 5), lib ? 8 : 5.5, b.slot.z + uz * (lib ? 8 : 5));
      let th = Math.atan2(uz, ux);
      th += Math.PI * 2 * Math.round((sky.theta - th) / (Math.PI * 2));
      sky.theta = th + 0.25;
      sky.r = lib ? 52 : b.slot.view || Math.max(34, b.top * 1.9);
      sky.phi = 1.16;
    }
    // accès direct (liste du campus) : on se retrouve devant la porte
    function focus(id) {
      const b = buildings.find((x) => x.id === id);
      if (!b) return;
      focused = id;
      target = null;
      if (mode === "sky") return skyFocus(b);
      player.x = b.door.x;
      player.z = b.door.z;
      faceBuilding(b);
      soft = performance.now() + 1500;
    }
    function unfocus() {
      focused = null;
      if (mode === "sky") {
        sky.target.copy(HOME.target);
        sky.r = HOME.r;
        sky.phi = HOME.phi;
      } else player.pitch = -0.04;
    }

    function resolve() {
      for (let pass = 0; pass < 2; pass++)
        for (const c of colliders) {
          const dx = player.x - c.x, dz = player.z - c.z;
          const d = Math.hypot(dx, dz), min = c.r + PR;
          if (d < min) {
            const nx = d > 1e-4 ? dx / d : 1, nz = d > 1e-4 ? dz / d : 0;
            player.x = c.x + nx * min;
            player.z = c.z + nz * min;
          }
        }
      const r = Math.hypot(player.x, player.z);
      if (r > 165) {
        player.x *= 165 / r;
        player.z *= 165 / r;
      }
    }
    const angDiff = (a, b) => Math.atan2(Math.sin(b - a), Math.cos(b - a));

    function updateWalk(dt, t) {
      let mx = 0, mz = 0, speed = 0;
      const fx = Math.sin(player.yaw), fz = Math.cos(player.yaw);
      const turn = (keys.has("arrowleft") ? 1 : 0) - (keys.has("arrowright") ? 1 : 0);
      player.yaw += turn * dt * 1.9;
      const fwd = (keys.has("z") || keys.has("w") || keys.has("arrowup") ? 1 : 0) - (keys.has("s") || keys.has("arrowdown") ? 1 : 0);
      const side = (keys.has("d") ? 1 : 0) - (keys.has("q") || keys.has("a") ? 1 : 0);
      if (fwd || side) {
        mx = fx * fwd - fz * side;
        mz = fz * fwd + fx * side;
        speed = keys.has("shift") ? 20 : 11;
      } else if (target) {
        const dx = target.x - player.x, dz = target.z - player.z;
        const d = Math.hypot(dx, dz);
        if (d < 0.6) {
          const id = target.id;
          target = null;
          if (id) {
            const b = buildings.find((x) => x.id === id);
            faceBuilding(b);
            setTimeout(() => openBuilding(id), 250);
          }
        } else {
          mx = dx / d;
          mz = dz / d;
          speed = Math.min(target.id ? 18 : 12, d * 3 + 2);
          if (pointers.size === 0) player.yaw += angDiff(player.yaw, Math.atan2(dx, dz)) * Math.min(1, dt * 3.5);
          // bloqué contre un obstacle : on s’arrête (ou on entre si on est tout près)
          if (d > target.lastD - 0.01) target.stuck += dt;
          else target.stuck = 0;
          target.lastD = d;
          if (target.stuck > 0.6) {
            const id = target.id;
            target = null;
            if (id && d < 14) openBuilding(id);
          }
        }
      }
      if (speed) {
        const n = Math.hypot(mx, mz) || 1;
        player.x += (mx / n) * speed * dt;
        player.z += (mz / n) * speed * dt;
        bob += dt * speed * 0.9;
        resolve();
      }
      marker.material.opacity = target && !target.id ? 0.55 + 0.35 * Math.sin(t / 180) : Math.max(0, marker.material.opacity - dt * 2);
      const cp = Math.cos(player.pitch);
      const y = EYE + (speed ? Math.sin(bob) * 0.07 : 0);
      wantPos.set(player.x, y, player.z);
      wantLook.set(player.x + Math.sin(player.yaw) * cp * 10, y + Math.sin(player.pitch) * 10, player.z + Math.cos(player.yaw) * cp * 10);
    }
    function updateSky() {
      const sp = Math.sin(sky.phi);
      wantPos.set(sky.target.x + sky.r * sp * Math.cos(sky.theta), sky.target.y + sky.r * Math.cos(sky.phi), sky.target.z + sky.r * sp * Math.sin(sky.theta));
      wantLook.copy(sky.target);
    }

    /* ---------- Boucle ---------- */
    const v = new THREE.Vector3();
    let last = performance.now();
    function frame(t) {
      requestAnimationFrame(frame);
      const dt = Math.min(0.1, (t - last) / 1000);
      last = t;
      if (paused) return;
      if (mode === "walk") updateWalk(dt, t);
      else updateSky();
      const rate = t < soft ? 2.4 : mode === "walk" ? 18 : 5;
      const k = 1 - Math.exp(-dt * rate);
      camPos.lerp(wantPos, k);
      camLook.lerp(wantLook, k);
      const fov = mode === "walk" ? 62 : 42;
      if (Math.abs(camera.fov - fov) > 0.05) {
        camera.fov += (fov - camera.fov) * (1 - Math.exp(-dt * 3));
        camera.updateProjectionMatrix();
      }
      camera.position.copy(camPos);
      camera.lookAt(camLook);

      globe.rotation.y += dt * 0.4;
      globe.position.y = 7 + Math.sin(t / 900) * 0.2;
      orbit.position.y = globe.position.y;
      orbit.rotation.x = 1.2 + Math.sin(t / 2000) * 0.15;
      orbit.rotation.z += dt * 0.5;
      flames.forEach((f, i) => {
        f.scale.y = 1.6 + Math.sin(t / 120 + i) * 0.18;
        f.scale.x = f.scale.z = 1 + Math.sin(t / 90 + i) * 0.06;
      });
      clouds.forEach((c, i) => {
        c.position.x += dt * (0.6 + i * 0.08);
        if (c.position.x > 170) c.position.x = -170;
      });
      buildings.forEach((b) => {
        if (b.halo) {
          const s = 1 + 0.12 * Math.sin(t / 400);
          b.halo.scale.set(s, s, s);
          b.halo.material.opacity = 0.45 + 0.3 * Math.sin(t / 400);
        }
        v.copy(b.anchor).project(camera);
        const far = mode === "walk" && Math.hypot(b.slot.x - player.x, b.slot.z - player.z) > 120;
        const visible = !far && v.z < 1 && Math.abs(v.x) < 1.2 && Math.abs(v.y) < 1.2;
        b.label.style.display = visible ? "" : "none";
        if (visible) b.label.style.transform = `translate(-50%,-100%) translate(${(v.x * 0.5 + 0.5) * W()}px,${(-v.y * 0.5 + 0.5) * H()}px)`;
      });
      renderer.render(scene, camera);
    }
    camera.position.copy(camPos);
    camera.lookAt(camLook);
    requestAnimationFrame(frame);

    window.addEventListener("resize", () => {
      renderer.setSize(W(), H());
      camera.aspect = W() / H();
      camera.updateProjectionMatrix();
      HOME.r = homeR();
      if (mode === "sky" && !focused) sky.r = HOME.r;
      setFog();
    });

    return {
      focus,
      unfocus,
      setMode,
      setPaused(p) {
        paused = p;
        if (p) keys.clear();
        labelsEl.style.visibility = p ? "hidden" : "";
        if (!p) last = performance.now();
      },
    };
  };
})();
