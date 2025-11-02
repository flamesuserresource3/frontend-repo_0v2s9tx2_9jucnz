import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Simple ring SVG used as a floating "bracelet" accent
const Ring = ({ size = 160, stroke = 8, color = '#d4a373' }) => (
  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="drop-shadow-md">
    <circle
      cx={size / 2}
      cy={size / 2}
      r={(size - stroke) / 2}
      fill="none"
      stroke={color}
      strokeWidth={stroke}
      opacity="0.8"
    />
  </svg>
);

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  // Parallax speeds for decorative rings
  const ySlow = useTransform(scrollY, [0, 600], [0, 60]);
  const yMed = useTransform(scrollY, [0, 600], [0, 120]);
  const yFast = useTransform(scrollY, [0, 600], [0, 180]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#fff8f6] via-[#fff] to-[#fdecef]"
    >
      {/* Subtle background grain/linen effect */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(212,163,115,0.08) 1px, transparent 1px)',
          backgroundSize: '10px 10px',
          opacity: 0.3,
        }}
      />

      {/* Floating rings with parallax */}
      <motion.div style={{ y: ySlow }} className="absolute -left-12 top-24">
        <Ring size={220} stroke={10} color="#e9b1a6" />
      </motion.div>
      <motion.div style={{ y: yMed }} className="absolute right-6 top-40 rotate-12">
        <Ring size={160} stroke={8} color="#d5a08c" />
      </motion.div>
      <motion.div style={{ y: yFast }} className="absolute left-1/2 bottom-10 -translate-x-1/2 -rotate-6">
        <Ring size={280} stroke={12} color="#f0c7bd" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pt-32 text-center sm:pt-40 lg:pt-48">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-semibold tracking-tight text-[#3e2c2a] sm:text-5xl md:text-6xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Aura Bracelets
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
          className="mt-4 text-lg leading-relaxed text-[#6c4f4b] sm:text-xl"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <span className="relative inline-block shimmer">
            Handcrafted Elegance for Every Soul
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="mt-10"
        >
          <a
            href="#collections"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d4a373] via-[#e6b8a2] to-[#f2c8bd] px-8 py-3 text-white shadow-lg transition duration-300 hover:shadow-rose-200/80"
          >
            <span className="relative glow-text">Shop Now</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fdecef] to-transparent" />

      {/* Local styles for shimmer + glow */}
      <style>{`
        .shimmer {
          background: linear-gradient(110deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.7) 15%, rgba(255,255,255,0.0) 30%);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -100% 0; }
        }
        .glow-text {
          text-shadow: 0 0 12px rgba(240, 180, 160, 0.6);
        }
      `}</style>
    </section>
  );
};

export default Hero;
