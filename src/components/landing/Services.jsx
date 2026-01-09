import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Layout,
  Server,
  Smartphone,
  Zap,
  ShieldCheck,
  Layers,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Frontend Excellence",
    description:
      "Architecting high-performance, SEO-friendly interfaces using Next.js and React. Focused on Core Web Vitals.",
    icon: <Layout className="text-blue-400" size={24} />,
    tags: ["React", "Next.js", "Tailwind"],
    color: "from-blue-500/20",
  },
  {
    title: "Backend Architecture",
    description:
      "Building robust API ecosystems and microservices with Laravel and Node.js. Optimized for scale and speed.",
    icon: <Server className="text-indigo-400" size={24} />,
    tags: ["Laravel", "PostgreSQL", "Redis","Mongo DB",'Express',"Python"],
    color: "from-indigo-500/20",
  },
  {
    title: "Mobile Solutions",
    description:
      "Developing cross-platform mobile applications that feel native, ensuring a seamless experience.",
    icon: <Smartphone className="text-cyan-400" size={24} />,
    tags: ["React Native", "Expo","Flutter"],
    color: "from-cyan-500/20",
  },
  {
    title: "System Performance",
    description:
      "Audit and optimization of existing codebases to reduce latency and minimize server costs.",
    icon: <Zap className="text-amber-400" size={24} />,
    tags: ["Optimization", "Caching"],
    color: "from-amber-500/20",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Deploying and managing scalable environments with AWS and Docker. Zero-downtime pipelines.",
    icon: <Layers className="text-purple-400" size={24} />,
    tags: ["AWS", "Docker", "CI/CD","Cloudflare","Render"],
    color: "from-purple-500/20",
  },
  {
    title: "Security & Testing",
    description:
      "Implementing rigorous security protocols and automated testing suites to ensure software reliability.",
    icon: <ShieldCheck className="text-emerald-400" size={24} />,
    tags: ["TDD", "OWASP", "Cypress"],
    color: "from-emerald-500/20",
  },
];

const ServiceCard = ({ service, index }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-blue-500/30"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 flex items-center justify-between">
          <div
            className={`p-3 rounded-2xl bg-gradient-to-br ${service.color} to-transparent border border-blue-500/10`}
          >
            {service.icon}
          </div>
          <ArrowUpRight
            className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
            size={20}
          />
        </div>

        <h3 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight">
          {service.title}
        </h3>

        {/* Added break-words to handle long strings and prevent overflow */}
        <p className="text-slate-400 leading-relaxed mb-8 flex-grow text-sm md:text-base break-words">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] md:text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full border border-slate-800 bg-slate-900 text-slate-400 group-hover:border-blue-500/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-[#030712] text-white px-4 md:px-6 overflow-hidden"
    >
      {/* Background Mesh Orbs - Scaled for mobile */}
      <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-indigo-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-black text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]"
          >
            Pushing the boundaries of <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              what's possible.
            </span>
          </motion.h2>
        </div>

        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
