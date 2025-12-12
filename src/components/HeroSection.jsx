import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.png";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const HeroSection = () => {
  return (
    <section className="bg-white pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Add top padding so it doesn't hide under navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 font-epilogue text-center md:text-left">
          
          <motion.p
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="show"
            className="mb-3 text-sm sm:text-base font-semibold tracking-wide text-gray-700"
          >
            Web Developer • UX/UI Designer
          </motion.p>

          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="show"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight"
          >
            Siyamtanda{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Tonjeni
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="show"
            className="mt-5 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            I am a creative Web Developer and UX/UI Designer passionate about
            building engaging, user-centered digital experiences. I design and
            develop modern, responsive websites and intuitive interfaces that
            solve real-world problems.
          </motion.p>

          <motion.div
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="show"
            className="mt-8"
          >
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:bg-green-600 transition-all"
            >
              View My Work
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.img
            src={heroImage}
            alt="Hero"
            className="w-2/3 sm:w-1/2 md:w-full max-w-xs sm:max-w-sm md:max-w-md"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
