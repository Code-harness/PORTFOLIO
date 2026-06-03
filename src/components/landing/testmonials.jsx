import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Terminal, Cpu } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CTO @ TechFlow",
    content:
      "Manzi's ability to bridge the gap between complex backend logic and pixel-perfect frontend is rare. A truly full-stack engineer.",
    image: "https://i.pravatar.cc/150?u=alex",
    integrityScore: "5/5",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    content:
      "Exceptional speed without sacrificing code quality. The system architecture he designed for our SaaS scales effortlessly.",
    image: "https://i.pravatar.cc/150?u=sarah",
    integrityScore: "5/5",
  },
  {
    name: "James Wilson",
    role: "Founder, AlphaStream",
    content:
      "He didn't just write code; he helped us define our product roadmap. A strategic thinker who happens to be a great dev.",
    image: "https://i.pravatar.cc/150?u=james",
    integrityScore: "5/5",
  },
];

const TestimonialCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.05,
      }}
      className="break-inside-avoid mb-5 relative bg-zinc-950/40 border border-zinc-900 p-6 md:p-8 rounded backdrop-blur-md flex flex-col justify-between transition-all hover:border-zinc-800 group"
    >
      {/* Upper-Right System Blueprint Marker */}
      <div className="absolute top-4 right-4 text-zinc-800 font-mono text-[9px] select-none tracking-widest hidden sm:block">
        [ NODE_#{index + 1}0 ]
      </div>

      <div>
        {/* Core Technical Parameter Identity */}
        <div className="flex items-center gap-3.5 mb-5 font-mono">
          <div className="relative flex-shrink-0 w-10 h-10 bg-zinc-900 border border-zinc-800 rounded overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-90"
              loading="lazy"
            />
          </div>
          <div className="min-w-0 flex-grow">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider truncate flex items-center gap-1.5">
              {item.name}
              <ShieldCheck size={12} className="text-cyan-400 flex-shrink-0" />
            </h4>
            <p className="text-[10px] text-zinc-500 font-medium truncate mt-0.5">
              {item.role}
            </p>
          </div>
        </div>

        {/* System Diagnostic Evaluation Stream */}
        <div className="mb-4 flex items-center gap-2 font-mono text-[9px] text-zinc-600 tracking-wider">
          <span className="text-cyan-500/80">
            <Terminal size={10} />
          </span>
          <span>INTEGRITY_INDEX: [ {item.integrityScore} ]</span>
          <span className="text-zinc-800">// STATUS_OK</span>
        </div>

        {/* Verified Transmission Narrative */}
        <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed font-sans relative z-10 pl-3 border-l border-zinc-800 group-hover:border-cyan-500/30 transition-colors">
          "{item.content}"
        </p>
      </div>

      {/* Frame Bottom Hardware Stamp */}
      <div className="mt-6 pt-3 border-t border-zinc-900/60 flex items-center justify-between font-mono text-[8px] text-zinc-600 tracking-widest uppercase">
        <span>SRC_TYPE: SIGNED_VERIFICATION</span>
        <span className="flex items-center gap-1">
          <Cpu size={8} /> ENC_RSA_256
        </span>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-[#09090b] text-zinc-100 px-4 md:px-6 overflow-hidden selection:bg-cyan-500/20 selection:text-cyan-400"
    >
      {/* Precision Micro-Grid System Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293706_1px,transparent_1px),linear-gradient(to_bottom,#1f293706_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      {/* Top Delineation Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-zinc-900" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* RUNTIME REGISTRY HEADER */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-mono font-medium text-[10px] md:text-xs tracking-[0.25em] uppercase mb-3 block"
          >
            // system_telemetry / peer_review
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            Validated Architecture Endorsements.
          </motion.h2>
        </div>

        {/* HIGH-DENSITY INTERFACE MASONRY ARRAYS */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
