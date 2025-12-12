import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Resume from "../assets/Siyamtanda_Tonjeni_CV.pdf";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300
        ${scrolled ? "backdrop-blur-xl bg-gradient-to-r from-green-400/20 to-green-600/20" : "bg-transparent"}
      `}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center font-epilogue shadow-lg w-full">
        
        {/* Logo */}
        <Link to="/" className="text-xl sm:text-2xl font-bold tracking-tight">
          SIYA<span className="text-green-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 lg:space-x-12 text-base lg:text-lg">
          <li><Link className="hover:text-green-400 transition" to="/about">About</Link></li>
          <li><Link className="hover:text-green-400 transition" to="/projects">Work</Link></li>
          <li><Link className="hover:text-green-400 transition" to="/contact">Contact</Link></li>
          <li>
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg py-6 space-y-6 text-center text-lg">
          <Link onClick={() => setOpen(false)} className="block hover:text-green-400" to="/about">
            About
          </Link>
          <Link onClick={() => setOpen(false)} className="block hover:text-green-400" to="/projects">
            Work
          </Link>
          <Link onClick={() => setOpen(false)} className="block hover:text-green-400" to="/contact">
            Contact
          </Link>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-green-400"
          >
            Resume
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
