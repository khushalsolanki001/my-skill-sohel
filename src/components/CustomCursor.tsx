// components/CustomCursor.tsx
import { useEffect, useRef, useState } from "react";

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);

  // Mouse position (for dot)
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  
  // Circle position (with delay)
  const circleX = useRef(0);
  const circleY = useRef(0);
  
  const rafId = useRef<number | null>(null);

  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    if (isTouchDevice()) return;

    // Hide default cursor
    document.body.style.cursor = "none";

    const isInteractive = (el: Element | null) => {
      if (!el) return false;
      return Boolean(
        el.closest(
          "a, button, [role='button'], input, textarea, select, img, [data-cursor='magnet']"
        )
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      
      // Update dot position immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(-50%, -50%) translate3d(${mouseX.current}px, ${mouseY.current}px, 0)`;
      }
      
      if (!visible) setVisible(true);
    };

    const handlePointerOver = (e: PointerEvent) => {
      setInteractive(isInteractive(e.target as Element));
    };
    
    const handlePointerOut = () => setInteractive(false);

    const handleLeaveWindow = () => setVisible(false);
    const handleEnterWindow = () => setVisible(true);

    // Linear interpolation function
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      // Circle follows dot with delay using lerp
      const lerpFactor = 0.08; // Lower value = more delay, smoother follow

      circleX.current = lerp(circleX.current, mouseX.current, lerpFactor);
      circleY.current = lerp(circleY.current, mouseY.current, lerpFactor);

      // Snap-to-center when close enough to avoid micro-drift
      const dx = mouseX.current - circleX.current;
      const dy = mouseY.current - circleY.current;
      const distanceSquared = dx * dx + dy * dy;
      if (distanceSquared < 1) { // ~1px threshold for reliable snap
        circleX.current = mouseX.current;
        circleY.current = mouseY.current;
      }

      // Update circle position
      if (circleRef.current) {
        circleRef.current.style.transform = `translate(-50%, -50%) translate3d(${circleX.current}px, ${circleY.current}px, 0)`;
        circleRef.current.style.opacity = visible ? "1" : "0";
      }

      rafId.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    window.addEventListener("pointerout", handlePointerOut, { passive: true });
    window.addEventListener("mouseleave", handleLeaveWindow);
    window.addEventListener("mouseenter", handleEnterWindow);

    rafId.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("mouseleave", handleLeaveWindow);
      window.removeEventListener("mouseenter", handleEnterWindow);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      document.body.style.cursor = "auto";
    };
  }, [visible]);

  if (isTouchDevice()) return null;

  return (
    <>
      {/* Black dot that follows mouse instantly */}
      <div
        ref={dotRef}
        aria-hidden
        className="fixed left-0 top-0 z-[9999] pointer-events-none will-change-transform"
        style={{
          transform: "translate(-50%, -50%) translate3d(-9999px,-9999px,0)",
        }}
      >
        <div
          className={[
            "w-[13px] h-[13px] bg-black/60 rounded-full transition-transform duration-100 ease-out",
            interactive ? "scale-150" : "",
          ].join(" ")}
        />
      </div>

      {/* Black circle that follows dot with delay */}
      <div
        ref={circleRef}
        aria-hidden
        className="fixed left-0 top-0 z-[9998] pointer-events-none will-change-transform"
        style={{
          transform: "translate(-50%, -50%) translate3d(-9999px,-9999px,0)",
          opacity: 0,
        }}
      >
        <div
          className={[
            "w-[39px] h-[39px] border-2 border-black/30 rounded-full transition-all duration-300 ease-out",
            interactive ? "w-[59px] h-[59px] border-black/50" : "",
          ].join(" ")}
        />
      </div>
    </>
  );
};

export default CustomCursor;
