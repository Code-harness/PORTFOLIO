import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Target,
  Coffee,
  Globe2,
  Award,
  CheckCircle2,
} from "lucide-react";

const AboutHero = () => {
  const stats = [
    {
      label: "Years Experience",
      value: "5+",
      icon: <Award className="text-blue-400" size={20} />,
    },
    {
      label: "Projects Completed",
      value: "40+",
      icon: <Target className="text-emerald-400" size={20} />,
    },
    {
      label: "Cups of Coffee",
      value: "∞",
      icon: <Coffee className="text-amber-400" size={20} />,
    },
    {
      label: "Global Clients",
      value: "12+",
      icon: <Globe2 className="text-purple-400" size={20} />,
    },
  ];

  return (
    <section className="relative py-24 bg-[#030712] text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 mb-6">
              <User size={14} />
              <span>Get to know me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              I’m <span className="text-blue-500">Manzi Irakoze Kevin</span>,{" "}
              <br />
              <span className="text-slate-400">
                Digital Architect & Developer.
              </span>
            </h2>

            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Based at the intersection of design and logic, I specialize in
                building robust applications that don't just work—they perform.
                With a deep background in{" "}
                <span className="text-white font-medium">
                  Full-stack Engineering
                </span>
                , I bridge the gap between complex backend systems and intuitive
                user interfaces.
              </p>
              <p>
                My philosophy is simple:{" "}
                <span className="italic text-slate-300">
                  "Code is for humans to read, and only incidentally for
                  machines to execute."
                </span>
                I strive for clean architecture, maintainable patterns, and
                scalable solutions using the Laravel and React ecosystems.
              </p>
            </div>

            {/* Core Values / Bullet Points */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "User-Centric Design",
                "Clean & Scalable Code",
                "Continuous Learning",
                "Agile Methodology",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <CheckCircle2 size={18} className="text-blue-500" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual Stats Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-8 rounded-3xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm 
                ${index === 1 ? "mt-8" : ""} ${
                  index === 2 ? "-mt-8" : ""
                } transition-all hover:border-slate-600`}
              >
                <div className="mb-4 p-3 w-fit rounded-xl bg-slate-800/50">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}

            {/* Background Glow for the Grid */}
            <div className="absolute inset-0 bg-blue-500/5 blur-[100px] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
