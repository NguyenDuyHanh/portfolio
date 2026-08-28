import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Star, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon } from "../../../components/icons/SocialIcons";
import { ScrollReveal, activePillTransition, smoothEase } from "../../../animations";
import { projectsData } from "../../../data/projectsData";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Fullstack" },
  { id: "frontend", label: "Frontend & UI/UX" },
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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

        {/* Projects Cards Grid (3 Columns) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
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
                  <Link
                    to={`/projects/${project.id}`}
                    className="block relative aspect-video w-full overflow-hidden bg-muted cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </Link>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2 mb-4">
                      {project.shortDescription || project.subtitle}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-muted text-muted-foreground border border-border/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-full text-[11px] font-medium bg-muted text-muted-foreground">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons Footer */}
                <div className="px-6 pb-6 pt-0 flex items-center gap-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  <Link
                    to={`/projects/${project.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-border bg-card text-foreground hover:bg-muted font-semibold text-xs transition-colors"
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2.5 rounded-xl border border-border text-foreground hover:bg-muted transition-colors shrink-0"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
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
