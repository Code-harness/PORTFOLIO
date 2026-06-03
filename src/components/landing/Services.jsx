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
    title: "Frontend Architecture",
    description:
      "Architecting high-performance, SEO-optimized user interfaces using Next.js, React, and TypeScript. Monitored for pristine Core Web Vitals and layout shifts.",
    icon: <Layout className="text-cyan-400" size={20} />,
    tags: ["React", "Next.js", "Tailwind", "Blade", "TypeScript", "Vue.js"],
  },
  {
    title: "Backend Engineering",
    description:
      "Building resilient distributed API ecosystems, data pipelines, and relational structures with Laravel, Node.js, and Python. Engineered for sub-100ms runtimes.",
    icon: <Server className="text-cyan-400" size={20} />,
    tags: ["Laravel", "PostgreSQL", "Redis", "MongoDB", "Express", "Python"],
  },
  {
    title: "Mobile Solutions",
    description:
      "Developing native-performing cross-platform mobile systems via React Native and Expo. Seamless hardware API hooks and background sync mechanics.",
    icon: <Smartphone className="text-cyan-400" size={20} />,
    tags: ["React Native", "Expo", "Flutter"],
  },
  {
    title: "System Optimization",
    description:
      "Deep audits, refactoring legacy codebases, structural caching policies, and hardware utilization strategies designed to minimize compute bottlenecks.",
    icon: <Zap className="text-cyan-400" size={20} />,
    tags: ["Optimization", "Caching", "Performance"],
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Automating scalable virtual container deployments and multi-zone cluster environments via Docker and AWS pipelines. Zero-downtime integrations.",
    icon: <Layers className="text-cyan-400" size={20} />,
    tags: ["AWS", "Docker", "CI/CD", "Cloudflare", "Render"],
  },
  {
    title: "Security & Testing",
    description:
      "Integrating rigorous structural validation, static analysis, OWASP security guardrails, and automated testing runtimes to secure production assets.",
    icon: <ShieldCheck className="text-cyan-400" size={20} />,
    tags: ["TDD", "OWASP", "Cypress", "Pentesting"],
  },
];

const ServiceCard = ({ service, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.05,
      }}
      onMouseMove={handleMouseMove}
      className="group relative rounded border border-zinc-900 bg-zinc-950/40 p-6 md:p-8 overflow-hidden transition-all duration-300 hover:border-zinc-800"
    >
      {/* Precision Micro Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              320px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.07),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 flex items-center justify-between">
          {/* Minimalist Tech Notch Box */}
          <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center transition-colors group-hover:border-cyan-500/30">
            {service.icon}
          </div>
          <ArrowUpRight
            className="text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
            size={16}
          />
        </div>

        <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
          {service.title}
        </h3>

        <p className="text-zinc-400 leading-relaxed mb-8 flex-grow text-xs sm:text-[13px] break-words">
          {service.description}
        </p>

        {/* Industrial Monospaced Node Badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto font-mono">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] uppercase tracking-wider font-medium px-2 py-0.5 rounded border border-zinc-900 bg-zinc-950/80 text-zinc-500 group-hover:text-zinc-400 group-hover:border-zinc-800 transition-colors"
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
      className="relative py-24 md:py-32 bg-[#09090b] text-zinc-100 px-4 md:px-6 overflow-hidden selection:bg-cyan-500/20 selection:text-cyan-400"
    >
      {/* Vector Blueprint Lines to reinforce background consistency */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293706_1px,transparent_1px),linear-gradient(to_bottom,#1f293706_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24">
          {/* Tactical Label Indicator */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-mono font-medium text-[10px] md:text-xs tracking-[0.25em] uppercase mb-4 block"
          >
            // matrix_capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            Architecting Resilient Systems <br />& Scalable Software Engines.
          </motion.h2>
        </div>

        {/* Tactical Matrix System Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
