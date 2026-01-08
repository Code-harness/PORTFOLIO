import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const CtaFooter = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Github",
      icon: <Github size={20} />,
      href: "https://github.com/Code-harness",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/code-harnessor-85bb8238b/",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      href: "#",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <footer className="relative bg-[#030712] pt-24 md:pt-32 pb-12 px-4 md:px-6 overflow-hidden">
      {/* Background Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Main CTA Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            {/* Clamped text to prevent overflow on small screens */}
            <h2 className="text-[14vw] sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]">
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Level Up?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-md leading-relaxed">
              Currently accepting new projects and full-stack opportunities.
              Let's turn your vision into a production-ready reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group w-full"
          >
            {/* Glowing Backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500" />

            <div className="relative bg-slate-900/50 border border-slate-800 p-8 md:p-16 rounded-[2.5rem] backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-xl shadow-blue-500/40 rotate-3 group-hover:rotate-6 transition-transform">
                  <Mail className="text-white" size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Start a Conversation
                </h3>
                {/* Responsive Button Text sizing */}
                <a
                  href="mailto:hello@manzi.dev"
                  className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 md:px-10 py-4 md:py-5 bg-white text-black text-sm md:text-base font-black rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
                >
                  hello@manzi.dev
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand Marquee - Responsive sizing */}
        <div className="overflow-hidden py-6 md:py-10 pointer-events-none select-none opacity-[0.05] border-y border-slate-800">
          <h2 className="text-[12vw] md:text-[9vw] font-black uppercase whitespace-nowrap leading-none text-white">
            Manzi I Kevin &bull; Software Engineer &bull; Full Stack &bull;
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-white font-bold tracking-widest uppercase text-xs">
              Manzi I Kevin
            </p>
            <p className="text-slate-500 text-sm font-medium">
              &copy; {currentYear} &mdash; Built with Passion.
            </p>
          </div>

          {/* Social Links - Responsive spacing */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex gap-6 md:gap-8">
            <a
              href="#"
              className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              CV <ExternalLink size={12} />
            </a>
            <a
              href="#"
              className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-blue-400 transition-colors"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CtaFooter;
