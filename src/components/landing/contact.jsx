import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const socials = useMemo(
    () => [
      {
        icon: <Github size={16} />,
        href: "https://github.com/Code-harness",
        label: "GitHub",
      },
      {
        icon: <Linkedin size={16} />,
        href: "https://www.linkedin.com/in/code-harnessor-85bb8238b/",
        label: "LinkedIn",
      },
    ],
    [],
  );

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#09090b] px-4 md:px-6 overflow-hidden selection:bg-cyan-500/20 selection:text-cyan-400"
    >
      {/* Blueprint Grid Lines to maintain architectural consistency */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293706_1px,transparent_1px),linear-gradient(to_bottom,#1f293706_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE: SYSTEM CHANNEL OVERVIEW */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tactical Status Pill */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-zinc-900 bg-zinc-950 font-mono text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
              </span>
              // channel_status: open_to_secure_projects
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-[1.15]">
              Let’s Architect the <br />
              <span className="text-cyan-400">Next High-Scale Engine.</span>
            </h2>

            <p className="text-zinc-400 text-xs sm:text-[13px] mb-10 max-w-md leading-relaxed font-sans">
              Have a complex distributed system infrastructure blueprint in
              mind, or looking to run optimizations on high-traffic codebases?
              Drop a line into the transmission channel.
            </p>

            <div className="space-y-4 font-mono">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded border border-zinc-900 bg-zinc-950/80 flex items-center justify-center text-cyan-400 group-hover:border-zinc-800 transition-colors">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest leading-none mb-1">
                    [ SECURE_MAIL ]
                  </p>
                  <a
                    href="mailto:hello@manzi.dev"
                    className="text-xs font-bold text-zinc-200 hover:text-cyan-400 transition-colors"
                  >
                    hello@manzi.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded border border-zinc-900 bg-zinc-950/80 flex items-center justify-center text-cyan-400 group-hover:border-zinc-800 transition-colors">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest leading-none mb-1">
                    [ ENDPOINT_LOC ]
                  </p>
                  <p className="text-xs font-bold text-zinc-200">
                    Kigali, Rwanda • Remote
                  </p>
                </div>
              </div>
            </div>

            {/* Micro Structural Social Anchors */}
            <div className="flex gap-2 mt-10 font-mono">
              {socials.map((platform, i) => (
                <a
                  key={i}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform.label}
                  className="w-9 h-9 rounded border border-zinc-900 bg-zinc-950 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-zinc-800 transition-colors"
                >
                  {platform.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: CORE TERMINAL DATA PORTAL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="bg-zinc-950/40 border border-zinc-900 p-6 md:p-8 rounded"
          >
            <form
              className="space-y-5 font-mono text-xs"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider ml-0.5">
                    // source_identity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Operator"
                    className="w-full bg-zinc-950 border border-zinc-900 rounded px-4 py-3 text-zinc-200 font-sans focus:outline-none focus:border-cyan-500/40 transition-colors placeholder:text-zinc-700 text-[13px]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider ml-0.5">
                    // routing_address
                  </label>
                  <input
                    type="email"
                    placeholder="operator@network.com"
                    className="w-full bg-zinc-950 border border-zinc-900 rounded px-4 py-3 text-zinc-200 font-sans focus:outline-none focus:border-cyan-500/40 transition-colors placeholder:text-zinc-700 text-[13px]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider ml-0.5">
                  // subject_classification
                </label>
                <div className="relative">
                  <select className="w-full bg-zinc-950 border border-zinc-900 rounded px-4 py-3 text-zinc-300 focus:outline-none focus:border-cyan-500/40 transition-colors appearance-none cursor-pointer text-[13px]">
                    <option className="bg-zinc-950">
                      System Architecture Project
                    </option>
                    <option className="bg-zinc-950">
                      Performance Consulting / Audit
                    </option>
                    <option className="bg-zinc-950">
                      General Verification / Hello
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500 text-[10px]">
                    ▼
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider ml-0.5">
                  // transmission_payload
                </label>
                <textarea
                  rows="4"
                  placeholder="Input project scope parameters..."
                  className="w-full bg-zinc-950 border border-zinc-900 rounded px-4 py-3 text-zinc-200 font-sans focus:outline-none focus:border-cyan-500/40 transition-colors placeholder:text-zinc-700 text-[13px] resize-none leading-relaxed"
                ></textarea>
              </div>

              <button className="w-full group bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3.5 rounded transition-all flex items-center justify-center gap-2 tracking-widest uppercase text-[11px] active:scale-[0.98]">
                TRANSMIT_PAYLOAD.SH
                <Send
                  size={12}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
