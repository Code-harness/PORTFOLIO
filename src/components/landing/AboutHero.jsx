import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Target, Terminal, Award, Layers, CheckCircle2 } from "lucide-react";

const AboutHero = () => {
  const stats = useMemo(
    () => [
      {
        label: "Systems Architecture",
        value: "3+ Yrs",
        icon: <Award className="text-cyan-400" size={16} />,
      },
      {
        label: "Completed Engines",
        value: "40+",
        icon: <Target className="text-cyan-400" size={16} />,
      },
      {
        label: "Production Clusters",
        value: "12+",
        icon: <Layers className="text-cyan-400" size={16} />,
      },
      {
        label: "System Commits",
        value: "4K+",
        icon: <Terminal className="text-cyan-400" size={16} />,
      },
    ],
    [],
  );

  return (
    <section className="relative py-24 md:py-32 bg-[#09090b] text-zinc-100 px-6 overflow-hidden selection:bg-cyan-500/20 selection:text-cyan-400">
      {/* Blueprint Grid Infrastructure Alignment */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293706_1px,transparent_1px),linear-gradient(to_bottom,#1f293706_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE: SPECIFICATION METRICS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-mono text-[11px] uppercase tracking-[0.25em]">
                // sys.profile_evaluation
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-[1.15] text-white">
              Translating Complex Logic Into{" "}
              <span className="text-cyan-400">
                High-Performance Infrastructure.
              </span>
            </h2>

            <div className="space-y-6 text-zinc-400 text-xs sm:text-[13px] leading-relaxed max-w-2xl font-sans">
              <p>
                I blueprint and assemble robust digital ecosystems. My core
                discipline shifts fluidly between rigorous algorithmic logic,
                frontend interface compilation, and automated orchestration
                layers optimized for high-volume execution speeds.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 pt-4 font-mono">
                {[
                  "Application & Web Architecture",
                  "Cloud Infrastructure Deployment",
                  "Performance Tuning & Optimization",
                  "Distributed Microservice Layouts",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-5 h-5 rounded border border-zinc-900 bg-zinc-950/80 flex items-center justify-center transition-colors group-hover:border-cyan-500/30">
                      <CheckCircle2 size={11} className="text-cyan-400" />
                    </div>
                    <span className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase group-hover:text-zinc-200 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: INDUSTRIAL BENTO METRIC GRID */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4 relative">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className={`p-5 md:p-6 rounded border border-zinc-900 bg-zinc-950/40 backdrop-blur-md flex flex-col justify-between min-h-[160px]
                    ${index === 1 || index === 3 ? "translate-y-4 sm:translate-y-6" : ""} 
                    hover:border-zinc-800 hover:bg-zinc-950/80 transition-all`}
                >
                  {/* Structural Instrumentation Box */}
                  <div className="w-9 h-9 rounded border border-zinc-900 bg-zinc-950 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[9px] text-zinc-500 font-mono font-bold uppercase tracking-[0.15em] leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Micro Industrial Notch Badge */}
            <div className="absolute -top-6 -right-2 px-2.5 py-1 rounded border border-zinc-900 bg-zinc-950 font-mono text-[9px] text-zinc-600 tracking-widest hidden md:block select-none">
              [ SEC.IO_VERIFIED ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
