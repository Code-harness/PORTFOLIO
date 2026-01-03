import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Globe, Code2 } from "lucide-react";
import image1 from "../../assets/imgs/proj_1.png";
import image2 from "../../assets/imgs/proj_2.png";
import image3 from "../../assets/imgs/proj_3.png";

const projects = [
  {
    title: "G.S Marie Merci Kibeho Website",
    category: "Full-stack Platform",
    description:
      "A responsive school website built with Laravel and Blade, featuring student information, event announcements, and a modern, clean design.",
    image: image1,
    tags: ["Tailwind", "Laravel", "Blade", "AOS"],
    link: "#",
    github: "#",
  },
  {
    title: "Brave Photography",
    category: "Front-End Website",
    description:
      "A visually stunning photography portfolio website built with React and Tailwind CSS, showcasing high-resolution images with smooth animations and responsive layouts.",
    image: image3,
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Justice On Move-MIS",
    category: "Full-stack Platform",
    description:
      "A management information system for university law students to handle case submissions, assignments, and dashboard tracking, built with React Native and Firebase for mobile-first accessibility.",
    image: image2,
    tags: ["laravel", "API", "blade", "Tailwind", "Alpine"],
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
      {/* Browser Frame Header */}
      <div className="bg-slate-800/80 rounded-t-2xl p-3 border-x border-t border-slate-700 flex items-center gap-1.5 transition-colors group-hover:bg-slate-700/80">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
        <div className="ml-2 flex items-center gap-1 bg-slate-900/50 px-3 py-0.5 rounded-full border border-slate-700">
          <Globe size={10} className="text-slate-500" />
          <span className="text-[10px] text-slate-400 font-mono truncate max-w-[100px]">
            {project.title.toLowerCase().replace(" ", "-")}.io
          </span>
        </div>
      </div>

      {/* Main Card Body */}
      <div className="relative overflow-hidden bg-slate-900 border-x border-b border-slate-800 rounded-b-2xl">
        {/* Image with Overlay */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />

          {/* Hover Actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-blue-900/10">
            <a
              href={project.github}
              className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href={project.link}
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition-all text-white"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2 block">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-[10px] font-bold text-slate-500 border border-slate-800 px-2 py-1 rounded-md bg-slate-900/50"
              >
                <Code2 size={10} /> {tag}
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
    <section id="projects" className="py-32 bg-[#030712] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4"
            >
              Selected Work
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
            >
              Case <span className="text-slate-500 italic">Studies.</span>
            </motion.h3>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block text-right"
          >
            <p className="text-slate-400 max-w-xs mb-4">
              Explore a collection of projects focused on performance,
              accessibility, and clean architecture.
            </p>
            <button className="text-white font-bold border-b-2 border-blue-500 pb-1 hover:text-blue-400 hover:border-blue-400 transition-all">
              View All Archives
            </button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
