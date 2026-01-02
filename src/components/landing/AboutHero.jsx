import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Target,
  Coffee,
  Globe2,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const AboutHero = () => {
  const stats = [
    {
      label: "Years Experience",
      value: "5+",
      icon: <Award className="text-blue-400" />,
      color: "blue",
    },
    {
      label: "Projects Done",
      value: "40+",
      icon: <Target className="text-emerald-400" />,
      color: "emerald",
    },
    {
      label: "Global Clients",
      value: "12+",
      icon: <Globe2 className="text-purple-400" />,
      color: "purple",
    },
    {
      label: "Cups of Coffee",
      value: "∞",
      icon: <Coffee className="text-amber-400" />,
      color: "amber",
    },
  ];

  return (
    <section className="relative py-32 bg-[#030712] text-white px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Side: Content (7 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="h-[1px] w-12 bg-blue-500/50" />
              <span className="text-blue-400 font-mono text-xs uppercase tracking-[0.3em]">
                The Architect
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter leading-[1.1]">
              Crafting logic into <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Legacy.
              </span>
            </h2>

            <div className="space-y-8 text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              <p>
                I don't just build websites; I engineer scalable ecosystems. My
                focus lies in the harmony between{" "}
                <span className="text-blue-400">system performance</span> and
                <span className="text-indigo-400"> visual precision</span>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                {[
                  "Full-stack Mastery",
                  "Performance First",
                  "Scalable Architecture",
                  "User-Centric Logic",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                      <CheckCircle2 size={14} className="text-blue-400" />
                    </div>
                    <span className="text-sm font-semibold text-slate-300 tracking-wide uppercase">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Modern Stats Bento (5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4 relative">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`p-6 md:p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl flex flex-col justify-between min-h-[180px]
                    ${index === 1 || index === 3 ? "translate-y-8" : ""} 
                    hover:border-blue-500/30 hover:bg-slate-800/40 transition-all shadow-2xl shadow-black/50`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center border border-slate-800 shadow-inner">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Decorative Icon */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-4 p-4 rounded-2xl bg-blue-600/20 border border-blue-500/20 backdrop-blur-md hidden md:block"
            >
              <Sparkles className="text-blue-400" size={24} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
