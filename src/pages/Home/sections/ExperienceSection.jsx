import { useState } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, activePillTransition, smoothEase } from "../../../animations";

const workExperience = [
  {
    role: "Freelance Fullstack Developer",
    organization: "Self-Employed",
    period: "2024 - Present",
    location: "Remote / Vietnam",
    description:
      "Design and develop custom web applications using React, Next.js, Node.js, and MongoDB. Implement responsive UI/UX and integrate RESTful APIs for client projects.",
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    role: "Backend & Web Developer",
    organization: "Academic Projects & Open Source",
    period: "2023 - 2024",
    location: "Ha Noi",
    description:
      "Built IoT smart parking server using ESP32, React, and Node.js with real-time WebSocket communication and database design.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Socket.io", "C++"],
  },
];

const educationData = [
  {
    role: "Information Technology Degree",
    organization: "University of Transport in Ho Chi Minh City",
    period: "2022 - Present",
    location: "Ha Noi, Vietnam",
    description:
      "Majoring in Software Engineering and Information Technology. Focus on Data Structures, Algorithms, Web Architecture, and Database Systems.",
    technologies: ["Java", "C/C++", "Data Structures", "Algorithms", "Database Design"],
  },
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("work"); // 'work' | 'education'

  const items = activeTab === "work" ? workExperience : educationData;

  return (
    <motion.section
      id="experience"
      className="py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            My Experience
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Explore the practical experiences and academic achievements I have accumulated
          </p>
        </ScrollReveal>

        {/* Tab Switcher with Scroll Animation */}
        <ScrollReveal delay={0.1} className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-muted border border-border">
            <button
              onClick={() => setActiveTab("work")}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                activeTab === "work"
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === "work" && (
                <motion.div
                  layoutId="activeExperienceTabPill"
                  className="absolute inset-0 bg-primary rounded-xl shadow-md"
                  transition={activePillTransition}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Work Experience</span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                activeTab === "education"
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === "education" && (
                <motion.div
                  layoutId="activeExperienceTabPill"
                  className="absolute inset-0 bg-primary rounded-xl shadow-md"
                  transition={activePillTransition}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </span>
            </button>
          </div>
        </ScrollReveal>

        {/* Cards Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6, ease: smoothEase, delay: index * 0.12 }}
                className="p-6 sm:p-8 rounded-3xl border border-border bg-card text-card-foreground shadow-sm hover:border-border-hover transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="font-semibold text-foreground">
                      {item.organization}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Technologies Badges */}
                <div>
                  <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Technologies / Skills:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
