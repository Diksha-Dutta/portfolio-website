"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const heroProject = {
  title: "Team Engineers Medical",
  description:
    "A live medical startup website showcasing anesthesia machines, ventilators, and other equipment for Team Engineers.",
  images: [
    "/projects/project1-main.jpg",
    "/projects/project1-1.jpg",
    "/projects/project1-2.jpg",
  ],
  link: "https://www.teamengineersmedical.com",
};

const reactProjects = [
  {
    title: "Spotify 2.0",
    description:
      "A Spotify 2.0 clone built during a React summer internship, featuring music search, playlists, and live playback using React, Redux, and the Shazam API.",
    image: "/projects/project2-main.jpg",
  },
  {
    title: "Service Desk App",
    description:
      "A service desk web app with user authentication and payment integration, built using React, Firebase, and Razorpay.",
    image: "/projects/project3-main.jpg",
  },
];

const springProjects = [
  {
    title: "Flight Booking Website",
    description:
      "A full-featured flight booking platform built with Spring Boot, Thymeleaf, Hibernate, and MySQL. Features include searching flights, booking tickets, and managing user profiles.",
    image: "/projects/project4-main.jpg",
  },
  {
    title: "Customer Management App",
    description:
      "A CRUD-based customer management system using Spring MVC, Hibernate, JSP, and Lombok. Allows adding, updating, deleting, and viewing customer records.",
    image: "/projects/project5-main.jpg",
  },
];

export default function WorkShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [carouselIndex, setCarouselIndex] = useState(0);

  // Carousel auto slide for hero project
  setTimeout(() => {
    setCarouselIndex((prev) => (prev + 1) % heroProject.images.length);
  }, 3000);

  const renderProjects = (projects) =>
    projects.map((project, index) => (
      <motion.div
        key={index}
        className=" rounded-2xl shadow-2xl overflow-hidden cursor-pointer transition-shadow duration-500 relative max-w-sm mx-auto"
        whileHover={{ y: -10, scale: 1.03 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        style={{
          perspective: 1000,
        }}
        onMouseMove={(e) => {
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          card.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) translateY(-5px)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg) translateY(0px)";
        }}
      >
        <img
          src={project.image || heroProject.images[carouselIndex]}
          alt={project.title}
          className="w-full sm:h-64 md:h-52 h-24 object-cover"
        />
        <div className="p-4 md:p-6 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-[#a74d4d] mb-2">{project.title}</h3>
          <p className="text-gray-700 text-sm md:text-base">{project.description}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-white bg-[#B3446C] px-3 py-1 rounded hover:bg-[#93354f]"
            >
              Live Site
            </a>
          )}
        </div>
      </motion.div>
    ));

  return (
    <motion.section ref={ref} id="work" style={{ scale, opacity }} className="max-w-2xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Showcasing My Work</h2>

      {/* Hero Project Carousel */}
      <div className="mb-12">
        <motion.div
          className="rounded-2xl shadow-3xl overflow-hidden cursor-pointer transition-shadow duration-500 relative"
          whileHover={{ y: -10, scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ perspective: 1000 }}
          onMouseMove={(e) => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            card.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) translateY(-5px)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg) translateY(0px)";
          }}
        >
          <img
            src={heroProject.images[carouselIndex]}
            alt={heroProject.title}
            className="w-full h-52 md:h-64 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#a74d4d] mb-3">{heroProject.title}</h3>
            <p className="text-gray-700 mb-3">{heroProject.description}</p>
            <a
              href={heroProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#B3446C] px-4 py-2 rounded hover:bg-[#93354f] inline-block"
            >
              Live Site
            </a>
          </div>
        </motion.div>
      </div>

      {/* React Projects */}
      <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#a74d4d] mb-6">React Projects</h3>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 mb-10">{renderProjects(reactProjects)}</div>

      {/* Spring Projects */}
      <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#a74d4d] mb-6">Spring Framework Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">{renderProjects(springProjects)}</div>
    </motion.section>
  );
}
