import React from "react";
import { motion } from "framer-motion";
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
      "Architecting high-performance, SEO-friendly interfaces using Next.js and React. Focused on Core Web Vitals and fluid UX.",
    icon: <Layout className="text-blue-400" size={24} />,
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Backend Architecture",
    description:
      "Building robust API ecosystems and microservices with Laravel and Node.js. Optimized for scale, security, and speed.",
    icon: <Server className="text-indigo-400" size={24} />,
    tags: ["Laravel", "PostgreSQL", "Redis"],
  },
  {
    title: "Mobile Solutions",
    description:
      "Developing cross-platform mobile applications that feel native, ensuring a seamless experience across iOS and Android.",
    icon: <Smartphone className="text-cyan-400" size={24} />,
    tags: ["React Native", "Expo"],
  },
  {
    title: "System Performance",
    description:
      "Audit and optimization of existing codebases to reduce latency, improve load times, and minimize server costs.",
    icon: <Zap className="text-amber-400" size={24} />,
    tags: ["Optimization", "Caching", "CDN"],
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Deploying and managing scalable cloud environments with AWS and Docker. Zero-downtime CI/CD pipelines.",
    icon: <Layers className="text-purple-400" size={24} />,
    tags: ["AWS", "Docker", "CI/CD"],
  },
  {
    title: "Security & Testing",
    description:
      "Implementing rigorous security protocols and automated testing suites (Cypress/Jest) to ensure software reliability.",
    icon: <ShieldCheck className="text-emerald-400" size={24} />,
    tags: ["TDD", "OWASP", "Cypress"],
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-300"
    >
      {/* Hover Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

      <div className="relative z-10">
        <div className="mb-6 inline-flex p-3 rounded-lg bg-slate-800/80 border border-slate-700 group-hover:scale-110 group-hover:border-blue-500/30 transition-transform">
          {service.icon}
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors flex items-center gap-2">
          {service.title}
          <ArrowUpRight
            size={16}
            className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
          />
        </h3>

        <p className="text-slate-400 leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-slate-800 text-slate-500"
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
    <section className="relative py-24 bg-[#030712] px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-4"
            >
              Expertise
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Solving Complex Problems with{" "}
              <span className="text-slate-500">Modern Solutions.</span>
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-xs text-lg border-l border-slate-800 pl-6"
          >
            Delivering end-to-end digital transformation through clean code.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
