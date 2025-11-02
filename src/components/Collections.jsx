import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TABS = ['All', 'Crystal', 'Minimal', 'Boho', 'Custom'];

const ITEMS = [
  { id: 1, title: 'Rose Quartz Calm', cat: 'Crystal', img: 'https://images.unsplash.com/photo-1621546291065-4ff4a02e2297?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, title: 'Golden Whisper', cat: 'Minimal', img: 'https://images.unsplash.com/photo-1523297737116-58919fa4c2b5?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, title: 'Desert Muse', cat: 'Boho', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, title: 'Celestial Custom', cat: 'Custom', img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, title: 'Clear Intention', cat: 'Crystal', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop' },
  { id: 6, title: 'Silk Line', cat: 'Minimal', img: 'https://images.unsplash.com/photo-1517012603630-9da562dfc2ad?q=80&w=1600&auto=format&fit=crop' },
];

const Testimonials = () => {
  const list = [
    {
      quote: 'Delicate, timeless, and so meaningful—my daily staple now.',
      name: 'Elena M.',
      stars: 5,
    },
    {
      quote: 'The custom design process was a dream. The detail is exquisite!',
      name: 'Sofia R.',
      stars: 5,
    },
    {
      quote: 'It feels luxurious yet effortless. Compliments every time.',
      name: 'Jasmine A.',
      stars: 5,
    },
  ];
  return (
    <div className="mt-20">
      <h3
        className="text-center text-2xl font-semibold text-[#3e2c2a] sm:text-3xl"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Loved by Our Community
      </h3>
      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative rounded-2xl bg-white/20 p-6 shadow-xl backdrop-blur-lg ring-1 ring-white/30"
          >
            <div className="mb-3 flex items-center gap-1 text-[#d4a373]">
              {Array.from({ length: t.stars }).map((_, idx) => (
                <Star key={idx} size={18} fill="#d4a373" color="#d4a373" />
              ))}
            </div>
            <p className="text-[#4e3835]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              “{t.quote}”
            </p>
            <p className="mt-4 text-sm text-[#6c4f4b]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              — {t.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Collections = () => {
  const [active, setActive] = useState('All');
  const filtered = useMemo(
    () => (active === 'All' ? ITEMS : ITEMS.filter((i) => i.cat === active)),
    [active]
  );

  return (
    <section id="collections" className="relative w-full bg-gradient-to-b from-[#fdecef] via-[#fff] to-[#fffaf7] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold text-[#3e2c2a] sm:text-4xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Collections
        </motion.h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                active === tab
                  ? 'border-[#d4a373] bg-[#f2c8bd] text-[#3e2c2a]' 
                  : 'border-rose-100 bg-white/80 text-[#6c4f4b] hover:bg-rose-50'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-rose-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#f5d0c5]/40 via-transparent to-transparent" />
              </div>
              <div className="flex items-center justify-between p-4">
                <h4 className="text-[#3e2c2a]" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h4>
                <span className="text-xs text-[#6c4f4b]" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.cat}</span>
              </div>
              {/* shimmer on hover */}
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* Testimonials inside the same section to keep component count within 4 */}
        <Testimonials />
      </div>
    </section>
  );
};

export default Collections;
