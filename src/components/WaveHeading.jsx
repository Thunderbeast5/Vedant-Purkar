import { useRef, useEffect, useId } from "react";
import { useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { buildWavePath } from "../utils/waveEffect";

/**
 * WaveHeading
 *
 * Replaces the old outline→opacity heading pattern.
 * As the heading scrolls into view the text fills bottom-to-top
 * with a living wavy edge — identical wave DNA to WaveButton.
 *
 * Usage — drop in anywhere you had the old double-h2 trick:
 *
 *   <WaveHeading className="text-5xl sm:text-6xl lg:text-[10rem] font-black uppercase tracking-normal leading-none">
 *     Projects
 *   </WaveHeading>
 *
 * Props
 * ─────
 * children      — heading text
 * className     — Tailwind / CSS classes (sizing, weight, spacing)
 * as            — HTML tag  (default "h2")
 * startOffset   — scroll fraction when fill begins  (default 0.3)
 * endOffset     — scroll fraction when fill ends    (default 0.65)
 * strokeColor   — outline stroke color  (default "#000000")
 * fillColor     — flood fill color      (default "#000000")
 */
export function WaveHeading({
  children,
  className = "",
  as: Tag = "h2",
  startOffset = 0.3,
  endOffset = 0.65,
  strokeColor = "#000000",
  fillColor = "#000000",
}) {
  const uid = useId().replace(/:/g, "");
  const clipId = `wh-clip-${uid}`;

  const wrapRef = useRef(null);
  const svgRef = useRef(null);
  const phaseRef = useRef(0);
  const targetPct = useRef(0);
  const currentPct = useRef(0);
  const rafRef = useRef(null);

  // Scroll progress scoped to this heading
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 55, damping: 20 });

  // Map scroll progress → fill percentage target
  useMotionValueEvent(smooth, "change", (v) => {
    const mapped = (v - startOffset) / (endOffset - startOffset);
    targetPct.current = Math.max(0, Math.min(100, mapped * 100));
  });

  // Single rAF loop — lerp toward target + animate wave phase
  useEffect(() => {
    function tick() {
      phaseRef.current += 0.028;
      currentPct.current += (targetPct.current - currentPct.current) * 0.055;

      const svg = svgRef.current;
      if (svg) {
        const W = svg.clientWidth || 600;
        const H = svg.clientHeight || 120;

        // Find or create the clipPath > path inside the SVG
        let clipPathEl = svg.querySelector(`#${clipId}`);
        if (!clipPathEl) {
          clipPathEl = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
          clipPathEl.setAttribute("id", clipId);
          const defs = svg.querySelector("defs") || svg.appendChild(
            document.createElementNS("http://www.w3.org/2000/svg", "defs")
          );
          defs.appendChild(clipPathEl);
        }

        let pathEl = clipPathEl.querySelector("path");
        if (!pathEl) {
          pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
          clipPathEl.appendChild(pathEl);
        }

        pathEl.setAttribute(
          "d",
          buildWavePath(currentPct.current, phaseRef.current, W, H, "section")
        );
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [clipId]);

  return (
    <div ref={wrapRef} className="relative select-none">

      {/* Layer 1 — outline text, always fully visible */}
      <Tag
        className={className}
        style={{
          WebkitTextStroke: `1.5px ${strokeColor}`,
          color: "transparent",
          display: "block",
        }}
      >
        {children}
      </Tag>

      {/* Layer 2 — solid filled text, revealed from bottom by wave clipPath */}
      <Tag
        aria-hidden="true"
        className={className}
        style={{
          position: "absolute",
          inset: 0,
          color: fillColor,
          display: "block",
          clipPath: `url(#${clipId})`,
          WebkitClipPath: `url(#${clipId})`,
        }}
      >
        {children}
      </Tag>

      {/* Hidden SVG that owns the clipPath — sized to overlay the heading */}
      <svg
        ref={svgRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "visible",
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        <defs />
      </svg>
    </div>
  );
}