import { useEffect, useRef } from "react";

type Mode = "home" | "about" | "skills" | "projects" | "contact";

type Props = { mode: Mode };

// High-performance animated canvas background with multiple modes
const BackgroundCanvas = ({ mode }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const timeRef = useRef(0);

  // Reusable helpers
  const resize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Particles and state reused across modes for efficiency
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const initParticles = (count: number) => {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.clientWidth,
          y: Math.random() * canvas.clientHeight,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: 1 + Math.random() * 2.5,
        });
      }
    };

    // Simple noise-like function
    const snoise = (x: number, y: number) => {
      return (
        Math.sin(x * 0.003 + timeRef.current * 0.001) +
        Math.cos(y * 0.003 - timeRef.current * 0.001)
      ) * 0.5 + 0.5;
    };

    // Draw modes
    const drawHome = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      // Soft noise blobs in red theme
      for (let i = 0; i < 3; i++) {
        const cx = (i + 1) * w * 0.25 + Math.sin(timeRef.current * 0.0006 + i) * w * 0.08;
        const cy = (i + 1) * h * 0.2 + Math.cos(timeRef.current * 0.0005 + i) * h * 0.08;
        const r = Math.max(w, h) * (0.25 + 0.05 * i) * (0.9 + 0.1 * Math.sin(timeRef.current * 0.0007 + i));
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, "rgba(255,0,0,0.10)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawAbout = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      // Floating orbs
      for (let i = 0; i < 6; i++) {
        const cx = (i * 97) % w;
        const cy = ((i * 53) % h) + Math.sin(timeRef.current * 0.001 + i) * 20;
        const r = 40 + 15 * Math.sin(timeRef.current * 0.0012 + i);
        ctx.fillStyle = "rgba(0,0,0,0.06)";
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(255,0,0,0.08)";
        ctx.beginPath();
        ctx.arc(cx + 20, cy - 10, r * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawSkills = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      // Grid with moving dots
      const gap = 48;
      ctx.strokeStyle = "rgba(0,0,0,0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += gap) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gap) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      if (particles.length === 0) initParticles(90);
      ctx.fillStyle = "rgba(255,0,0,0.18)";
      particles.forEach((p) => {
        p.x += p.vx + (snoise(p.x, p.y) - 0.5) * 0.6;
        p.y += p.vy + (snoise(p.y, p.x) - 0.5) * 0.6;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0; if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawProjects = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      // Parallax angular ribbons
      for (let i = 0; i < 5; i++) {
        const y = (i + 1) * (h / 6) + Math.sin((timeRef.current * 0.001 + i) * 1.7) * 18;
        ctx.strokeStyle = i % 2 ? "rgba(255,0,0,0.12)" : "rgba(0,0,0,0.07)";
        ctx.lineWidth = 8 - i;
        ctx.beginPath();
        ctx.moveTo(-50, y);
        for (let x = -50; x < w + 50; x += 40) {
          const yy = y + Math.sin((x + timeRef.current * (0.2 + i * 0.05)) * 0.02) * (6 + i * 1.5);
          ctx.lineTo(x, yy);
        }
        ctx.stroke();
      }
    };

    const drawContact = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      // Gentle waves
      for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = i === 1 ? "rgba(255,0,0,0.15)" : "rgba(0,0,0,0.08)";
        ctx.lineWidth = 2 + i;
        ctx.beginPath();
        for (let x = -50; x < w + 50; x += 2) {
          const y = h * 0.7 + Math.sin((x * 0.02) + timeRef.current * (0.003 + i * 0.001)) * (12 + i * 4);
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    let running = true;
    const onVisibility = () => { running = !document.hidden; if (running) tick(); };
    document.addEventListener('visibilitychange', onVisibility);

    const tick = () => {
      if (document.hidden) { running = false; return; }
      timeRef.current += 16.67;
      switch (mode) {
        case "home": drawHome(); break;
        case "about": drawAbout(); break;
        case "skills": drawSkills(); break;
        case "projects": drawProjects(); break;
        case "contact": drawContact(); break;
        default: drawHome();
      }
      if (running) rafRef.current = requestAnimationFrame(tick);
    };

    tick();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
    />
  );
};

export default BackgroundCanvas;


