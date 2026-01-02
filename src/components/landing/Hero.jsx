import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Terminal } from "lucide-react";

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
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextdotjs" },
    { name: "Python", icon: "Python" },
    { name: "Laravel", icon: "laravel" },
    { name: "TypeScript", icon: "typescript" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Tailwind", icon: "tailwindcss" },
    { name: "MYSQL", icon: "mysql" },
    { name: "Flutter", icon: "flutter" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white px-6 py-20 lg:py-0 overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-20 pointer-events-none"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl w-full"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/5 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for Full-stack Roles
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-bold tracking-tighter mb-6"
            >
              Engineering <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed"
            >
              I’m{" "}
              <span className="text-slate-900 dark:text-white font-semibold">
                Manzi I Kevin
              </span>
              , a Full-stack Developer specializing in building high-performance
              interfaces and scalable backends.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button className="group px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-blue-600 dark:hover:bg-blue-50 rounded-xl font-bold transition-all flex items-center gap-2 shadow-xl shadow-blue-500/10">
                View Portfolio{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <div className="flex items-center gap-3 px-4">
                <a
                  href="#"
                  className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                >
                  <Github size={22} />
                </a>
                <a
                  href="#"
                  className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </motion.div>

            {/* Tech Stack with Icons */}
            <motion.div
              variants={fadeInUp}
              className="pt-8 border-t border-slate-200 dark:border-slate-800/50"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-6">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center gap-2"
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${tech.icon}/64748b`}
                      className="w-6 h-6 dark:filter dark:invert dark:opacity-60 group-hover:dark:opacity-100 group-hover:scale-110 transition-all"
                      alt={tech.name}
                    />
                    <span className="text-[10px] font-bold text-slate-400 uppercase opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Decorative Element (Visible on Mobile) */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 order-1 lg:order-2 w-full relative"
          >
            <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 p-1 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-400/30 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-400/30 border border-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/30 border border-emerald-500/50" />
                <span className="ml-2 text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                  Manzi_Kevin.js
                </span>
              </div>
              <div className="p-6 text-[13px] sm:text-sm font-mono leading-relaxed overflow-x-auto">
                <p className="text-purple-600 dark:text-purple-400 font-bold">
                  const{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-normal">
                    developer
                  </span>{" "}
                  = &#123;
                </p>
                <p className="pl-4 text-slate-700 dark:text-slate-300 whitespace-nowrap">
                  name:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    'Manzi I Kevin'
                  </span>
                  ,
                </p>
                <p className="pl-4 text-slate-700 dark:text-slate-300">
                  focus:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    'Scalable Systems'
                  </span>
                  ,
                </p>
                <p className="pl-4 text-slate-700 dark:text-slate-300">
                  experience:{" "}
                  <span className="text-amber-600 dark:text-amber-400">
                    5+ years
                  </span>
                  ,
                </p>
                <p className="pl-4 text-slate-700 dark:text-slate-300">
                  status:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    'Open to Build'
                  </span>
                </p>
                <p className="text-purple-600 dark:text-purple-400 font-bold">
                  &#125;;
                </p>
                <p className="mt-4 text-slate-400 italic">
                  // Engineering with passion.
                </p>
              </div>
            </div>

            {/* Stats Overlay (Hidden on small mobile to avoid clutter) */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-left-6 bg-blue-600 text-white p-3 sm:p-5 rounded-2xl shadow-2xl flex items-center gap-3 sm:gap-4 z-20">
              <div className="text-xl sm:text-3xl font-bold">1k+</div>
              <div className="text-[8px] sm:text-[10px] uppercase tracking-tighter leading-tight font-bold">
                Commits
                <br />
                Last Year
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
