import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-br from-[#fff6f2] via-[#fff] to-[#fae9e6] py-20 sm:py-28"
    >
      {/* Subtle linen-like texture */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(217, 168, 144, 0.07), rgba(217, 168, 144, 0.07) 1px, transparent 1px, transparent 6px)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <h2
            className="text-3xl font-semibold text-[#3e2c2a] sm:text-4xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            About the Maker
          </h2>
          <p className="mt-4 text-[#6c4f4b] leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Every Aura bracelet is meticulously handcrafted using ethically sourced crystals and premium metals. Inspired by the quiet poetry of nature, each piece is made in small batches to ensure unrivaled quality and a personal touch.
          </p>
          <p className="mt-4 text-[#6c4f4b] leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
            From sketch to clasp, our process celebrates artistry and intention—designed to be cherished, layered, and lived in.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="order-1 md:order-2"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop"
              alt="The maker at work"
              className="h-80 w-full object-cover sm:h-[28rem]"
            />
            {/* soft gold gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#f5d0c5]/40 via-transparent to-[#d4a373]/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
