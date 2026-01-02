import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Globe, Code2 } from "lucide-react";

const projects = [
  {
    title: "EcoSphere SaaS",
    category: "Full-stack Platform",
    description:
      "A comprehensive environmental tracking dashboard with real-time data visualization and carbon footprint analytics.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Laravel", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Nova UI Kit",
    category: "Design System",
    description:
      "An enterprise-grade React component library built with Tailwind CSS and Framer Motion for high-end digital products.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
    github: "#",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* 1. Browser Frame Header */}
      <div className="bg-slate-100 dark:bg-slate-800/80 rounded-t-2xl p-3 border-x border-t border-slate-200 dark:border-slate-700 flex items-center gap-1.5 transition-colors group-hover:bg-white dark:group-hover:bg-slate-700/80">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400 dark:bg-red-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400 dark:bg-amber-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 dark:bg-emerald-500/40" />
        <div className="ml-2 flex items-center gap-1 bg-white dark:bg-slate-900/50 px-3 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
          <Globe size={10} className="text-slate-400 dark:text-slate-500" />
          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
            {project.title.toLowerCase().replace(" ", "-")}.dev
          </span>
        </div>
      </div>

      {/* 2. Main Card Body */}
      <div className="relative overflow-hidden bg-white dark:bg-slate-900 border-x border-b border-slate-200 dark:border-slate-800 rounded-b-2xl shadow-xl shadow-slate-200/50 dark:shadow-none">
        {/* Image Section */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
          {/* Subtle light mode overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 dark:from-[#030712]/80 via-transparent to-transparent" />

          {/* Actions Overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-white/20 dark:bg-blue-900/10">
            <a
              href={project.github}
              className="p-3 bg-white dark:bg-white/10 text-slate-900 dark:text-white border border-slate-200 dark:border-white/20 rounded-full hover:scale-110 shadow-lg transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href={project.link}
              className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 shadow-lg shadow-blue-500/40 transition-all"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* 3. Content Section */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest px-2 py-1 bg-blue-50 dark:bg-blue-500/10 rounded-md">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-2 py-1 rounded-lg bg-slate-50 dark:bg-slate-900/50 transition-colors group-hover:bg-white"
              >
                <div className="w-1 h-1 rounded-full bg-blue-500" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 bg-slate-50 dark:bg-[#030712] px-6 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 dark:text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tighter"
            >
              Recent <br />
              <span className="text-slate-400 dark:text-slate-500 italic">
                Creations.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 dark:text-slate-400 text-lg border-l-2 border-blue-500 pl-6 max-w-sm"
          >
            Showcasing clean interfaces and scalable logic across multiple
            stacks.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
