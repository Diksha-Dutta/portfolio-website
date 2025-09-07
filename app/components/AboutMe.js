"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); 
  // amount controls how much should be visible to count as "in view"

  return (
    <motion.section
      ref={ref}
      id="about"
      className="max-w-6xl mx-auto py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-6 gradient-text text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

      {/* Paragraphs */}
      <motion.p
        className="text-lg leading-relaxed text-gray-800 mb-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I’m a full-stack developer and designer passionate about building seamless, human-centered digital experiences. I thrive on blending code and creativity—whether it’s clean interfaces, smooth interactions, or playful experiments with 3D and animation. Beyond the screen, you’ll often find me singing or getting lost in a good book.
      </motion.p>

      {/* Mission Statement */}
      <motion.div
        className="bg-transparent border-l-4 backdrop-blur-md border-[#AB4E52] px-6 py-4 rounded-md shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-xl font-semibold mb-2 text-[#AB4E52]">
          My Mission
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          To bridge the gap between design and technology by building
          experiences that are not just functional, but also delightful.
          Every line of code and every pixel I craft is guided by one vision — 
          making tech human, creative, and impactful.
        </p>
      </motion.div>
    </motion.section>
  );
}
