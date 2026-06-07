import React, { useMemo, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Terminal } from "lucide-react";

// IMPORT IMAGE DIRECTLY
import meImage from "../../assets/imgs/me.png";

/**
 * FUTURISTIC TACTICAL INTERFACE BACKGROUND
 */
const FloatingParticles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }).map(() => ({
        type: Math.random() > 0.5 ? "cross" : "square",
        size: Math.random() * 12 + 6,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 20 + 20,
        xRange: Math.random() * 100 - 50,
        yRange: Math.random() * 100 - 50,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 select-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-cyan-500/10 text-xs flex items-center justify-center"
          style={{
            left: p.left,
            top: p.top,
          }}
          animate={{
            x: [0, p.xRange, 0],
            y: [0, p.yRange, 0],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.25, 0.05],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {p.type === "cross" ? "+" : "■"}
        </motion.div>
      ))}
    </div>
  );
};

/**
 * REAL-TIME LINUX SHELL TYPING EMULATOR
 */
const LinuxTerminal = () => {
  const [lines, setLines] = useState([]);
  const [currentCmd, setCurrentCmd] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const sequence = useMemo(
    () => [
      {
        type: "input",
        prompt: "kevin@infra-node:~$ ",
        cmd: "sysctl query --engine-profile",
      },
      {
        type: "log",
        text: ":: Initializing connection to cloud cluster mesh...",
      },
      {
        type: "log",
        text: ":: Syncing production environment configurations...",
      },
      { type: "header", text: "✓ INJECTED CAPABILITIES MATRIX" },
      {
        type: "value",
        label: "applications",
        val: '"Full-Stack Webs & High-Performance Native Apps"',
      },
      {
        type: "value",
        label: "infrastructure",
        val: '"Automated Cloud Architecture & Continuous Deployments"',
      },
      {
        type: "value",
        label: "ecosystems",
        val: '"Scalable Distributed Microservices & Systems Layering"',
      },
      {
        type: "success",
        text: "✓ Cluster execution successful. Core engine status: operational.",
      },
    ],
    [],
  );

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let timeoutId;

    const runSequence = () => {
      if (lineIdx >= sequence.length) {
        setIsComplete(true);
        return;
      }

      const current = sequence[lineIdx];

      if (current.type === "input") {
        if (charIdx < current.cmd.length) {
          setCurrentCmd(current.cmd.substring(0, charIdx + 1));
          charIdx++;
          timeoutId = setTimeout(runSequence, 40 + Math.random() * 30); // Dynamic typing human variance
        } else {
          setLines((prev) => [
            ...prev,
            { ...current, text: current.prompt + current.cmd },
          ]);
          setCurrentCmd("");
          charIdx = 0;
          lineIdx++;
          timeoutId = setTimeout(runSequence, 500); // Wait after typing command
        }
      } else {
        // Render system log processes sequentially
        setLines((prev) => [...prev, current]);
        lineIdx++;
        timeoutId = setTimeout(runSequence, 200);
      }
    };

    timeoutId = setTimeout(runSequence, 800); // Initial delay before terminal starts
    return () => clearTimeout(timeoutId);
  }, [sequence]);

  return (
    <div className="p-5 sm:p-6 font-mono text-[12px] sm:text-[13px] leading-relaxed text-zinc-400 min-h-[260px] overflow-x-auto select-none selection:bg-cyan-500/20">
      {lines.map((line, idx) => {
        if (line.type === "input") {
          return (
            <div key={idx} className="text-zinc-100">
              <span className="text-cyan-400 font-bold">{line.prompt}</span>
              {line.cmd}
            </div>
          );
        }
        if (line.type === "log") {
          return (
            <div
              key={idx}
              className="text-zinc-500 italic text-[11px] sm:text-xs"
            >
              {line.text}
            </div>
          );
        }
        if (line.type === "header") {
          return (
            <div
              key={idx}
              className="text-cyan-400 font-bold tracking-wider mt-2 mb-0.5"
            >
              {line.text}
            </div>
          );
        }
        if (line.type === "value") {
          return (
            <div key={idx} className="pl-4 text-zinc-400">
              <span className="text-zinc-300 font-medium">{line.label}</span>:{" "}
              <span className="text-emerald-400">{line.val}</span>
            </div>
          );
        }
        if (line.type === "success") {
          return (
            <div
              key={idx}
              className="text-emerald-500/80 mt-2 border-t border-zinc-900/60 pt-2"
            >
              {line.text}
            </div>
          );
        }
        return null;
      })}

      {/* Character construction stream frame */}
      {!isComplete && sequence[lines.length]?.type === "input" && (
        <div className="text-zinc-100">
          <span className="text-cyan-400 font-bold">
            {sequence[lines.length].prompt}
          </span>
          {currentCmd}
          <span className="w-1.5 h-3.5 bg-zinc-200 inline-block animate-pulse ml-0.5 align-middle" />
        </div>
      )}

      {/* System processing buffer indicator */}
      {!isComplete &&
        sequence[lines.length]?.type !== "input" &&
        lines.length < sequence.length && (
          <div className="mt-1">
            <span className="w-1.5 h-3.5 bg-zinc-600 inline-block animate-pulse align-middle" />
          </div>
        )}

      {/* Execution finished interactive cursor hook */}
      {isComplete && (
        <div className="text-zinc-100 mt-1">
          <span className="text-cyan-400 font-bold">kevin@infra-node:~$ </span>
          <span className="w-1.5 h-3.5 bg-cyan-400 inline-block animate-pulse ml-0.5 align-middle" />
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  // --- 3D TILT LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const techStack = [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextdotjs" },
    { name: "Python", icon: "python" },
    { name: "Django", icon: "Django" },
    { name: "MongoDB", icon: "MongoDB" },
    { name: "Express", icon: "Express" },
    { name: "Laravel", icon: "laravel" },
    { name: "TypeScript", icon: "typescript" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Tailwind", icon: "tailwindcss" },
    { name: "MySQL", icon: "mysql" },
    { name: "Flutter", icon: "flutter" },
    { name: "NodeJS", icon: "nodedotjs" },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center bg-[#09090b] text-zinc-100 px-4 sm:px-6 py-24 lg:py-0 overflow-hidden font-sans selection:bg-cyan-500/20 selection:text-cyan-400"
    >
      {/* PERSONAL BACKGROUND IMAGE LAYER */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.12] grayscale pointer-events-none"
        style={{
          backgroundImage: `url(${meImage})`,
          maskImage:
            "radial-gradient(circle at center, black 25%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 25%, transparent 75%)",
        }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <FloatingParticles />

      {/* Futuristic Vector Blueprint Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 pointer-events-none mix-blend-overlay z-10" />

      {/* MAIN CONTENT CONTAINER */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-7xl w-full"
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Minimalist Diagnostic Chip */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 font-mono text-[11px] uppercase tracking-widest mb-8"
            >
              <span className="w-1 h-1 bg-cyan-400 animate-pulse" />
              <span>sys.status // active_build</span>
            </motion.div>

            {/* STARK HEADLINE */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white"
            >
              Engineering <br />
              <span className="text-cyan-400">Digital Excellence</span>
            </motion.h1>

            {/* BIO LAYOUT - Updated role terminology focusing on capabilities */}
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base text-zinc-400 mb-10 max-w-xl leading-relaxed tracking-normal"
            >
              I’m{" "}
              <span className="text-white font-medium font-mono text-[14px] sm:text-[15px] bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                manzi_irakoze_kevin
              </span>
              , an Engineer specializing in constructing full-stack web
              architectures, production-grade applications, and automated cloud
              infrastructure deployments.
            </motion.p>

            {/* ACTION TRIGGERS */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <button className="group px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black rounded font-mono font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 active:scale-[0.98]">
                Execute View
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>

              <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 p-1 rounded">
                <a
                  href="https://github.com/Code-harness"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 text-zinc-400 hover:text-cyan-400 hover:bg-zinc-800 rounded transition-all"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/code-harnessor-85bb8238b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 text-zinc-400 hover:text-cyan-400 hover:bg-zinc-800 rounded transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>

            {/* TECH MATRIX LAYOUT */}
            <motion.div
              variants={fadeInUp}
              className="pt-8 border-t border-zinc-800/80"
            >
              <p className="text-[10px] font-bold font-mono uppercase tracking-[0.25em] text-zinc-500 mb-5">
                // core_dependencies
              </p>
              <div className="flex flex-wrap gap-5 sm:gap-6">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center gap-2"
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${tech.icon}/ffffff`}
                      className="w-5 h-5 opacity-25 group-hover:opacity-100 group-hover:invert-[20%] group-hover:sepia-[100%] group-hover:saturate-[1000%] group-hover:hue-rotate-[130deg] transition-all duration-200"
                      alt={`${tech.name} icon`}
                      loading="lazy"
                    />
                    <span className="text-[8px] font-mono text-zinc-600 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all tracking-wider">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT: SOLID MODERN TACTICAL TERMINAL */}
          <motion.div
            variants={fadeInUp}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="lg:col-span-5 order-1 lg:order-2 w-full relative perspective-[1200px]"
          >
            <div className="relative rounded border border-zinc-800 bg-zinc-950 p-1 shadow-2xl overflow-hidden">
              {/* Technical Industrial Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-cyan-500 font-mono uppercase tracking-[0.15em] font-bold">
                    [ IO.SYS ]
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono lowercase">
                    bash_profile.sh
                  </span>
                </div>
                <div className="text-[9px] font-mono text-zinc-600 tracking-tighter">
                  // Linux x86_64
                </div>
              </div>

              {/* Terminal Body with Custom Typist Loop */}
              <LinuxTerminal />
            </div>

            {/* Industrial Minimalist Stats Badge */}
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-5 right-4 sm:-left-6 sm:right-auto bg-zinc-950 border border-zinc-800 text-white p-4 rounded shadow-2xl flex items-center gap-3.5 z-20 pointer-events-none"
            >
              <div className="w-9 h-9 bg-zinc-900 flex items-center justify-center border border-zinc-800">
                <Terminal size={16} className="text-cyan-400" />
              </div>
              <div>
                <div className="text-lg font-bold font-mono tracking-tight leading-none text-white">
                  4K+
                </div>
                <div className="text-[8px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-bold mt-1">
                  SYS_COMMITS
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
