import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Terminal } from "lucide-react";

/**
 * BACKGROUND COMPONENT
 * Generates slow-drifting, glowing orbs for visual depth.
 */
const FloatingParticles = () => {
  const particles = Array.from({ length: 12 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/5"
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 80 - 40, 0],
            y: [0, Math.random() * 80 - 40, 0],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  // --- 3D TILT LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transform mouse position into subtle rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const techStack = [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextdotjs" },
    { name: "Python", icon: "python" },
    { name: "Laravel", icon: "laravel" },
    { name: "TypeScript", icon: "typescript" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Tailwind", icon: "tailwindcss" },
    { name: "MySQL", icon: "mysql" },
    { name: "Flutter", icon: "flutter" },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center bg-[#030712] text-white px-6 py-24 lg:py-0 overflow-hidden"
    >
      <FloatingParticles />

      {/* Fixed Glow Orbs */}
      <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl w-full"
      >
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for You !
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-5xl font-black tracking-tighter mb-8 leading-[0.9]"
            >
              Engineering <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed"
            >
              I’m{" "}
              <span className="text-white font-bold underline decoration-blue-500 decoration-2 underline-offset-4">
                Manzi IRAKOZE Kevin
              </span>
              , a Full-stack Developer architecting high-performance interfaces
              and scalable backend ecosystems.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-5 mb-16"
            >
              <button className="group px-8 py-4 bg-white text-black hover:bg-blue-50 rounded-2xl font-black transition-all flex items-center gap-2 shadow-2xl shadow-blue-500/20 active:scale-95">
                View Portfolio{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <div className="flex items-center gap-2 px-2">
                <a
                  href="https://github.com/Code-harness"
                  target="_blank"
                  className="p-3 text-slate-400 hover:text-white transition-all hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/code-harnessor-85bb8238b/"
                  target="_blank"
                  className="p-3 text-slate-400 hover:text-white transition-all hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              variants={fadeInUp}
              className="pt-10 border-t border-slate-800/50"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-8">
                System Stack
              </p>
              <div className="flex flex-wrap gap-8">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center gap-3"
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${tech.icon}/ffffff`}
                      className="w-7 h-7 filter opacity-40 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-all duration-300"
                      alt={tech.name}
                    />
                    <span className="text-[9px] font-black text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Interactive Terminal */}
          <motion.div
            variants={fadeInUp}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="lg:col-span-5 order-1 lg:order-2 w-full relative perspective-1000"
          >
            <div className="relative rounded-[2.5rem] border border-slate-800 bg-slate-900/40 p-1 backdrop-blur-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-6 py-5 border-b border-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/40 border border-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/40 border border-amber-500/20" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/40 border border-emerald-500/20" />
                </div>
                <span className="ml-4 text-[11px] text-slate-500 font-mono uppercase tracking-[0.2em] font-bold">
                  Session: Manzi_Kevin.ts
                </span>
              </div>
              <div className="p-8 text-[14px] font-mono leading-loose overflow-x-auto">
                <p className="text-purple-400 font-bold">
                  const{" "}
                  <span className="text-blue-400 font-normal">developer</span> =
                  &#123;
                </p>
                <p className="pl-6 text-slate-300">
                  name:{" "}
                  <span className="text-emerald-400">'Manzi I Kevin'</span>,
                </p>
                <p className="pl-6 text-slate-300">
                  focus:{" "}
                  <span className="text-emerald-400">'Scalable Systems'</span>,
                </p>
                <p className="pl-6 text-slate-300">
                  experience: <span className="text-amber-400">3+ Years</span>,
                </p>
                <p className="pl-6 text-slate-300">
                  status:{" "}
                  <span className="text-emerald-400">'Open to Build'</span>
                </p>
                <p className="text-purple-400 font-bold">&#125;;</p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="animate-pulse text-blue-500 font-bold">
                    {">"}
                  </span>
                  <span className="text-slate-500 italic">
                    Ready for deployment...
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Stats Badge */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -right-2 sm:-left-8 sm:right-auto bg-blue-600 text-white p-5 rounded-[2rem] shadow-2xl shadow-blue-500/40 flex items-center gap-5 z-20 group cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <Terminal size={24} />
              </div>
              <div>
                <div className="text-3xl font-black">4k+</div>
                <div className="text-[10px] uppercase tracking-widest font-black opacity-80 leading-none">
                  Commits / Year
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
