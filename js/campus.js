/* ============================================================
   AGORA — le campus 3D (Three.js r128, sans build)
   createCampus(container, labelsEl, faculties, { onSelect })
   → { focus(id), unfocus(), setPaused(bool) }
   ============================================================ */
(function () {
  const A = (window.AGORA = window.AGORA || {});

  const R_BUILD = 36; // rayon du cercle des bâtiments
  const mat = (color, extra) =>
    new THREE.MeshStandardMaterial(Object.assign({ color, roughness: 0.85, metalness: 0 }, extra || {}));
  const greyed = (hex, amt) => {
    const c = new THREE.Color(hex);
    const g = c.r * 0.3 + c.g * 0.59 + c.b * 0.11;
    return c.lerp(new THREE.Color(g, g, g), amt);
  };
  function shadowy(o) {
    o.castShadow = true;
    o.receiveShadow = true;
    return o;
  }
  const at = (o, x, y, z) => (o.position.set(x, y, z), o);
  const box = (w, h, d, m) => shadowy(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m));
  const cyl = (rt, rb, h, m, seg) => shadowy(new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg || 20), m));
  function pediment(w, h, d, m) {
    const s = new THREE.Shape();
    s.moveTo(-w / 2, 0);
    s.lineTo(w / 2, 0);
    s.lineTo(0, h);
    s.lineTo(-w / 2, 0);
    const g = new THREE.ExtrudeGeometry(s, { depth: d, bevelEnabled: false });
    g.translate(0, 0, -d / 2);
    return shadowy(new THREE.Mesh(g, m));
  }
  function pyramid(r, h, m) {
    const o = shadowy(new THREE.Mesh(new THREE.ConeGeometry(r, h, 4), m));
    o.rotation.y = Math.PI / 4;
    return o;
  }

  /* ---------- Bâtiments : chaque style renvoie sa hauteur ---------- */
  const BUILDERS = {
    temple(g, c) {
      g.add(at(box(15, 0.5, 12, c.stone), 0, 0.25, 0));
      g.add(at(box(14, 0.5, 11, c.stone), 0, 0.75, 0));
      g.add(at(box(13, 0.5, 10, c.stone), 0, 1.25, 0));
      g.add(at(box(8, 6, 6, c.wall), 0, 4.5, -1.5));
      for (let k = 0; k < 6; k++) g.add(at(cyl(0.42, 0.5, 6, c.stone, 16), -5 + k * 2, 4.5, 3.8));
      for (let k = 0; k < 3; k++) {
        g.add(at(cyl(0.42, 0.5, 6, c.stone, 16), -5, 4.5, 1.2 - k * 2.6));
        g.add(at(cyl(0.42, 0.5, 6, c.stone, 16), 5, 4.5, 1.2 - k * 2.6));
      }
      g.add(at(box(1.6, 3.2, 0.2, c.accent), 0, 3.1, 1.55)); // porte
      g.add(at(box(12.4, 0.9, 10.4, c.stone), 0, 7.95, -0.3));
      g.add(at(box(12.4, 0.25, 10.4, c.accent), 0, 8.52, -0.3));
      g.add(at(pediment(12.4, 2.4, 10.4, c.roof), 0, 8.64, -0.3));
      return 11.5;
    },
    dome(g, c) {
      g.add(at(box(14, 0.6, 14, c.stone), 0, 0.3, 0));
      g.add(at(cyl(5.5, 5.8, 6, c.wall, 32), 0, 3.6, -1));
      g.add(at(shadowy(new THREE.Mesh(new THREE.SphereGeometry(5.6, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), c.roof)), 0, 6.6, -1));
      g.add(at(cyl(0.7, 0.9, 1.6, c.stone, 12), 0, 12.6, -1));
      g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 8), c.accent), 0, 13.7, -1));
      for (let k = 0; k < 4; k++) g.add(at(cyl(0.38, 0.45, 5, c.stone, 14), -3 + k * 2, 3.1, 5.4));
      g.add(at(box(8, 0.7, 3.6, c.stone), 0, 5.95, 4.8));
      g.add(at(pediment(8, 1.6, 3.6, c.accent), 0, 6.3, 4.8));
      return 14.5;
    },
    tower(g, c) {
      g.add(at(box(13, 0.5, 10, c.stone), 0, 0.25, 0));
      g.add(at(box(12, 7, 8, c.wall), 0, 4, -0.5));
      g.add(at(box(12.6, 0.6, 8.6, c.stone), 0, 7.8, -0.5));
      const r = pyramid(7.6, 3, c.roof);
      r.scale.set(1, 1, 0.72);
      g.add(at(r, 0, 9.6, -0.5));
      g.add(at(box(3.6, 15, 3.6, c.wall), 0, 7.5, 3.4));
      g.add(at(pyramid(3.1, 3.5, c.roof), 0, 16.75, 3.4));
      const clock = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.2, 24), c.accent);
      clock.rotation.x = Math.PI / 2;
      g.add(at(clock, 0, 12.5, 5.25));
      g.add(at(box(1.8, 2.8, 0.3, c.accent), 0, 1.9, 5.25));
      return 19;
    },
    pagoda(g, c) {
      g.add(at(box(12, 0.6, 12, c.stone), 0, 0.3, 0));
      let y = 0.6,
        w = 8;
      for (let k = 0; k < 3; k++) {
        const h = 3.2 - k * 0.4;
        g.add(at(box(w, h, w, c.wall), 0, y + h / 2, 0));
        y += h;
        g.add(at(pyramid(w * 0.98, 1.6, c.roof), 0, y + 0.8, 0));
        y += 0.9;
        w *= 0.72;
      }
      g.add(at(cyl(0.12, 0.12, 2.5, c.accent, 8), 0, y + 1.4, 0));
      g.add(at(box(1.6, 2.4, 0.2, c.accent), 0, 1.8, 4.05));
      return y + 3;
    },
    modern(g, c) {
      g.add(at(box(14, 0.4, 11, c.stone), 0, 0.2, 0));
      g.add(at(box(12, 4.2, 8, c.glass), 0, 2.5, -0.5));
      g.add(at(box(12.4, 0.35, 8.4, c.wall), 0, 4.75, -0.5));
      g.add(at(box(9, 4, 7, c.glass), -1.2, 6.9, -1));
      g.add(at(box(9.4, 0.35, 7.4, c.wall), -1.2, 9.05, -1));
      for (let k = 0; k < 5; k++) g.add(at(box(0.3, 8.6, 0.5, c.accent), -5.5 + k * 2.2, 4.5, 3.6));
      return 10.5;
    },
    skyscraper(g, c) {
      g.add(at(box(12, 0.4, 12, c.stone), 0, 0.2, 0));
      g.add(at(box(10, 3, 8, c.wall), 0, 1.9, 0));
      g.add(at(box(6, 17, 6, c.glass), 0, 9.9, -0.5));
      for (let k = 0; k < 6; k++) g.add(at(box(6.3, 0.25, 6.3, c.wall), 0, 4 + k * 2.8, -0.5));
      g.add(at(box(0.4, 17, 0.4, c.accent), -3.05, 9.9, 2.55));
      g.add(at(box(0.4, 17, 0.4, c.accent), 3.05, 9.9, 2.55));
      g.add(at(cyl(0.08, 0.08, 4, c.accent, 6), 0, 20.4, -0.5));
      return 22.5;
    },
  };

  function palette(fac) {
    const open = fac.status === "open";
    const col = (hex, a) => (open ? new THREE.Color(hex) : greyed(hex, a));
    return {
      stone: mat(col("#eee5d3", 0.6)),
      wall: mat(col("#f7f0e3", 0.6)),
      roof: mat(col(fac.color, 0.8)),
      accent: mat(col(new THREE.Color(fac.color).multiplyScalar(0.7).getHex(), 0.8)),
      glass: mat(col("#a3c7d8", 0.7), { roughness: 0.2, metalness: 0.3 }),
    };
  }

  A.createCampus = function (container, labelsEl, faculties, opts) {
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
    const SKY = new THREE.Color("#cfe2ee");
    scene.background = SKY;
    scene.fog = new THREE.Fog(SKY, 90, 210);
    const camera = new THREE.PerspectiveCamera(45, W() / H(), 0.5, 600);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x8a7a58, 0.62));
    const sun = new THREE.DirectionalLight(0xfff1dc, 0.85);
    sun.position.set(45, 70, 30);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left: -70, right: 70, top: 70, bottom: -70, near: 10, far: 200 });
    sun.shadow.bias = -0.0005;
    scene.add(sun);

    /* ---------- Sol, place, allées ---------- */
    const ground = new THREE.Mesh(new THREE.CylinderGeometry(160, 160, 1, 72), mat("#97b877"));
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    scene.add(ground);
    const pathMat = mat("#d9cbae");
    const plaza = new THREE.Mesh(new THREE.CylinderGeometry(13, 13, 0.2, 64), mat("#e2d6bd"));
    plaza.position.y = 0.1;
    plaza.receiveShadow = true;
    scene.add(plaza);
    const ring = new THREE.Mesh(new THREE.RingGeometry(20, 22.5, 96), pathMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.04;
    ring.receiveShadow = true;
    scene.add(ring);

    /* ---------- Fontaine + globe central ---------- */
    const stone = mat("#ddd2bb");
    scene.add(at(cyl(5, 5.4, 0.9, stone, 40), 0, 0.55, 0));
    const water = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 4.5, 0.1, 40), mat("#79b8d4", { roughness: 0.15, metalness: 0.2 }));
    water.position.y = 1.06;
    scene.add(water);
    scene.add(at(cyl(0.6, 0.9, 4, stone, 16), 0, 3, 0));
    const globe = shadowy(new THREE.Mesh(new THREE.IcosahedronGeometry(1.5, 1), mat("#d6ab4f", { roughness: 0.4, metalness: 0.35, flatShading: true })));
    globe.position.y = 6.4;
    scene.add(globe);

    /* ---------- Lampadaires ---------- */
    const lampMat = mat("#4a4a48");
    const glow = new THREE.MeshStandardMaterial({ color: "#fff3c9", emissive: "#ffdf8a", emissiveIntensity: 0.6 });
    for (let k = 0; k < 10; k++) {
      const a = (k / 10) * Math.PI * 2 + 0.3;
      scene.add(at(cyl(0.08, 0.1, 3.2, lampMat, 6), Math.cos(a) * 14, 1.6, Math.sin(a) * 14));
      scene.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), glow), Math.cos(a) * 14, 3.3, Math.sin(a) * 14));
    }

    /* ---------- Bâtiments ---------- */
    const pickables = [];
    const buildings = [];
    const n = faculties.length;
    faculties.forEach((fac, i) => {
      const a = -Math.PI / 2 + (i / n) * Math.PI * 2;
      const x = Math.cos(a) * R_BUILD,
        z = Math.sin(a) * R_BUILD;
      const g = new THREE.Group();
      g.position.set(x, 0, z);
      g.lookAt(0, 0, 0);
      const top = (BUILDERS[fac.style] || BUILDERS.temple)(g, palette(fac));
      g.traverse((o) => {
        if (o.isMesh) {
          o.userData.fid = fac.id;
          pickables.push(o);
        }
      });
      scene.add(g);

      // allée radiale
      const L = R_BUILD - 7 - 13;
      const p = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.1, L), pathMat);
      p.position.set(Math.cos(a) * (13 + L / 2), 0.05, Math.sin(a) * (13 + L / 2));
      p.rotation.y = Math.PI / 2 - a;
      p.receiveShadow = true;
      scene.add(p);

      // anneau lumineux devant les facultés ouvertes
      let halo = null;
      if (fac.status === "open") {
        halo = new THREE.Mesh(
          new THREE.RingGeometry(1.6, 2.3, 48),
          new THREE.MeshBasicMaterial({ color: fac.color, transparent: true, opacity: 0.7, side: THREE.DoubleSide })
        );
        halo.rotation.x = -Math.PI / 2;
        halo.position.set(Math.cos(a) * (R_BUILD - 9.5), 0.12, Math.sin(a) * (R_BUILD - 9.5));
        scene.add(halo);
        // mât + bannière
        const flagPole = at(cyl(0.1, 0.1, 9, lampMat, 6), 0, 4.5, 0);
        const banner = at(box(2.4, 1.5, 0.08, mat(fac.color)), 1.25, 8, 0);
        const flag = new THREE.Group();
        flag.add(flagPole, banner);
        flag.position.set(Math.cos(a) * (R_BUILD - 8) + Math.cos(a + Math.PI / 2) * 7, 0, Math.sin(a) * (R_BUILD - 8) + Math.sin(a + Math.PI / 2) * 7);
        scene.add(flag);
      }

      // étiquette HTML
      const label = document.createElement("button");
      label.className = "bldg-label" + (fac.status === "open" ? " open" : " soon");
      label.style.setProperty("--c", fac.color);
      label.innerHTML = `<b>${fac.short}</b><small>${fac.status === "open" ? "Ouvert" : "Bientôt"}</small>`;
      label.addEventListener("click", (e) => {
        e.stopPropagation();
        select(fac.id);
      });
      labelsEl.appendChild(label);

      buildings.push({ fac, a, group: g, top, halo, label, anchor: new THREE.Vector3(x, top + 2.5, z) });
    });

    /* ---------- Arbres ---------- */
    const trunkG = new THREE.CylinderGeometry(0.22, 0.32, 1.8, 6);
    const trunkM = mat("#7b5a3c");
    const leafG = [new THREE.IcosahedronGeometry(1.7, 0), new THREE.ConeGeometry(1.6, 3.6, 7)];
    const leafM = ["#6f9a4f", "#5f8b45", "#82aa5b", "#4f7a3c"].map((c) => mat(c, { flatShading: true }));
    const angClear = (ang, min) =>
      buildings.every((b) => {
        let d = Math.abs(((ang - b.a + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
        return d > min;
      });
    let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    function tree(x, z, s) {
      const t = new THREE.Group();
      t.add(at(shadowy(new THREE.Mesh(trunkG, trunkM)), 0, 0.9, 0));
      const kind = rnd() < 0.5 ? 0 : 1;
      const leaf = shadowy(new THREE.Mesh(leafG[kind], leafM[Math.floor(rnd() * leafM.length)]));
      leaf.position.y = kind ? 3.4 : 2.9;
      t.add(leaf);
      t.position.set(x, 0, z);
      t.scale.setScalar(s);
      t.rotation.y = rnd() * 6;
      scene.add(t);
    }
    for (let k = 0; k < 150; k++) {
      const ang = rnd() * Math.PI * 2;
      const r = 24 + rnd() * 95;
      const nearBuild = r > 24 && r < 50;
      if (nearBuild && !angClear(ang, 0.38)) continue;
      if (r < 30 && !angClear(ang, 0.15)) continue;
      tree(Math.cos(ang) * r, Math.sin(ang) * r, 0.8 + rnd() * 0.7);
    }

    /* ---------- Nuages ---------- */
    const clouds = [];
    const cloudM = new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 1, transparent: true, opacity: 0.9 });
    for (let k = 0; k < 7; k++) {
      const c = new THREE.Group();
      for (let j = 0; j < 4; j++) {
        const s = new THREE.Mesh(new THREE.SphereGeometry(2.5 + rnd() * 2, 10, 8), cloudM);
        s.position.set(j * 3 - 4.5, rnd() * 1.2, rnd() * 2);
        c.add(s);
      }
      c.position.set(-120 + rnd() * 240, 38 + rnd() * 14, -120 + rnd() * 240);
      clouds.push(c);
      scene.add(c);
    }

    /* ---------- Caméra orbitale maison ---------- */
    const homeR = () => { const asp = W() / H(); return asp < 1 ? Math.min(150, 82 * (1 + (1 - asp) * 1.2)) : 82; };
    const HOME = { target: new THREE.Vector3(0, 3, 0), r: homeR(), phi: 1.02 };
    const setFog = () => { scene.fog.near = HOME.r + 10; scene.fog.far = HOME.r + 140; };
    setFog();
    const ctl = { target: HOME.target.clone(), r: 190, theta: Math.PI / 2 + 0.25, phi: 0.75 };
    const goal = { target: HOME.target.clone(), r: HOME.r, theta: Math.PI / 2 + 0.25, phi: HOME.phi };
    let focused = null,
      lastInteract = performance.now(),
      paused = false;
    function applyCam() {
      const sp = Math.sin(ctl.phi);
      camera.position.set(
        ctl.target.x + ctl.r * sp * Math.cos(ctl.theta),
        ctl.target.y + ctl.r * Math.cos(ctl.phi),
        ctl.target.z + ctl.r * sp * Math.sin(ctl.theta)
      );
      camera.lookAt(ctl.target);
    }
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    /* ---------- Entrées utilisateur ---------- */
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
        pinchR = goal.r;
      }
      lastInteract = performance.now();
    });
    canvas.addEventListener("pointermove", (e) => {
      if (!pointers.has(e.pointerId)) return hover(e);
      const prev = pointers.get(e.pointerId);
      const dx = e.clientX - prev.x,
        dy = e.clientY - prev.y;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      lastInteract = performance.now();
      if (pointers.size === 1) {
        goal.theta += dx * 0.006;
        goal.phi = clamp(goal.phi - dy * 0.004, 0.45, 1.38);
        dragDist += Math.abs(dx) + Math.abs(dy);
      } else if (pointers.size === 2) {
        goal.r = clamp((pinchR * pinch0) / Math.max(pdist(), 1), 22, 170);
        dragDist += 20;
      }
    });
    const up = (e) => {
      const wasTap = pointers.size === 1 && dragDist < 6;
      pointers.delete(e.pointerId);
      if (wasTap && e.type === "pointerup") {
        const id = pick(e);
        if (id) select(id);
      }
    };
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointercancel", up);
    canvas.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        goal.r = clamp(goal.r * (1 + e.deltaY * 0.001), 22, 170);
        lastInteract = performance.now();
      },
      { passive: false }
    );

    const ray = new THREE.Raycaster(),
      ndc = new THREE.Vector2();
    function pick(e) {
      const rect = canvas.getBoundingClientRect();
      ndc.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
      ray.setFromCamera(ndc, camera);
      const hit = ray.intersectObjects(pickables, false)[0];
      return hit ? hit.object.userData.fid : null;
    }
    let hovered = null;
    function hover(e) {
      const id = pick(e);
      if (id === hovered) return;
      hovered = id;
      canvas.style.cursor = id ? "pointer" : "grab";
      buildings.forEach((b) => b.label.classList.toggle("hover", b.fac.id === id));
    }

    function select(id) {
      const b = buildings.find((x) => x.fac.id === id);
      if (!b) return;
      focus(id);
      opts.onSelect && opts.onSelect(b.fac);
    }
    function focus(id) {
      const b = buildings.find((x) => x.fac.id === id);
      if (!b) return;
      focused = id;
      goal.target.set(Math.cos(b.a) * R_BUILD * 0.82, 5, Math.sin(b.a) * R_BUILD * 0.82);
      let th = b.a + Math.PI;
      th += Math.PI * 2 * Math.round((ctl.theta - th) / (Math.PI * 2));
      goal.theta = th;
      goal.r = 34;
      goal.phi = 1.2;
    }
    function unfocus() {
      focused = null;
      goal.target.copy(HOME.target);
      goal.r = HOME.r;
      goal.phi = HOME.phi;
      lastInteract = performance.now();
    }

    /* ---------- Boucle ---------- */
    const v = new THREE.Vector3();
    let last = performance.now();
    function frame(t) {
      requestAnimationFrame(frame);
      const dt = Math.min(0.05, (t - last) / 1000);
      last = t;
      if (paused) return;
      if (!focused && pointers.size === 0 && t - lastInteract > 5000) goal.theta += dt * 0.035;
      const k = 1 - Math.exp(-dt * 2.6);
      ctl.target.lerp(goal.target, k);
      ctl.r += (goal.r - ctl.r) * k;
      ctl.theta += (goal.theta - ctl.theta) * k;
      ctl.phi += (goal.phi - ctl.phi) * k;
      applyCam();

      globe.rotation.y += dt * 0.4;
      globe.position.y = 6.4 + Math.sin(t / 900) * 0.15;
      clouds.forEach((c, i) => {
        c.position.x += dt * (0.6 + i * 0.08);
        if (c.position.x > 140) c.position.x = -140;
      });
      buildings.forEach((b) => {
        if (b.halo) {
          const s = 1 + 0.12 * Math.sin(t / 400);
          b.halo.scale.set(s, s, s);
          b.halo.material.opacity = 0.45 + 0.3 * Math.sin(t / 400);
        }
        v.copy(b.anchor).project(camera);
        const visible = v.z < 1 && Math.abs(v.x) < 1.2 && Math.abs(v.y) < 1.2;
        b.label.style.display = visible ? "" : "none";
        if (visible) b.label.style.transform = `translate(-50%,-100%) translate(${(v.x * 0.5 + 0.5) * W()}px,${(-v.y * 0.5 + 0.5) * H()}px)`;
      });
      renderer.render(scene, camera);
    }
    applyCam();
    requestAnimationFrame(frame);

    window.addEventListener("resize", () => {
      renderer.setSize(W(), H());
      camera.aspect = W() / H();
      camera.updateProjectionMatrix();
      HOME.r = homeR();
      setFog();
    });

    return {
      focus,
      unfocus,
      setPaused(p) {
        paused = p;
        labelsEl.style.visibility = p ? "hidden" : "";
        if (!p) last = performance.now();
      },
    };
  };
})();
