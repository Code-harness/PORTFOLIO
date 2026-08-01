import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Globe, Code2 } from "lucide-react";
import image1 from "../../assets/imgs/proj_1.png";
import image2 from "../../assets/imgs/proj_2.png";
import image3 from "../../assets/imgs/proj_3.png";
import image4 from "../../assets/imgs/proj_4.png";
import image5 from "../../assets/imgs/proj_5.png";
import image6 from "../../assets/imgs/proj_6.png";
import image7 from "../../assets/imgs/proj_7.png";
import image8 from "../../assets/imgs/proj_8.png";
import image9 from "../../assets/imgs/proj_9.png";

const projects = [
  {
    title: "BazaCare",
    category: "Full-Stack HealthTech",
    description:
      "a digital wellness and peer support platform designed primarily to provide a secure, anonymous, and accessible space for young people to seek guidance and health resources.",
    image: image8,
    tags: ["Laravel", "React", "Tailwind CSS", "MySQL", "REST API"],
    link: "https://bazacare.space/",
    github: "#",
  },
  {
    title: "Urumuri Solutions",
    category: "Corporate Web Architecture",
    description:
      "Official corporate tech portal for Urumuri Solutions featuring high-performance landing structures, modern interactive UI nodes, and robust business service showcases.",
    image: image5,
    tags: ["Laravel", "Next.js", "Tailwind CSS", "Alpine.js", "PostgreSQL"],
    link: "https://urumurisolutions.online",
    github: "#",
  },
  {
    title: "Kindi Coffee Shop",
    category: "E-Commerce & Hospitality",
    description:
      "A sleek digital storefront and order management platform built for modern coffee shop workflows, menu exploration, and customer reservations.",
    image: image6,
    tags: ["Nextjs", "Tailwind CSS", "Supabase"],
    link: "https://kindi.urumuri.online/",
    github: "#",
  },
  {
    title: "Grand Maison Hotel",
    category: "Hospitality Management System",
    description:
      "An integrated hotel reservation platform featuring room inventory tracking, guest booking engines, and dynamic pricing control panels.",
    image: image7,
    tags: ["Nextjs", "Tailwind CSS", "Supabase"],
    link: "#",
    github: "https://grandmaison.urumuri.online/",
  },

  {
    title: "G.S Marie Merci Kibeho Website",
    category: "Full-stack Platform",
    description:
      "A responsive enterprise ecosystem engineered with Laravel and Blade, managing student information arrays, automated schedule deployments, and localized performance matrices.",
    image: image1,
    tags: ["Tailwind", "Laravel", "Blade", "AOS"],
    link: "#",
    github: "#",
  },
  {
    title: "Brave Photography",
    category: "Front-End Workspace",
    description:
      "High-fidelity image rendering matrix built using React and TypeScript. Optimized using lazy image compilation and crisp asset loading architecture.",
    image: image3,
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://bravephotography.vercel.app/",
    github: "https://github.com/Code-harness/brave_photography",
  },
  {
    title: "Justice On Move-MIS",
    category: "Management Info System",
    description:
      "A secure management information platform built for tracking case distribution metrics, legal submission pipelines, and real-time operations telemetry.",
    image: image2,
    tags: ["Laravel", "REST API", "Blade", "Tailwind", "Alpine.js"],
    link: "https://jommis-production.up.railway.app/",
    github: "#",
  },
  {
    title: "Kanyarwanda Tech",
    category: "Front-End Infrastructure",
    description:
      "A structural, multi-device corporate tech node featuring embedded geographical API integrations, high-speed routing elements, and modern component engineering.",
    image: image4,
    tags: ["Laravel", "Google Maps API", "Blade", "Tailwind", "Alpine.js"],
    link: "#",
    github: "#",
  },
  {
    title: "TeleRadio",
    category: "Digital Streaming & Media",
    description:
      "Advanced open-source streaming infrastructure delivering high-fidelity TV and Radio frequencies with zero tracking, built-in M3U link previews, and fast extraction pipelines.",
    image: image9,
    tags: ["Next.js", "Python", "Tailwind CSS", "M3U Parsing", "Vercel"],
    link: "https://teleradio.vercel.app/",
    github: "#",
  },
];

const ProjectCard = ({ project, index }) => {
  const urlFallback = useMemo(
    () => project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + ".net",
    [project.title],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.05,
      }}
      className="group relative flex flex-col h-full"
    >
      {/* Tactical Shell Window Header */}
      <div className="bg-zinc-900 rounded-t p-3 border-x border-t border-zinc-900 flex items-center justify-between transition-colors group-hover:border-zinc-800">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-sm bg-zinc-800" />
          <div className="w-1.5 h-1.5 rounded-sm bg-zinc-800" />
          <div className="w-1.5 h-1.5 rounded-sm bg-zinc-800" />
          <div className="ml-2 flex items-center gap-1.5 bg-zinc-950 px-2.5 py-0.5 rounded border border-zinc-800/60 font-mono">
            <Globe size={9} className="text-zinc-600" />
            <span className="text-[9px] text-zinc-500 tracking-wider truncate max-w-[120px]">
              {urlFallback}
            </span>
          </div>
        </div>
        <span className="text-[8px] font-mono font-bold text-zinc-600 tracking-widest hidden sm:inline">
          [ DEPLOYED_NODE ]
        </span>
      </div>

      {/* Primary Infrastructure Frame */}
      <div className="relative overflow-hidden bg-zinc-950/40 border-x border-b border-zinc-900 rounded-b p-0 flex flex-col flex-grow transition-all group-hover:border-zinc-800">
        {/* Sandbox Canvas Display Container */}
        <div className="relative aspect-video overflow-hidden border-b border-zinc-900 bg-zinc-950">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full grayscale opacity-60 transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-80"
            loading="lazy"
          />

          {/* Flat Grid Overlay Curtain */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm bg-zinc-950/60 flex items-center justify-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:border-zinc-700 rounded transition-colors"
              aria-label="Repository Source"
            >
              <Github size={15} />
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-cyan-500 text-black font-bold hover:bg-cyan-400 rounded transition-colors"
              aria-label="Live Stream Instance"
            >
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Diagnostic Metadata Output */}
        <div className="p-5 md:p-6 flex flex-col flex-grow">
          <span className="text-[10px] font-mono font-medium text-cyan-400 uppercase tracking-widest mb-2 block">
            // classification: {project.category}
          </span>
          <h3 className="text-base font-bold text-white mb-2.5 tracking-tight group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed mb-6 flex-grow font-sans">
            {project.description}
          </p>

          {/* Codebase Syntax Parameters */}
          <div className="flex flex-wrap gap-1.5 mt-auto font-mono">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-[9px] font-medium text-zinc-500 border border-zinc-900/80 px-2 py-0.5 rounded bg-zinc-950/40"
              >
                <Code2 size={9} className="text-zinc-600" /> {tag.toUpperCase()}
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
      className="py-24 md:py-32 bg-[#09090b] text-zinc-100 px-4 md:px-6 relative overflow-hidden selection:bg-cyan-500/20 selection:text-cyan-400"
    >
      {/* Vector Alignment Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293706_1px,transparent_1px),linear-gradient(to_bottom,#1f293706_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-cyan-400 font-mono font-medium text-[10px] md:text-xs tracking-[0.25em] uppercase mb-3 block"
            >
              // production_ledger
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]"
            >
              Verified Deployments.
            </motion.h3>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-left md:text-right font-mono text-xs flex flex-col md:items-end gap-3"
          >
            <p className="text-zinc-400 max-w-xs font-sans text-xs leading-relaxed">
              An index of deployed assets mapped for maximum systemic
              reliability, core optimization, and robust internal architectures.
            </p>
            <button className="text-cyan-400 font-bold border-b border-cyan-500/30 pb-0.5 tracking-wider hover:text-cyan-300 hover:border-cyan-400 transition-all text-[11px] uppercase w-fit">
              QUERY_ARCHIVE_REGISTRY &rarr;
            </button>
          </motion.div>
        </div>

        {/* Operational Deployment Core Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
