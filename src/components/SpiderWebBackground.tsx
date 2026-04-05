import { useEffect, useRef } from "react";

const SpiderWebBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let webLines: { x: number; y: number; targetX: number; targetY: number; progress: number; speed: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const spawnWebLine = () => {
      const side = Math.random();
      let x, y, targetX, targetY;
      if (side < 0.5) {
        x = 0;
        y = Math.random() * canvas.height;
        targetX = canvas.width;
        targetY = Math.random() * canvas.height;
      } else {
        x = canvas.width;
        y = Math.random() * canvas.height;
        targetX = 0;
        targetY = Math.random() * canvas.height;
      }
      webLines.push({ x, y, targetX, targetY, progress: 0, speed: 0.003 + Math.random() * 0.005, opacity: 0.08 + Math.random() * 0.08 });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.008 && webLines.length < 5) {
        spawnWebLine();
      }

      webLines = webLines.filter((line) => {
        line.progress += line.speed;
        if (line.progress > 1.2) return false;

        const currentX = line.x + (line.targetX - line.x) * Math.min(line.progress, 1);
        const currentY = line.y + (line.targetY - line.y) * Math.min(line.progress, 1);
        const fade = line.progress > 0.8 ? (1.2 - line.progress) / 0.4 : 1;

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = `rgba(255, 255, 255, ${line.opacity * fade})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        return true;
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default SpiderWebBackground;
