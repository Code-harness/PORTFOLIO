import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Terminal, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark

  // 1. Theme Toggle Logic
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 px-6 py-4 ${
        scrolled ? "mt-2" : "mt-0"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 shadow-sm ${
          scrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-2xl"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-500/20">
            <Terminal size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white">
            GOOD<span className="text-blue-500">MAN</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Buttons & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Switcher */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-amber-400 hover:scale-110 transition-all border border-slate-200 dark:border-slate-700"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="flex items-center gap-2 px-4 border-l border-slate-200 dark:border-slate-800">
            <a
              href="#"
              className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95">
            Hire Me
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-slate-600 dark:text-amber-400"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-slate-900 dark:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-24 left-6 right-6 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-3xl md:hidden z-[101]"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bold text-slate-900 dark:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-[1px] bg-slate-100 dark:bg-slate-800" />
              <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20">
                Contact Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
