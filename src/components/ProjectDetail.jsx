import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WaveButton } from './WaveButton';

// ─── Inline wave path builder (no external import needed) ───────────────────
function buildWavePath(pct, phase, W, H) {
  if (pct <= 0) return "";
  if (pct >= 100) return `M0,0 L${W},0 L${W},${H} L0,${H} Z`;
  const y = H - (pct / 100) * (H + 30) + 15;
  const amp = 18;
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

// ─── WaveClientHeading ───────────────────────────────────────────────────────
// Plays the wave fill once on mount (page-entry animation, not scroll-driven).
// The fill rises from 0 → 100% over ~1.4 s then the rAF stops.
function WaveClientHeading({ children, className = "" }) {
  const clipId = "pd-wave-clip";
  const svgRef  = useRef(null);
  const rafRef  = useRef(null);

  useEffect(() => {
    let pct   = 0;
    let phase = 0;
    // Small delay so the page fade-in settles first
    const timer = setTimeout(() => {
      function tick() {
        phase += 0.03;
        pct   += 1.8;                       // speed: ~55 frames to reach 100

        const svg = svgRef.current;
        if (svg) {
          const W = svg.clientWidth  || 600;
          const H = svg.clientHeight || 120;

          let defs = svg.querySelector("defs");
          if (!defs) { defs = document.createElementNS("http://www.w3.org/2000/svg","defs"); svg.appendChild(defs); }

          let clip = defs.querySelector(`#${clipId}`);
          if (!clip) { clip = document.createElementNS("http://www.w3.org/2000/svg","clipPath"); clip.setAttribute("id", clipId); defs.appendChild(clip); }

          let path = clip.querySelector("path");
          if (!path) { path = document.createElementNS("http://www.w3.org/2000/svg","path"); clip.appendChild(path); }

          path.setAttribute("d", buildWavePath(Math.min(pct, 100), phase, W, H));
        }

        if (pct < 100) {
          rafRef.current = requestAnimationFrame(tick);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }, 200);

    return () => { clearTimeout(timer); cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <div className="relative select-none">
      {/* Layer 1 — outline, always visible */}
      <h1
        className={className}
        style={{ WebkitTextStroke: "1.5px #000000", color: "transparent", display: "block" }}
      >
        {children}
      </h1>

      {/* Layer 2 — solid fill, revealed by wave clip */}
      <h1
        aria-hidden="true"
        className={className}
        style={{
          position: "absolute", inset: 0,
          color: "#000000", display: "block",
          clipPath: `url(#${clipId})`,
          WebkitClipPath: `url(#${clipId})`,
        }}
      >
        {children}
      </h1>

      {/* SVG owns the clipPath */}
      <svg
        ref={svgRef}
        aria-hidden="true"
        style={{ position:"absolute", inset:0, width:"100%", height:"100%", overflow:"visible", pointerEvents:"none", zIndex:-1 }}
      >
        <defs />
      </svg>
    </div>
  );
}

// ─── ProjectDetail ───────────────────────────────────────────────────────────
export default function ProjectDetail() {
  const location = useLocation();
  const navigate  = useNavigate();
  const project   = location.state?.project;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#E3E3E3] text-black flex flex-col items-center justify-center font-titillium">
        <h2 className="text-2xl font-black mb-4 uppercase">Project Not Found</h2>
        <WaveButton onClick={() => navigate('/')}>Back To Home</WaveButton>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#E3E3E3] text-black font-titillium pt-24 pb-16 px-4 sm:px-6 md:px-12 relative overflow-x-hidden">
      <div className="max-w-6xl mx-auto">

        {/* --- NAV BACK BUTTON --- */}
        <motion.button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 mb-12 text-xs sm:text-sm font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors"
          whileHover={{ x: -4 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </motion.button>

        {/* --- HERO HEADING with wave fill --- */}
        <div className="relative mb-8 sm:mb-12">
          <WaveClientHeading className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tight leading-none break-words">
            {project.client}
          </WaveClientHeading>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-xl sm:text-2xl font-black px-4 py-1 bg-black text-white rounded-full">
              {project.id}
            </span>
            <span className="text-sm sm:text-base font-bold text-gray-600 tracking-wider">
              PROJECT YEAR: {project.year}
            </span>
          </div>
        </div>

        {/* --- HERO IMAGE GRID --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 sm:mb-16"
        >
          {project.images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-2xl md:rounded-[2.5rem] border border-black/20 shadow-lg bg-white/50">
              <img
                src={img}
                alt={`${project.client} showcase ${i + 1}`}
                className="w-full h-auto object-contain block"
              />
            </div>
          ))}
        </motion.div>

        {/* --- STRUCTURAL DETAIL PANELS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* LEFT: CORE MISSION & SCOPE */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-black/20 shadow-sm">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 mb-4">Overview</h2>
              <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-black leading-snug mb-4">
                {project.tagline}
              </p>
              <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.features && (
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-black/20 shadow-sm">
                <h2 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 mb-6">Key Deliverables</h2>
                <ul className="space-y-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-sm sm:text-base font-bold text-black/80">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT: SYSTEM & METRICS */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-black/20 shadow-sm">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-black/5 rounded-xl text-xs font-bold border border-black/10 uppercase tracking-wider text-black">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.contributors && (
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-black/20 shadow-sm">
                <h2 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 mb-4">Contributors</h2>
                <div className="space-y-2">
                  {project.contributors.map((member, idx) => (
                    <p key={idx} className="text-xs sm:text-sm font-bold text-black uppercase tracking-wide">
                      // {member}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {project.url && (
              <WaveButton
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center !px-0 py-4 rounded-2xl !border-2"
              >
                Launch Live Interface
              </WaveButton>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}