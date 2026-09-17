import React, { useEffect, useRef, useState } from 'react';

export const AbstractTechLabVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [telemetryState, setTelemetryState] = useState({
    fps: 60,
    nodes: 48,
    coherence: '99.4%',
    cycle: 'ACTIVE',
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Mouse tracking for reactive tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetMouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // 3D Geometry: Futuristic Tesseract / Hexagonal Quantum Prism
    // 8 vertices of a cube + 6 center vertices
    const baseVertices = [
      // Outer cube
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1],
      // Inner node points
      [0, 0, -1.3],
      [0, 0, 1.3],
      [-1.3, 0, 0],
      [1.3, 0, 0],
      [0, -1.3, 0],
      [0, 1.3, 0],
    ];

    const edges = [
      // Base cube edges
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
      // Cross vertices connecting inner poles
      [8, 0], [8, 1], [8, 2], [8, 3],
      [9, 4], [9, 5], [9, 6], [9, 7],
      [10, 0], [10, 3], [10, 4], [10, 7],
      [11, 1], [11, 2], [11, 5], [11, 6],
    ];

    // Digital particles floating in space
    const particleCount = 38;
    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * 3,
      y: (Math.random() - 0.5) * 3,
      z: (Math.random() - 0.5) * 3,
      speed: 0.002 + Math.random() * 0.005,
      radius: 1 + Math.random() * 1.5,
      pulse: Math.random() * Math.PI * 2,
    }));

    let angleX = 0.4;
    let angleY = 0.6;
    let angleZ = 0.1;

    let lastTime = performance.now();
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const render = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      frameCount++;
      if (time - lastFpsUpdate > 1000) {
        setTelemetryState(prev => ({
          ...prev,
          fps: Math.min(Math.round((frameCount * 1000) / (time - lastFpsUpdate)), 60),
          coherence: (99.2 + Math.sin(time * 0.001) * 0.5).toFixed(1) + '%',
        }));
        frameCount = 0;
        lastFpsUpdate = time;
      }

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      if (!prefersReducedMotion) {
        angleX += 0.003 + mouseY * 0.005;
        angleY += 0.005 + mouseX * 0.005;
        angleZ += 0.002;
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 0.28;

      // 1. Draw subtle background laboratory grid & radar reticle
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;

      // Concentric technical radar circles
      const radarRadii = [scale * 0.5, scale * 1.0, scale * 1.45];
      radarRadii.forEach((r, idx) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        if (idx === 1) {
          ctx.setLineDash([4, 8]);
        } else {
          ctx.setLineDash([]);
        }
        ctx.stroke();
      });

      // Crosshair lines
      ctx.beginPath();
      ctx.moveTo(cx - scale * 1.6, cy);
      ctx.lineTo(cx + scale * 1.6, cy);
      ctx.moveTo(cx, cy - scale * 1.6);
      ctx.lineTo(cx, cy + scale * 1.6);
      ctx.setLineDash([2, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // 2. 3D Rotation Matrices
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosZ = Math.cos(angleZ);
      const sinZ = Math.sin(angleZ);

      const project = (x: number, y: number, z: number) => {
        // Rotate around Y
        let x1 = x * cosY + z * sinY;
        let y1 = y;
        let z1 = -x * sinY + z * cosY;

        // Rotate around X
        let x2 = x1;
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;

        // Rotate around Z
        let x3 = x2 * cosZ - y2 * sinZ;
        let y3 = x2 * sinZ + y2 * cosZ;
        let z3 = z2;

        // Camera distance perspective projection
        const fov = 3.5;
        const pz = z3 + fov;
        const px = (x3 * fov) / pz;
        const py = (y3 * fov) / pz;

        return {
          x: cx + px * scale,
          y: cy + py * scale,
          z: z3,
          scaleFactor: fov / pz,
        };
      };

      // 3. Render digital particles
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.pulse += p.speed * 8;
        }
        const proj = project(p.x, p.y, p.z);
        const alpha = Math.max(0.15, Math.min(0.85, (proj.z + 1.5) / 3));
        const currentRadius = p.radius * (1 + 0.3 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(proj.x, proj.y, Math.max(0.8, currentRadius * proj.scaleFactor), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${alpha * 0.7})`;
        ctx.fill();
      });

      // 4. Project base geometry vertices
      const projectedVertices = baseVertices.map((v) => project(v[0], v[1], v[2]));

      // 5. Render geometric edges with cyan/white gradient
      edges.forEach(([i1, i2]) => {
        const p1 = projectedVertices[i1];
        const p2 = projectedVertices[i2];
        const avgZ = (p1.z + p2.z) / 2;
        const depthAlpha = Math.max(0.08, Math.min(0.75, (avgZ + 1.8) / 3.6));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(0, 240, 255, ${depthAlpha * 0.65})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });

      // 6. Render Vertex nodes
      projectedVertices.forEach((p, index) => {
        const alpha = Math.max(0.2, Math.min(0.9, (p.z + 1.5) / 3));
        const isPole = index >= 8;

        ctx.beginPath();
        ctx.arc(p.x, p.y, isPole ? 3.5 : 2.5, 0, Math.PI * 2);
        ctx.fillStyle = isPole ? '#00F0FF' : '#FFFFFF';
        ctx.shadowColor = '#00F0FF';
        ctx.shadowBlur = isPole ? 10 : 4;
        ctx.fill();
        ctx.shadowBlur = 0; // reset glow
      });

      // 7. Orbiting Satellite Ring
      ctx.save();
      const orbitTime = time * 0.0008;
      const orbitRadius = scale * 1.2;
      const orbitNodes = 3;

      for (let i = 0; i < orbitNodes; i++) {
        const nodeAngle = orbitTime + (i * (Math.PI * 2)) / orbitNodes;
        const ox = cx + Math.cos(nodeAngle) * orbitRadius;
        const oy = cy + Math.sin(nodeAngle) * (orbitRadius * 0.42);

        // Halo
        ctx.beginPath();
        ctx.arc(ox, oy, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#00F0FF';
        ctx.shadowColor = '#00F0FF';
        ctx.shadowBlur = 12;
        ctx.fill();

        // Connecting filament to center
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(ox, oy);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.18)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="hero-tech-lab-visual"
      className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0D14]/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-[#00F0FF]/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[220px] h-[220px] rounded-full bg-[#6366F1]/5 blur-3xl pointer-events-none" />

      {/* Main 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair"
        title="Interactive Technical Laboratory Visual"
      />

      {/* Laboratory Technical Overlay Badges */}
      <div className="absolute top-4 left-4 flex items-center gap-2 px-2.5 py-1 rounded bg-[#08090C]/90 border border-white/10 text-[10px] font-mono text-[#8E95A5] backdrop-blur-sm pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
        <span className="text-[#F1F3F8]">LAB_SYS_V4.8</span>
        <span className="text-white/30">|</span>
        <span>COHERENCE {telemetryState.coherence}</span>
      </div>

      <div className="absolute top-4 right-4 hidden sm:flex items-center gap-2 px-2.5 py-1 rounded bg-[#08090C]/90 border border-white/10 text-[10px] font-mono text-[#8E95A5] backdrop-blur-sm pointer-events-none">
        <span>STATUS:</span>
        <span className="text-[#00F0FF] font-medium">{telemetryState.cycle}</span>
        <span className="text-white/30">|</span>
        <span>{telemetryState.fps} FPS</span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-[#626979] pointer-events-none px-1">
        <span className="hidden sm:inline">COORDINATES: X_ROT // Y_ROT // Z_EXP</span>
        <span className="text-white/50 tracking-wider">TYAGI LABS • SYSTEM CORE</span>
        <span>INTERACTIVE CANVAS</span>
      </div>
    </div>
  );
};
