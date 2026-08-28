import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  UserCheck,
  Code2,
  Layers,
  CheckCircle2,
  Sparkles,
  Server,
  Database,
  Wrench,
  Globe,
} from "lucide-react";
import { projectsData } from "../data/projectsData";
import { GithubIcon } from "../components/icons/SocialIcons";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id) || projectsData[0];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
          <button
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-2 text-sm font-semibold text-foreground transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
                title="View Source Code"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-sm hover:opacity-90 transition-opacity"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {/* Project Header Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center justify-between gap-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              {project.title}
            </h1>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
              {project.categoryLabel}
            </span>
          </div>

          {/* Metadata badges */}
          <div className="pt-3 flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-t border-border/50">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-primary" />
              <span>Role: <strong className="text-foreground font-semibold">{project.role}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Timeline: <strong className="text-foreground font-semibold">{project.timeline}</strong></span>
            </div>
          </div>
        </motion.div>

        {/* Project Main Banner / Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 mb-14 rounded-2xl overflow-hidden border border-border shadow-2xl bg-card"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto block"
          />
        </motion.div>

        {/* Overview Section */}
        <section className="mb-14 space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            <span>Project Overview</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            {project.fullDescription}
          </p>
        </section>

        {/* Key Features Section */}
        {project.features && (
          <section className="mb-14 space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Key Features & Functional Modules</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-card border border-border/70 hover:border-border transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">
                        {feat.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack Breakdown */}
        {project.techStackDetails && (
          <section className="mb-14 space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              <span>Technical Architecture & Tech Stack</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.techStackDetails.frontend && (
                <div className="p-5 rounded-xl bg-card border border-border space-y-3 shadow-xs">
                  <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                    <Globe className="w-4 h-4 text-cyan-500" />
                    <span>Frontend & UI Layer</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStackDetails.frontend.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-muted/80 text-foreground border border-border/80 text-xs font-semibold shadow-2xs hover:border-primary/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.techStackDetails.backend && (
                <div className="p-5 rounded-xl bg-card border border-border space-y-3 shadow-xs">
                  <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                    <Server className="w-4 h-4 text-emerald-500" />
                    <span>Backend & API Layer</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStackDetails.backend.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-muted/80 text-foreground border border-border/80 text-xs font-semibold shadow-2xs hover:border-primary/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.techStackDetails.database && (
                <div className="p-5 rounded-xl bg-card border border-border space-y-3 shadow-xs">
                  <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                    <Database className="w-4 h-4 text-amber-500" />
                    <span>Database</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStackDetails.database.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-muted/80 text-foreground border border-border/80 text-xs font-semibold shadow-2xs hover:border-primary/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.techStackDetails.devops && (
                <div className="p-5 rounded-xl bg-card border border-border space-y-3 shadow-xs">
                  <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                    <Wrench className="w-4 h-4 text-purple-500" />
                    <span>DevOps & Infrastructure</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStackDetails.devops.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-muted/80 text-foreground border border-border/80 text-xs font-semibold shadow-2xs hover:border-primary/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProjectDetailPage;
