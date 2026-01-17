'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

// Constants for particle behavior
const MOBILE_BREAKPOINT = 768;
const PARTICLES_DESKTOP = 50;
const PARTICLES_MOBILE = 30;
const MOUSE_INTERACTION_RADIUS = 100;
const MOUSE_INTERACTION_RADIUS_SQUARED = MOUSE_INTERACTION_RADIUS * MOUSE_INTERACTION_RADIUS;
const MOUSE_FORCE_MULTIPLIER = 0.03;
const CONNECTION_DISTANCE_THRESHOLD = 120;
const CONNECTION_DISTANCE_THRESHOLD_SQUARED = CONNECTION_DISTANCE_THRESHOLD * CONNECTION_DISTANCE_THRESHOLD;

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles - check after canvas is set up
    const particleCount = canvas.width < MOBILE_BREAKPOINT ? PARTICLES_MOBILE : PARTICLES_DESKTOP;
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Determine colors based on theme
      const isDark = theme === 'dark';
      const particleColor = isDark ? 'rgba(147, 197, 253, 0.3)' : 'rgba(99, 102, 241, 0.2)';
      const lineColor = isDark ? 'rgba(147, 197, 253, 0.15)' : 'rgba(99, 102, 241, 0.1)';

      const particles = particlesRef.current;

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges and clamp position within bounds
        if (particle.x < 0) {
          particle.x = 0;
          particle.vx *= -1;
        } else if (particle.x > canvas.width) {
          particle.x = canvas.width;
          particle.vx *= -1;
        }
        
        if (particle.y < 0) {
          particle.y = 0;
          particle.vy *= -1;
        } else if (particle.y > canvas.height) {
          particle.y = canvas.height;
          particle.vy *= -1;
        }

        // Mouse interaction - particles move away from cursor
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distanceSquared = dx * dx + dy * dy;
        
        if (distanceSquared < MOUSE_INTERACTION_RADIUS_SQUARED) {
          const distance = Math.sqrt(distanceSquared);
          const force = (MOUSE_INTERACTION_RADIUS - distance) / MOUSE_INTERACTION_RADIUS;
          particle.x -= dx * force * MOUSE_FORCE_MULTIPLIER;
          particle.y -= dy * force * MOUSE_FORCE_MULTIPLIER;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < CONNECTION_DISTANCE_THRESHOLD_SQUARED) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
