"use client";
import { motion } from "framer-motion";

export default function ParticleBackground() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full -z-10"
      animate={{
        backgroundPositionX: ["0%", "100%", "0%"],
        backgroundPositionY: ["0%", "100%", "0%"],
      }}
      transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      style={{
        background: "linear-gradient(135deg, #F1DDCF, #EDCDC2, #EFDECD)",
        backgroundSize: "400% 400%",
      }}
    />
  );
}
