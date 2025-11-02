import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ContactCTA = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    alert(`Thank you, ${data.name}. We'll get back to you at ${data.email}.`);
    form.reset();
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-gradient-to-t from-[#fff2ed] via-[#fff] to-[#fdecef] py-20 sm:py-28">
      {/* Subtle animated background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#f5d0c5] blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-10 right-0 h-48 w-48 rounded-full bg-[#e6b8a2] blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '0.6s' }} />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold text-[#3e2c2a] sm:text-4xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Bring your design to life
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-center text-[#6c4f4b]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Share your story, palette, or gemstones you love. We'll craft a piece that feels uniquely yours.
        </motion.p>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 grid grid-cols-1 gap-4 rounded-3xl border border-rose-100 bg-white/80 p-6 shadow-xl backdrop-blur-sm sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm text-[#6c4f4b]" style={{ fontFamily: 'Poppins, sans-serif' }}>Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-rose-100 bg-white px-4 py-3 text-[#3e2c2a] outline-none ring-[#d4a373]/30 focus:ring"
              placeholder="Your name"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm text-[#6c4f4b]" style={{ fontFamily: 'Poppins, sans-serif' }}>Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-rose-100 bg-white px-4 py-3 text-[#3e2c2a] outline-none ring-[#d4a373]/30 focus:ring"
              placeholder="you@example.com"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm text-[#6c4f4b]" style={{ fontFamily: 'Poppins, sans-serif' }}>Message</label>
            <textarea
              name="message"
              rows={5}
              className="w-full rounded-lg border border-rose-100 bg-white px-4 py-3 text-[#3e2c2a] outline-none ring-[#d4a373]/30 focus:ring"
              placeholder="Tell us about your vision..."
              style={{ fontFamily: 'Poppins, sans-serif' }}
            />
          </div>
          <div className="sm:col-span-2 flex items-center justify-center">
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#d4a373] via-[#e6b8a2] to-[#f2c8bd] px-8 py-3 text-white shadow-lg transition hover:shadow-rose-200/70"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span className="relative z-10">Send Message</span>
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
            </button>
          </div>
        </motion.form>

        {/* Footer note */}
        <p className="mt-10 text-center text-sm text-[#6c4f4b]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          © {new Date().getFullYear()} Aura Bracelets — Handcrafted with heart.
        </p>
      </div>

      {/* Scroll-to-top button */}
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#3e2c2a] shadow-lg ring-1 ring-rose-100 transition ${
          showTop ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-3'
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </section>
  );
};

export default ContactCTA;
