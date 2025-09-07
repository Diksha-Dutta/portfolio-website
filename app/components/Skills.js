"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaJava, FaPython, FaReact, FaFigma } from "react-icons/fa";
import { SiFlutter, SiMysql, SiTailwindcss, SiNodedotjs } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      title: "Programming Languages",
      details: "Java, Python, JavaScript, C, C++. ",
    },
    {
      title: "Web Development",
      details: "HTML, CSS, JS, React, Next.js, Node.js, Angular, Flask, PHP ",
    },
     {
    title: "Backend & ORM",
    details: "Spring, Hibernate, Node.js, RESTful APIs, Database Integration",
  },
    {
      title: "UI/UX Design",
      details: "Figma, Tailwind, responsive design.",
    },
    {
      title: "App Development",
      details: "React Native, Flutter.",
    },
    {
      title: "Data Analysis",
      details: "SQL, Power BI, Excel, Pandas, NumPy.",
    },
    {
      title: "Database",
      details: "MySQL, MongoDB, PostgreSQL.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1 0"] });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const floatingIcons = [
    { icon: <FaJava className="text-[#f89820]" />, top: "10%", left: "5%", delay: 0 },
    { icon: <FaPython className="text-[#3776AB]" />, top: "20%", left: "90%", delay: 1 },
    { icon: <FaReact className="text-[#61DBFB]" />, top: "75%", left: "10%", delay: 2 },
    { icon: <SiFlutter className="text-[#02569B]" />, top: "80%", left: "85%", delay: 3 },
    { icon: <FaFigma className="text-[#F24E1E]" />, top: "50%", left: "20%", delay: 4 },
    { icon: <SiMysql className="text-[#00758F]" />, top: "65%", left: "80%", delay: 5 },
    { icon: <SiTailwindcss className="text-[#38BDF8]" />, top: "30%", left: "20%", delay: 6 },
    { icon: <SiNodedotjs className="text-[#68A063]" />, top: "40%", left: "80%", delay: 7 },
  ];

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ opacity, y, scale }}
    >
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-6xl opacity-70 z-10 pointer-events-none"
          style={{ top: item.top, left: item.left }}
          animate={{ y: [0, -20, 0, 20, 0], x: [0, 15, 0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
        >
          {item.icon}
        </motion.div>
      ))}

<div>
     <h2 className="text-4xl font-bold mb-8 text-center text-[#a74d4d] relative z-20 ">
    Skills
  </h2>
  </div>

       
<div className="relative z-20 backdrop-blur-md rounded-2xl shadow-xl p-10 lg:max-w-xl md:max-w-sm w-full justify-center">
        <div className="divide-y divide-gray-300">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="py-4 cursor-pointer"
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg text-[#a74d4d]">{skill.title}</span>
                {!isMobile && (
                  <motion.span
                    animate={{ rotate: hoveredIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500 text-xl"
                  >
                    +
                  </motion.span>
                )}
              </div>

              <motion.div
                initial={false}
                animate={
                  isMobile
                    ? { height: "auto", opacity: 1 }
                    : hoveredIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p className="p-2 bg-[#C08081]/20 rounded-lg">{skill.details}</p>
              </motion.div>
            </div>
            
          ))}
        </div>
      </div>
      
    </motion.section>
  );
}
