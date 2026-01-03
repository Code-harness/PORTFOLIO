import React from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle2, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CTO @ TechFlow",
    content:
      "Manzi's ability to bridge the gap between complex backend logic and pixel-perfect frontend is rare. A truly full-stack engineer.",
    image: "https://i.pravatar.cc/150?u=alex",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    content:
      "Exceptional speed without sacrificing code quality. The system architecture he designed for our SaaS scales effortlessly.",
    image: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Founder, AlphaStream",
    content:
      "He didn't just write code; he helped us define our product roadmap. A strategic thinker who happens to be a great dev.",
    image: "https://i.pravatar.cc/150?u=james",
    rating: 5,
  },
];

const TestimonialCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative break-inside-avoid mb-6 group p-6 md:p-8 rounded-[2rem] border border-slate-800 bg-slate-900/40 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5"
    >
      <div className="absolute top-6 right-8 text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
        <Quote size={40} strokeWidth={3} />
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 rounded-full border-2 border-slate-800 shadow-md object-cover"
          />
          <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full p-0.5 border-2 border-slate-900">
            <CheckCircle2 size={12} />
          </div>
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-white leading-none mb-1 truncate">
            {item.name}
          </h4>
          <p className="text-xs text-slate-400 font-medium truncate">
            {item.role}
          </p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(item.rating)].map((_, i) => (
          <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      <p className="text-slate-300 leading-relaxed italic text-sm md:text-base">
        "{item.content}"
      </p>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-[#030712] px-4 md:px-6 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-black text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 block"
          >
            Social Proof
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-tight"
          >
            Trusted by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Industry Leaders.
            </span>
          </motion.h2>
        </div>

        {/* Masonry Columns with Responsive Gap */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Faded bottom effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-64 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
};

export default Testimonials;
