"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { motion } from "framer-motion";

export default function SocialLinks() {
  const socials = [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/diksha-dutta", color: "#0A66C2" },
    { icon: <FaGithub />, link: "https://github.com/Diksha-Dutta", color: "#333" },
    { icon: <FaEnvelope />, link: "mailto:duttadiksha27@gmail.com", color: "#AB4E52" },
    ];

  return (
    <div className="flex justify-center gap-6 py-8">
      {socials.map((s, i) => (
        <motion.a
          key={i}
          href={s.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -10, 0] }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3, 
          }}
          className="p-4 rounded-full shadow-lg"
          style={{ backgroundColor: "rgba(255,255,255,0.8)", color: s.color }}
        >
          {s.icon}
        </motion.a>
      ))}
    </div>
  );
}
