import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Terminal } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = useMemo(
    () => [
      { name: "Services", href: "#services" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
    [],
  );

  // --- TACTICAL SEAMLESS VARIANTS ---
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: "linear" },
    },
  };

  const menuVariants = {
    hidden: {
      x: "100%",
      transition: { type: "spring", stiffness: 350, damping: 35 },
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 280,
        damping: 28,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-4 sm:px-6 ${
        scrolled ? "pt-3" : "pt-4 md:pt-6"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between px-4 md:px-6 py-2.5 rounded border transition-all duration-300 ${
          scrolled
            ? "max-w-5xl bg-zinc-950/90 backdrop-blur-md border-zinc-800 shadow-2xl"
            : "max-w-7xl bg-transparent border-transparent"
        }`}
      >
        {/* INDUSTRIAL BRAND LOGO */}
        <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">
          <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center transition-colors group-hover:border-cyan-500/50">
            <Terminal size={14} className="text-cyan-400" />
          </div>
          <span className="text-sm font-bold tracking-[0.18em] text-white uppercase font-sans">
            MANZI{" "}
            <span className="text-cyan-400 font-mono font-medium text-[13px] tracking-normal">
              // I.KEVIN
            </span>
          </span>
        </div>

        {/* CYBER LINK BOARD (Pill Highlight Layout) */}
        <div className="hidden lg:flex items-center gap-1 bg-zinc-950/60 border border-zinc-900 p-1 rounded font-mono">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-cyan-400 transition-colors relative"
            >
              <span className="relative z-10">{link.name}</span>
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* TACTICAL CONTROLS & UTILITIES */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <div className="flex items-center gap-0.5 border-r border-zinc-800/80 pr-3">
            <a
              href="https://github.com/Manzikevin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Access"
              className="p-2 text-zinc-400 hover:text-cyan-400 hover:bg-zinc-900/60 border border-transparent hover:border-zinc-800 rounded transition-all"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/manzikevin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Network"
              className="p-2 text-zinc-400 hover:text-cyan-400 hover:bg-zinc-900/60 border border-transparent hover:border-zinc-800 rounded transition-all"
            >
              <Linkedin size={16} />
            </a>
          </div>

          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-[11px] uppercase tracking-widest rounded transition-all active:scale-[0.97]">
            CONNECT.EXE
          </button>
        </div>

        {/* MONOCHROME MOBILE MENU TOGGLE */}
        <button
          className="lg:hidden text-zinc-400 p-2 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 rounded transition-all flex-shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Terminate Menu" : "Initialize Menu"}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MATRIX DIALOGUE DRAWER SYSTEM */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Matte Backdrop Shield */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 lg:hidden z-40 backdrop-blur-sm"
            />

            {/* Industrial Structural Sidebar */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-zinc-950 border-l border-zinc-800 z-50 p-6 flex flex-col justify-between shadow-2xl"
            >
              <div>
                {/* Drawer System Header */}
                <div className="flex items-center justify-between mb-10 pb-4 border-b border-zinc-900">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center">
                      <Terminal size={12} className="text-cyan-400" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500">
                      [ SYS.NAV ]
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-zinc-500 hover:text-white p-1.5 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 rounded transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Staggered Options Vector */}
                <div className="flex flex-col gap-2 font-mono">
                  {navLinks.map((link) => (
                    <motion.a
                      variants={itemVariants}
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-bold text-zinc-400 hover:text-cyan-400 uppercase tracking-widest transition-all block py-3 px-3 hover:bg-zinc-900/50 rounded border border-transparent hover:border-zinc-800/50"
                    >
                      <span className="text-zinc-600 mr-2 text-xs font-normal">
                        //
                      </span>
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Drawer Execution Footer */}
              <motion.div
                variants={itemVariants}
                className="pt-6 border-t border-zinc-900"
              >
                <button className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-widest rounded transition-all active:scale-[0.98] mb-5">
                  INITIALIZE_CONN
                </button>

                <div className="flex justify-center gap-4 text-zinc-500 border-t border-zinc-900/60 pt-4">
                  <a
                    href="https://github.com/Manzikevin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-cyan-400 hover:bg-zinc-900 border border-zinc-800 rounded transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manzikevin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-cyan-400 hover:bg-zinc-900 border border-zinc-800 rounded transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
