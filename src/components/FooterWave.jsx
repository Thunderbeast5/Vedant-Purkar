import { useRef, useEffect } from "react";

/**
 * FooterWave
 *
 * Renders an animated SVG wave that sits on top of the footer,
 * seamlessly transitioning from the page background into the footer's bg color.
 *
 * Uses the same rAF + sine-wave DNA as WaveHeading and WaveButton.
 *
 * Props
 * ─────
 * height        — wave zone height in px      (default 80)
 * color         — footer background color     (default "#000000")
 * pageColor     — page background color       (default "#ffffff")
 * amplitude     — wave amplitude in px        (default 18)
 * frequency     — number of wave cycles       (default 2.5)
 * speed         — phase increment per frame   (default 0.022)
 * className     — extra classes on the wrapper
 */
export function FooterWave({
  height = 80,
  color = "#000000",
  pageColor = "#ffffff",
  amplitude = 18,
  frequency = 2.5,
  speed = 0.022,
  className = "",
}) {
  const svgRef = useRef(null);
  const phaseRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    function buildPath(W, H, phase) {
      // Start from top-left, draw a wavy line across the top, then box down and back
      const points = [];
      const steps = Math.ceil(W / 4); // one point every ~4px for smoothness

      for (let i = 0; i <= steps; i++) {
        const x = (i / steps) * W;
        // Primary wave + a subtle harmonic for organic feel
        const y =
          amplitude * Math.sin(((x / W) * frequency * Math.PI * 2) + phase) +
          (amplitude * 0.3) * Math.sin(((x / W) * frequency * Math.PI * 4) + phase * 1.3);
        points.push(`${x},${H * 0.5 + y}`);
      }

      return `M0,${H} L0,${points[0].split(",")[1]} ` +
        points.map((p) => `L${p}`).join(" ") +
        ` L${W},${H} Z`;
    }

    function tick() {
      phaseRef.current += speed;

      const svg = svgRef.current;
      if (svg) {
        const W = svg.clientWidth || 800;
        const H = height;

        let pathEl = svg.querySelector("path.wave-top-path");
        if (!pathEl) {
          pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
          pathEl.classList.add("wave-top-path");
          pathEl.setAttribute("fill", color);
          svg.appendChild(pathEl);
        }

        pathEl.setAttribute("d", buildPath(W, H, phaseRef.current));
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [color, height, amplitude, frequency, speed]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: `${height}px`,
        marginBottom: `-${height}px`, // pulls up so it overlaps the footer top
        pointerEvents: "none",
        zIndex: 10,
        background: pageColor,
      }}
    >
      <svg
        ref={svgRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: `${height}px`,
          overflow: "visible",
          display: "block",
        }}
        preserveAspectRatio="none"
      />
    </div>
  );
}