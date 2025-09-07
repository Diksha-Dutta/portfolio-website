"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs
      .sendForm(
        "service_zlrtumb", // your EmailJS service ID
        "template_ypd2q97", // your EmailJS template ID
        form,
        "X93o_XL6Al8DgeNfn" // your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setSubmitted(true);
         setTimeout(() => {
          setSubmitted(false);
        }, 10000);
      },
        (error) => {
          console.error("Email sending error:", error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );

    form.reset();
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      style={{ scale, opacity }}
      className="max-w-6xl mx-auto py-20 px-6 text-center"
    >
      <h2 className="text-4xl font-extrabold mb-4 gradient-text">
        Let’s Connect ✨
      </h2>
      <p className="text-gray-600 mb-12 max-w-xl mx-auto">
        Got a project, an idea, or just want to say hi? Drop me a message—I’d
        love to hear from you!
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 max-w-md mx-auto bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg"
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="peer w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C08081] bg-transparent placeholder-transparent"
            />
            <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#AB4E52]
              peer-valid:top-0 peer-valid:text-sm peer-valid:text-[#AB4E52]"
            >
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="peer w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C08081] bg-transparent placeholder-transparent"
            />
            <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#AB4E52]
              peer-valid:top-0 peer-valid:text-sm peer-valid:text-[#AB4E52]"
            >
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your Message"
              className="peer w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C08081] bg-transparent placeholder-transparent"
            />
            <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#AB4E52]
              peer-valid:top-0 peer-valid:text-sm peer-valid:text-[#AB4E52]"
            >
              Your Message
            </label>
          </div>

          <button className="bg-gradient-to-r from-[#C08081] to-[#AB4E52] text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition">
            Send Message 🚀
          </button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-md mx-auto bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg text-xl font-semibold text-[#AB4E52]"
        >
          Pleasure to hear from you 💌 <br />
          I’ll get back to you ASAP!
        </motion.div>
      )}
    </motion.section>
  );
}
