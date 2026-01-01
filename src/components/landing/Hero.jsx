import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, Github, Linkedin, Terminal } from "lucide-react";

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const techStack = [
    "React", "Next.js", "Laravel", "TypeScript", "PostgreSQL", "Tailwind CSS", "AWS"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#030712] text-white px-6 overflow-hidden">
      
      {/* 1. Background Visuals */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[120px]" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl w-full"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for Full-stack Roles
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Engineering <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
              I’m <span className="text-white font-medium">GoodMan</span>, a Full-stack Developer specializing in building high-performance 
              React interfaces and scalable Laravel backends. I turn complex problems into elegant, production-ready code.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-12">
              <button className="group px-8 py-4 bg-white text-black hover:bg-blue-50 rounded-xl font-bold transition-all flex items-center gap-2">
                View Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-3 px-4">
                <a href="#" className="p-2 text-slate-400 hover:text-white transition-colors"><Github size={22} /></a>
                <a href="#" className="p-2 text-slate-400 hover:text-white transition-colors"><Linkedin size={22} /></a>
              </div>
            </motion.div>

            {/* Tech Stack Marquee-style */}
            <motion.div variants={fadeInUp} className="pt-8 border-t border-slate-800/50">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Core Stack</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {techStack.map((tech) => (
                  <span key={tech} className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Decorative Element (Code Snippet) */}
          <motion.div 
            variants={fadeInUp}
            className="hidden lg:block lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-1 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                <span className="ml-2 text-xs text-slate-500 font-mono">portfolio.ts</span>
              </div>
              <div className="p-6 text-sm font-mono leading-relaxed">
                <p className="text-purple-400">const <span className="text-blue-400">developer</span> = &#123;</p>
                <p className="pl-4 text-slate-300">name: <span className="text-emerald-400">'GoodMan'</span>,</p>
                <p className="pl-4 text-slate-300">focus: <span className="text-emerald-400">'Scalable Systems'</span>,</p>
                <p className="pl-4 text-slate-300">experience: <span className="text-amber-400">5+ years</span>,</p>
                <p className="pl-4 text-slate-300">status: <span className="text-emerald-400">'Ready to Build'</span></p>
                <p className="text-purple-400">&#125;;</p>
                <p className="mt-4 text-slate-500 font-italic">// Turning coffee into code...</p>
              </div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-blue-600 p-4 rounded-xl shadow-xl flex items-center gap-4">
               <div className="text-2xl font-bold">12k+</div>
               <div className="text-[10px] uppercase tracking-tighter leading-tight opacity-80 font-semibold">Commits<br/>Last Year</div>
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;