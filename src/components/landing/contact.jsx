import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Send,
  MapPin,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 bg-[#030712] px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Text & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open for new opportunities
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
              Let’s build the <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Next Big Thing.
              </span>
            </h2>

            <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
              Have a specific project in mind or just want to say hi? I'm always
              down for a chat about high-performance web systems.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:border-blue-500/50 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                    Email Me
                  </p>
                  <a
                    href="mailto:hello@goodman.dev"
                    className="text-white font-medium hover:text-blue-400 transition-colors"
                  >
                    hello@goodman.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:border-indigo-500/50 transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                    Location
                  </p>
                  <p className="text-white font-medium">
                    Kigali, Rwanda • Remote
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[<Github />, <Linkedin />, <Twitter />].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all"
                >
                  {React.cloneElement(icon, { size: 18 })}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Modern Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-900/40 border border-slate-800 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-slate-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                  Subject
                </label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none cursor-pointer">
                  <option>Full-stack Project</option>
                  <option>Consulting</option>
                  <option>Saying Hi</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-slate-700 resize-none"
                ></textarea>
              </div>

              <button className="w-full group bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95">
                Send Message
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
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
