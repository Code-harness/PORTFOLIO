import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Terminal } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 px-6 py-4 ${
        scrolled ? "mt-2" : "mt-0"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-2xl"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Terminal size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            MAZI<span className="text-blue-500"> I Kevin</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 mr-4 border-r border-slate-800 pr-4">
            <a
              href="#"
              className="p-2 text-slate-400 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="p-2 text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
          <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95">
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-6 right-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-3xl md:hidden z-50"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-800" />
              <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl">
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
