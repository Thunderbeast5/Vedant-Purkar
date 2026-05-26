import { useRef } from "react";
import { startWave } from "../utils/waveEffect";

/**
 * WaveButton - Reusable button component with wave fill hover effect
 * Supports both regular buttons and links
 */
export function WaveButton({
  children,
  className = "",
  onClick,
  href,
  disabled,
  target,
  rel,
  type = "button",
}) {
  const btnRef = useRef(null);

  const handleEnter = () => {
    if (disabled || !btnRef.current) return;
    startWave(btnRef.current, 1);
  };

  const handleLeave = () => {
    if (!btnRef.current) return;
    startWave(btnRef.current, -1);
  };

  const baseClass = `
    relative px-4 sm:px-5 md:px-6 py-2 rounded-full border border-black
    text-[10px] sm:text-xs font-bold uppercase tracking-widest
    overflow-hidden whitespace-nowrap bg-white
  `;

  const inner = (
    <>
      <svg
        className="wave-fill absolute inset-0 w-full h-full pointer-events-none z-[1]"
        style={{ borderRadius: "inherit" }}
      />
      <span
        className="wave-label relative z-[2] transition-none"
        style={{ color: "#000" }}
      >
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        target={target}
        rel={rel}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={`${baseClass} ${className}`}
        style={{ display: "inline-block" }}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`${baseClass} ${className} ${
        disabled ? "opacity-60 cursor-not-allowed border-black/40" : ""
      }`}
    >
      {inner}
    </button>
  );
}
