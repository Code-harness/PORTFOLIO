import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, ExternalLink, Github, Linkedin } from "lucide-react";

const CtaFooter = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = useMemo(
    () => [
      {
        name: "GitHub",
        icon: <Github size={16} />,
        href: "https://github.com/Code-harness",
      },
      {
        name: "LinkedIn",
        icon: <Linkedin size={16} />,
        href: "https://www.linkedin.com/in/code-harnessor-85bb8238b/",
      },
    ],
    [],
  );

  return (
    <footer className="relative bg-[#09090b] pt-24 md:pt-32 pb-12 px-4 md:px-6 overflow-hidden selection:bg-cyan-500/20 selection:text-cyan-400">
      {/* Blueprint Grid Infrastructure Alignment */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293706_1px,transparent_1px),linear-gradient(to_bottom,#1f293706_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      {/* Structural Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-zinc-900" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* MAIN PIPELINE INITIALIZATION SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 md:space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.25em]">
                // runtime_execution
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Ready to Initialize <br />
              <span className="text-cyan-400">Deployment?</span>
            </h2>
            <p className="text-xs sm:text-[13px] text-zinc-400 max-w-md leading-relaxed font-sans">
              Currently accepting secure technical partnerships, application
              scaling operations, and robust architecture pipelines. Let's forge
              your digital engineering blueprint into production reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="w-full"
          >
            <div className="relative bg-zinc-950/40 border border-zinc-900 p-8 md:p-12 rounded backdrop-blur-md">
              <div className="flex flex-col items-center text-center font-mono">
                {/* Structural Tech Icon Notch */}
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center mb-6 text-cyan-400">
                  <Mail size={18} />
                </div>

                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
                  [ START_SECURE_CHANNEL ]
                </h3>

                {/* Tactical Transmission Link Action */}
                <a
                  href="mailto:hello@manzi.dev"
                  className="group/btn w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-widest rounded transition-all active:scale-[0.98]"
                >
                  hello@manzi.dev
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover/btn:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* INDUSTRIAL DIAGNOSTIC MARQUEE */}
        <div className="overflow-hidden py-4 pointer-events-none select-none opacity-5 border-y border-zinc-900 font-mono">
          <h2 className="text-5xl md:text-6xl font-bold uppercase whitespace-nowrap tracking-[0.15em] text-white animate-none">
            MANZI IRAKOZE KEVIN // SOFTWARE ENGINEER // CYBERSECURITY PENTESTER
            // NETWORK ARCHITECT //
          </h2>
        </div>

        {/* UTILITY FOOTER CONTROL PANEL */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[11px]">
          <div className="space-y-1.5 text-center md:text-left">
            <p className="text-white font-bold tracking-wider uppercase">
              MANZI IRAKOZE KEVIN
            </p>
            <p className="text-zinc-500">
              &copy; {currentYear} // STABLE PRODUCTION BUILD. ALL RIGHTS
              RESERVED.
            </p>
          </div>

          {/* Social Array Infrastructure */}
          <div className="flex justify-center items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-9 h-9 rounded border border-zinc-900 bg-zinc-950 flex items-center justify-center text-zinc-500 hover:text-cyan-400 hover:border-zinc-800 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Verification Operations Directory */}
          <div className="flex gap-6 text-zinc-500">
            <a
              href="#"
              className="font-bold uppercase tracking-wider hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              V_DOCS <ExternalLink size={10} />
            </a>
            <a
              href="#"
              className="font-bold uppercase tracking-wider hover:text-cyan-400 transition-colors"
            >
              PRIVACY.LOG
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CtaFooter;
