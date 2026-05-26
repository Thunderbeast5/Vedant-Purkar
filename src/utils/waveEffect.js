// ─── shared wave path builder ─────────────────────────────────────────────────
// direction: "up"   → fill rises from bottom (default, used by sections)
// direction: "left" → fill slides in from left (legacy button mode)

export function buildWavePath(pct, phase, W, H, direction = "up") {
  if (pct <= 0) return "";
  if (pct >= 100) return `M0,0 L${W},0 L${W},${H} L0,${H} Z`;

  if (direction === "left") {
    // Original left-to-right button fill
    const x = (pct / 100) * (W + 30) - 15;
    const amp = 5;
    const steps = 40;
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const fy = (i / steps) * H;
      const fx = x + amp * Math.sin((2 * Math.PI / H) * fy * 2 + phase);
      pts.push([fx, fy]);
    }
    let d = `M0,0 L${pts[0][0]},0 L${pts[0][0]},${pts[0][1]}`;
    for (let i = 1; i <= steps; i++) {
      const [cx, cy] = pts[i];
      const [px, py] = pts[i - 1];
      d += ` Q${px},${py} ${(px + cx) / 2},${(py + cy) / 2}`;
    }
    d += ` L${pts[steps][0]},${pts[steps][1]} L0,${H} Z`;
    return d;
  }

  // "up" — bottom to top (used by buttons & sections)
  const y = H - (pct / 100) * (H + 30) + 15;
  const amp = direction === "section" ? 18 : 5;
  const steps = 60;
  const pts = [];

  for (let i = 0; i <= steps; i++) {
    const fx = (i / steps) * W;
    const fy = y + amp * Math.sin((2 * Math.PI / W) * fx * 2 + phase);
    pts.push([fx, fy]);
  }

  let d = `M0,${H} L${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i <= steps; i++) {
    const [cx, cy] = pts[i];
    const [px, py] = pts[i - 1];
    d += ` Q${px},${py} ${(px + cx) / 2},${(py + cy) / 2}`;
  }
  d += ` L${pts[steps][0]},${pts[steps][1]} L${W},${H} Z`;
  return d;
}

// ─── button wave (imperative, DOM-based) ─────────────────────────────────────
export function startWave(btn, dir) {
  if (btn._waveDir === dir) return;
  btn._waveDir = dir;

  const svg = btn.querySelector("svg.wave-fill");
  if (!svg) return;

  let progress = btn._waveProg ?? 0;
  let phase = btn._wavePhase ?? 0;

  cancelAnimationFrame(btn._waveRaf);

  function tick() {
    phase += 0.08;
    progress = Math.max(0, Math.min(100, progress + dir * 4));
    btn._waveProg = progress;
    btn._wavePhase = phase;

    const W = btn.offsetWidth;
    const H = btn.offsetHeight;

    let pathEl = svg.querySelector("path");
    if (!pathEl) {
      pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathEl.setAttribute("fill", "#000");
      svg.appendChild(pathEl);
    }

    pathEl.setAttribute("d", buildWavePath(progress, phase, W, H, "up"));

    const label = btn.querySelector("span.wave-label");
    if (label) label.style.color = progress > 50 ? "#fff" : "#000";

    if ((dir === 1 && progress < 100) || (dir === -1 && progress > 0)) {
      btn._waveRaf = requestAnimationFrame(tick);
    } else {
      if (progress <= 0) svg.innerHTML = "";
    }
  }

  btn._waveRaf = requestAnimationFrame(tick);
}