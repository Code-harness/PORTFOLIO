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
      href: "#",
      color: "hover:text-slate-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "#",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      href: "#",
      color: "hover:text-sky-500 dark:hover:text-sky-400",
    },
  ];

  return (
    <footer className="relative bg-slate-50 dark:bg-[#030712] pt-32 pb-12 px-6 transition-colors duration-500">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Main CTA Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.85]">
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-cyan-400">
                Level Up?
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Currently accepting new projects and full-stack opportunities.
              Let's turn your vision into a production-ready reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glowing Backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500" />

            <div className="relative bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-10 md:p-16 rounded-[2.5rem] backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-500/40 rotate-3 group-hover:rotate-6 transition-transform">
                  <Mail className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Start a Conversation
                </h3>
                <a
                  href="mailto:hello@goodman.com"
                  className="group/btn relative inline-flex items-center gap-3 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-black font-black rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-950/20 dark:shadow-white/10"
                >
                  hello@goodman.com
                  <ArrowRight
                    size={20}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Big Footer Brand Name (Marquee Style) */}
        <div className="overflow-hidden py-10 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.05] border-y border-slate-200 dark:border-slate-800">
          <h2 className="text-[9vw] font-black uppercase whitespace-nowrap leading-none text-slate-900 dark:text-white">
            Manzi I Kevin &bull; Software Engineer &bull; Full Stack &bull;
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-slate-900 dark:text-white font-bold tracking-widest uppercase text-xs">
              Manzi I Kevin
            </p>
            <p className="text-slate-500 text-sm font-medium">
              &copy; {currentYear} &mdash; Built with Passion.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={`p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex gap-8">
            <a
              href="#"
              className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              CV <ExternalLink size={12} />
            </a>
            <a
              href="#"
              className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors"
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
