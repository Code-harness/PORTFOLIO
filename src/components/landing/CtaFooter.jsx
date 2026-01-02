import React from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const CtaFooter = () => {
  return (
    <footer className="bg-[#030712] pt-24 pb-12 px-6 border-t border-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Let’s build something <br />
          <span className="text-blue-500">exceptional.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10">
          Currently open to new projects and full-stack opportunities.
        </p>
        <a
          href="mailto:hello@goodman.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20"
        >
          <Mail size={20} /> Get In Touch
        </a>

        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2024 GoodMan. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CtaFooter;
