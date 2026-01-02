import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Terminal } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "pt-2 md:pt-4" : "pt-0"
      } px-2 md:px-6`}
    >
      <div
        className={`mx-auto flex items-center justify-between px-3 md:px-8 py-2.5 md:py-3 rounded-xl md:rounded-2xl transition-all duration-300 ${
          scrolled
            ? "max-w-7xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 shadow-2xl"
            : "max-w-full bg-transparent border border-transparent"
        }`}
      >
        {/* Logo Section - Scaled down for very small screens */}
        <div className="flex items-center gap-1.5 md:gap-2 group cursor-pointer flex-shrink-0">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-600/20">
            <Terminal size={16} className="text-white md:hidden" />
            <Terminal size={20} className="text-white hidden md:block" />
          </div>
          <span className="text-base md:text-xl font-black tracking-tighter text-white whitespace-nowrap">
            MANZI<span className="text-blue-500"> I Kevin</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] xl:text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 flex-shrink-0">
          <div className="flex items-center gap-1 border-r border-slate-800 pr-3 lg:pr-6">
            <a href="#" className="p-1.5 text-slate-400 hover:text-white transition-all hover:scale-110">
              <Github size={18} />
            </a>
            <a href="#" className="p-1.5 text-slate-400 hover:text-white transition-all hover:scale-110">
              <Linkedin size={18} />
            </a>
          </div>
          <button className="px-4 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-lg lg:rounded-xl transition-all hover:bg-blue-50 active:scale-95 whitespace-nowrap">
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-1.5 hover:bg-slate-800 rounded-lg transition-colors flex-shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md lg:hidden z-[-1]"
            />
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-slate-950 border-l border-slate-800 shadow-3xl lg:hidden z-50 p-6 flex flex-col"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 p-2">
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-black text-slate-200 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-auto pt-10 border-t border-slate-900">
                <button className="w-full py-4 bg-blue-600 text-white font-black uppercase tracking-widest rounded-xl mb-6">
                  Hire Me
                </button>
                <div className="flex justify-center gap-8 text-slate-500">
                  <Github size={24} />
                  <Linkedin size={24} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;