// 3D Tilt Card (React + GSAP)
// Usage:
// 1) Install GSAP: npm install gsap
// 2) Import and use the component: import TiltCard from './TiltCard';
// 3) Place <TiltCard /> anywhere in your React app.

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function TiltCard({ width = 360, height = 440, children }) {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const shadowRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    const shadow = shadowRef.current;

    if (!container || !card) return;

    const bounds = () => container.getBoundingClientRect();

    const handleMove = (clientX, clientY) => {
      const r = bounds();
      const x = clientX - r.left;
      const y = clientY - r.top;

      // normalized -1 .. 1
      const nx = (x / r.width) * 2 - 1;
      const ny = (y / r.height) * 2 - 1;

      const rotateY = nx * 12; // left-right tilt
      const rotateX = -ny * 12; // up-down tilt
      const translateZ = 30 + Math.hypot(nx, ny) * 20; // subtle pop

      gsap.to(card, {
        rotationY: rotateY,
        rotationX: rotateX,
        z: translateZ,
        duration: 0.45,
        ease: 'power3.out',
        overwrite: true,
        onUpdate() {
          // apply transform using gsap's internal values
          const ry = gsap.getProperty(card, 'rotationY');
          const rx = gsap.getProperty(card, 'rotationX');
          const z = gsap.getProperty(card, 'z');
          card.style.transform = `translateZ(${z}px) rotateX(${rx}deg) rotateY(${ry}deg)`;

          // subtle shadow movement
          if (shadow) {
            const sx = -nx * 18;
            const sy = -ny * 18;
            shadow.style.transform = `translate(${sx}px, ${sy}px) scale(1.05)`;
            shadow.style.opacity = Math.min(0.8, 0.25 + Math.hypot(nx, ny) * 0.65);
          }
        }
      });
    };

    const reset = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        z: 20,
        duration: 0.8,
        ease: 'elastic.out(1, 0.6)',
        onUpdate() {
          const ry = gsap.getProperty(card, 'rotationY');
          const rx = gsap.getProperty(card, 'rotationX');
          const z = gsap.getProperty(card, 'z');
          card.style.transform = `translateZ(${z}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        }
      });

      if (shadow) {
        gsap.to(shadow, { x: 0, y: 0, opacity: 0.18, scale: 1, duration: 0.6, ease: 'power3.out', onUpdate() { shadow.style.transform = 'translate(0px, 0px) scale(1)'; } });
      }
    };

    // Mouse events
    const onMouseMove = (e) => handleMove(e.clientX, e.clientY);
    const onMouseLeave = () => reset();

    // Touch events (mobile)
    let touchId = null;
    const onTouchStart = (e) => {
      touchId = e.changedTouches[0].identifier;
      handleMove(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    };
    const onTouchMove = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === touchId) {
          handleMove(t.clientX, t.clientY);
          break;
        }
      }
    };
    const onTouchEnd = () => reset();

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd);
    container.addEventListener('touchcancel', onTouchEnd);

    // initial state
    gsap.set(card, { transformStyle: 'preserve-3d', transformOrigin: 'center', z: 20 });
    if (shadow) gsap.set(shadow, { opacity: 0.18 });

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      container.removeEventListener('touchcancel', onTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width,
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: 1200,
        WebkitPerspective: 1200,
        fontFamily: 'codeFont'
      }}
    >
      {/* shadow */}
      <div
        ref={shadowRef}
        aria-hidden
        style={{
          position: 'absolute',
          width: width * 0.9,
          height: 26,
          borderRadius: 20,
          filter: 'blur(18px)',
          background: 'linear-gradient(90deg, rgba(0,0,0,0.45), rgba(0,0,0,0.15))',
          bottom: 18,
          transform: 'translate(0px, 0px) scale(1)',
          transition: 'opacity 200ms',
        }}
      />

      {/* card */}
      <div
        ref={cardRef}
        className="tilt-card"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(10,10,20,0.18)',
          cursor: 'pointer',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          display: 'flex',
          flexDirection: 'column',
          color: 'white',
          backdropFilter: 'blur(20px)'
        }}
      >
        {/* content layer (front) */}
        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14, zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: 22,
            }}>😎</div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700 }}>Web Developer</div>
              <div style={{ fontSize: 15, opacity: 0.9 }}>Every step is a new one</div>
            </div>
          </div>

          <div style={{
            flex: 1,
            borderRadius: 12,
            background: 'rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
            padding: 12,
            lineHeight: 1.3,
          }}>
            {children ?? (
              <div style={{ textAlign: 'center', opacity: 0.95 }}>
                Life doesn’t crash because of one bad line — it compiles again when you keep improving the script.
              </div>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', fontSize: 40, fontWeight: 500, padding: 15 }}>
           🌹🌸🌼🌺💮🪷🌻🌷🪻🥀
          </div>
          <h3 className='text-2xl w-full text-center'>Flowers For You</h3>
        </div>

        {/* subtle decorative layer */}
        <div style={{
          position: 'absolute',
          right: -40,
          bottom: -40,
          width: 200,
          height: 200,
          transform: 'translateZ(0px)',
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06), transparent 30%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.03), transparent 25%)'
        }} />
      </div>
    </div>
  );
}
