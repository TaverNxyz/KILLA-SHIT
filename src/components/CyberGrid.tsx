import React, { useEffect, useRef } from 'react';

const CyberGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    class GridLine {
      x: number;
      y: number;
      length: number;
      angle: number;
      speed: number;
      color: string;

      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = -100;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 80 + 20;
        this.angle = Math.random() * 0.2 - 0.1;
        this.speed = Math.random() * 2 + 1;
        this.color = `rgba(${Math.random() * 100 + 155}, ${
          Math.random() * 100 + 155
        }, 255, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        this.x += this.speed;
        if (this.x > canvas.width + 100) {
          this.reset();
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x + Math.cos(this.angle) * this.length,
          this.y + Math.sin(this.angle) * this.length
        );
        ctx.stroke();
      }
    }

    const lines = Array.from({ length: 50 }, () => new GridLine());
    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 30, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      lines.forEach(line => {
        line.update();
        line.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-20 opacity-30"
    />
  );
};

export default CyberGrid;