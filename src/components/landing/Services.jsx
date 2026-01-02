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
    icon: <Layout className="text-blue-600 dark:text-blue-400" size={24} />,
    tags: ["React", "Next.js", "Tailwind"],
    color: "from-blue-500/20",
  },
  {
    title: "Backend Architecture",
    description:
      "Building robust API ecosystems and microservices with Laravel and Node.js. Optimized for scale and speed.",
    icon: <Server className="text-indigo-600 dark:text-indigo-400" size={24} />,
    tags: ["Laravel", "PostgreSQL", "Redis"],
    color: "from-indigo-500/20",
  },
  {
    title: "Mobile Solutions",
    description:
      "Developing cross-platform mobile applications that feel native, ensuring a seamless experience.",
    icon: <Smartphone className="text-cyan-600 dark:text-cyan-400" size={24} />,
    tags: ["React Native", "Expo"],
    color: "from-cyan-500/20",
  },
  {
    title: "System Performance",
    description:
      "Audit and optimization of existing codebases to reduce latency and minimize server costs.",
    icon: <Zap className="text-amber-600 dark:text-amber-400" size={24} />,
    tags: ["Optimization", "Caching"],
    color: "from-amber-500/20",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Deploying and managing scalable environments with AWS and Docker. Zero-downtime pipelines.",
    icon: <Layers className="text-purple-600 dark:text-purple-400" size={24} />,
    tags: ["AWS", "Docker", "CI/CD"],
    color: "from-purple-500/20",
  },
  {
    title: "Security & Testing",
    description:
      "Implementing rigorous security protocols and automated testing suites to ensure software reliability.",
    icon: (
      <ShieldCheck
        className="text-emerald-600 dark:text-emerald-400"
        size={24}
      />
    ),
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
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-8 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none transition-colors duration-500"
    >
      {/* Spotlight Effect - Adjusted for Light/Dark visibility */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, ${index % 2 === 0 ? "0.1" : "0.15"}),
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
            className="text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
            size={20}
          />
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          {service.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-300 group-hover:border-blue-500/30 transition-colors"
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
    <section className="relative py-32 bg-slate-50 dark:bg-[#030712] px-6 transition-colors duration-500">
      {/* Background Mesh Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 dark:text-blue-500 font-mono text-sm font-bold tracking-[0.3em] uppercase mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter"
          >
            Pushing the boundaries of <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              what's possible.
            </span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
