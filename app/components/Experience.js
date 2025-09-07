"use client";
import { useRef ,useState} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaJava, FaReact, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
import { SiSpring, SiHibernate, SiReact as SiReactNative } from "react-icons/si";

export default function Experience() {
  const internships = [
    {
      role: "Java Full Stack Developer Intern",
      company: "Adjecti Solutions",
      duration: "May 2025 - June 2025",
      desc: "Worked on end-to-end Java full-stack projects: backend logic with Servlets & Spring, database integration, and modern, responsive UIs.",
      skills: [
        { icon: <SiSpring className="text-green-600 text-xl" />, name: "Spring" },
        { icon: <FaJava className="text-[#f89820] text-xl" />, name: "Java" },
        { icon: <SiHibernate className="text-[#59666C] text-xl" />, name: "Hibernate" },
        { icon: <FaDatabase className="text-blue-600 text-xl" />, name: "JDBC" },
        { icon: <FaDatabase className="text-gray-500 text-xl" />, name: "SQL" },
      ],
    },
    {
      role: "React Summer Intern",
      company: "Celabl Technologies",
      duration: "May 2025 - July 2025",
      desc: "Built dynamic React components, optimized state management, and integrated APIs to deliver responsive, user-friendly interfaces."
,
      skills: [
        { icon: <FaReact className="text-blue-500 text-xl" />, name: "React" },
        { icon: <SiReactNative className="text-cyan-400 text-xl" />, name: "React Native" },
        { icon: <FaCss3Alt className="text-blue-700 text-xl" />, name: "CSS" },
        { icon: <FaJs className="text-yellow-400 text-xl" />, name: "JS" },
      ],
    },
  ];

  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.3, triggerOnce: false });
  const setRefs = (node) => { ref.current = node; inViewRef(node); };

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={setRefs}
      id="experience"
      style={{ scale, opacity }}
      className="max-w-6xl mx-auto py-20 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Work Experience</h2>

      {/* Desktop: timeline with hover cards */}
      <div className="hidden md:flex flex-col items-center relative">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: inView ? "100%" : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-1 bg-gradient-to-b from-[#C08081] to-[#AB4E52] rounded-full absolute left-1/2 transform -translate-x-1/2"
        />
        <div className="flex flex-col space-y-16 relative z-10">
          {internships.map((exp, i) => {
            const [hovered, setHovered] = useState(false);

            return (
              <motion.div
                key={i}
                className="relative bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(171,78,82,0.6)] hover:scale-[1.05] transition-all w-80"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.3 }}
                viewport={{ once: false }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: inView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.3 }}
                  className="absolute top-0 left-[153px] transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-[#AB4E52] rounded-full shadow-lg"
                />

                <h3 className="text-lg font-semibold text-[#AB4E52]">{exp.role}</h3>
                <p className="text-gray-600 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 italic">{exp.duration}</p>
                <p className="mt-2 text-gray-700">{exp.desc}</p>

                {/* Desktop skill icons: slide out right on hover */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute top-1/2 left-full ml-4 flex gap-4 transform -translate-y-1/2"
                >
                  {exp.skills.map((skill, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1 text-sm font-medium">
                      {skill.icon}
                      <span className="hidden md:inline">{skill.name}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile: stacked cards with always-visible icons below */}
      <div className="flex flex-col space-y-8 md:hidden">
        {internships.map((exp, i) => (
          <motion.div
            key={i}
            className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: false }}
          >
            <h3 className="text-lg font-semibold text-[#AB4E52]">{exp.role}</h3>
            <p className="text-gray-600 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 italic">{exp.duration}</p>
            <p className="mt-2 text-gray-700">{exp.desc}</p>

            {/* Always visible skill icons below card */}
            <div className="mt-4 flex gap-4 justify-center flex-wrap">
              {exp.skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1 text-sm font-medium">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
