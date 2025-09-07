"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const lettersTop = ["D", "I", "K", "S", "H", "A"];
const lettersBottom = ["D", "U", "T", "T", "A"];

export default function Hero() {
  const [showSplit, setShowSplit] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setShowSplit(false);
      const timer = setTimeout(() => setShowSplit(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen  text-[#1a1a1a] flex items-center justify-center overflow-hidden px-4 md:px-0"
    >
      <AnimatePresence mode="wait">
        {!showSplit ? (
          // Phase 1 - falling letters
          <motion.div
            key="falling"
            className="flex flex-col items-center justify-center text-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Top Letters */}
            <div className="flex gap-2 text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#AB4E52] mb-6 sm:mb-8">
              {lettersTop.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: -200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.2,
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Photo */}
            <div className="w-48 sm:w-64 md:w-80 mb-6 sm:mb-8">
              <img
                src="/images/hero-photo.png"
                alt="Diksha Dutta"
                className="rounded-lg w-full h-auto object-cover shadow-2xl border-4 border-white"
              />
            </div>

            {/* Bottom Letters */}
            <div className="flex gap-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#AB4E52] mt-4 sm:mt-8">
              {lettersBottom.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.25,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#AB4E52] font-medium">
              Full Stack Developer • Designer • Analyst
            </p>
          </motion.div>
        ) : (
          // Phase 2 - split layout
          <motion.div
            key="split"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:max-w-6xl py-8 md:py-12 md:p-20 md:max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Left content */}
            <motion.div
              className="flex flex-col justify-center space-y-4 sm:space-y-6 px-8 md:px-0 text-center md:text-left mx-auto"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }} // x=0 for all screens
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="text-sm sm:text-base text-green-600 font-semibold uppercase tracking-wide">
                Available for work
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight gradient-text">
                Hi, I’m <br /> Diksha Dutta
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-md mx-auto md:mx-0">
                I build seamless digital experiences from design to code —
                blending creativity with functionality. Exploring web, mobile,
                and data-driven solutions.
              </p>
              <a
                href="/Diksha_Dutta_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-5 py-2 sm:px-6 sm:py-3 bg-[#AB4E52] text-white font-medium rounded-lg shadow-md hover:bg-[#922E34] transition">
                  View Resume
                </button>
              </a>
            </motion.div>

            {/* Right content */}
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 px-4 md:px-0 text-center md:text-left "
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }} // x=0 so no left-right shift on mobile
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="w-44 sm:w-48 md:w-60 h-auto bg-white/30 shadow-lg rounded-2xl p-4 flex flex-col justify-between mb-4 sm:mb-6 mx-auto md:mx-0">
                <div>
                  <h3 className="font-bold text-base sm:text-lg">Diksha Dutta</h3>
                  <p className="text-xs sm:text-sm text-gray-500">India</p>
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#AB4E52]">
                  Think. Build. Beautify. Decode.
                </span>
              </div>

              <div className="w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 mx-auto">
                <img
                  src="/images/hero-photo.png"
                  alt="Diksha Dutta"
                  className="rounded-2xl w-full h-full object-cover shadow-md"
                />
              </div>

             
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
