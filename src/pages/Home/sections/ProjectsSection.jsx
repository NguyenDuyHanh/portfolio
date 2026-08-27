import { useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon } from "../../../components/icons/SocialIcons";
import { ScrollReveal, buttonHoverProps, activePillTransition, smoothEase } from "../../../animations";

const projectsData = [
  {
    title: "Online Guestbook",
    category: "web",
    description:
      "A modern Online Guestbook application rewritten with Next.js 16 (App Router), React, and Tailwind CSS. Features real-time guest messaging and interactive UI.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    featured: true,
    technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    demoUrl: "https://github.com/NguyenDuyHanh/online-guestbook",
    githubUrl: "https://github.com/NguyenDuyHanh/online-guestbook",
  },
  {
    title: "AutoParking IoT Server",
    category: "web",
    description:
      "A smart parking system using ESP32, React, and Node.js enabling automatic parking slot management, real-time WebSocket monitoring, and analytics.",
    image:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
    featured: true,
    technologies: ["Node.js", "Express", "React", "Socket.io", "MongoDB"],
    demoUrl: "https://github.com/NguyenDuyHanh/autoparking-server",
    githubUrl: "https://github.com/NguyenDuyHanh/autoparking-server",
  },
  {
    title: "Prismo Photo Booth",
    category: "web",
    description:
      "An interactive web-based photobooth web application for capturing, filtering, and instantly sharing fun photo strips.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    featured: false,
    technologies: ["JavaScript", "HTML5", "CSS3", "Vite"],
    demoUrl: "https://github.com/NguyenDuyHanh/prismo-photo",
    githubUrl: "https://github.com/NguyenDuyHanh/prismo-photo",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ai", label: "AI & Machine Learning" },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <motion.section
      id="projects"
      className="py-20 bg-muted/40"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            My Projects
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Explore the innovative projects and technical solutions I have developed
          </p>
        </ScrollReveal>

        {/* Category Filter Tabs with Scroll Animation */}
        <ScrollReveal delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "text-primary-foreground"
                  : "bg-card text-foreground border border-border hover:border-border-hover"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeProjectCategoryPill"
                  className="absolute inset-0 bg-primary rounded-full shadow-md"
                  transition={activePillTransition}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </ScrollReveal>

        {/* Projects Cards Grid with Motion Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6, ease: smoothEase, delay: index * 0.12 }}
                className="rounded-3xl border border-border bg-card text-card-foreground overflow-hidden shadow-sm hover:shadow-xl transition-colors flex flex-col justify-between"
              >
                {/* Project Image & Badge */}
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {project.featured && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400 text-black text-xs font-bold shadow-md">
                        <Star className="w-3.5 h-3.5 fill-black" />
                        <span>Featured</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Links */}
                <div className="px-6 pb-6 pt-0 flex items-center gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2.5 rounded-xl border border-border text-foreground hover:bg-muted transition-all"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
