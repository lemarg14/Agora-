#!/usr/bin/env python3
"""Génère dist/agora.html : tout le site dans un seul fichier (CSS et JS locaux intégrés).
Usage : python3 tools/build-single.py
"""
import pathlib, re

root = pathlib.Path(__file__).resolve().parent.parent
html = (root / "index.html").read_text(encoding="utf-8")

html = re.sub(
    r'<link rel="stylesheet" href="([^"]+)"\s*/>',
    lambda m: "<style>\n" + (root / m.group(1)).read_text(encoding="utf-8") + "\n</style>",
    html,
)
html = re.sub(
    r'<script src="(?!https?://)([^"]+)"></script>',
    lambda m: "<script>\n" + (root / m.group(1)).read_text(encoding="utf-8").replace("</script", "<\\/script") + "\n</script>",
    html,
)

out = root / "dist" / "agora.html"
out.parent.mkdir(exist_ok=True)
out.write_text(html, encoding="utf-8")
print("OK ->", out, f"({out.stat().st_size // 1024} Ko)")
