import { useState } from "react";
import { Code2, Database, Layout, Smartphone, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, activePillTransition, smoothEase } from "../../../animations";

const skillsData = [
  { name: "React.js / Next.js", percentage: 85, category: "frontend", icon: Layout },
  { name: "JavaScript / ES6+", percentage: 90, category: "frontend", icon: Code2 },
  { name: "Tailwind CSS & CSS3", percentage: 92, category: "frontend", icon: Layout },
  { name: "HTML5 & Semantic UI", percentage: 95, category: "frontend", icon: Layout },
  { name: "Node.js & Express.js", percentage: 80, category: "backend", icon: Database },
  { name: "MongoDB & Mongoose", percentage: 78, category: "backend", icon: Database },
  { name: "MySQL & Relational DB", percentage: 75, category: "backend", icon: Database },
  { name: "RESTful API & WebSocket", percentage: 85, category: "backend", icon: Database },
  { name: "React Native", percentage: 70, category: "mobile", icon: Smartphone },
  { name: "Git / GitHub / CI/CD", percentage: 88, category: "tools", icon: Wrench },
  { name: "Docker & VPS Deploy", percentage: 75, category: "tools", icon: Wrench },
  { name: "Vite / Webpack", percentage: 82, category: "tools", icon: Wrench },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" },
  { id: "tools", label: "Dev Tools" },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <motion.section
      id="skills"
      className="py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            My Skills
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Synthesis of skills and technologies that I have accumulated through real-world projects
          </p>
        </ScrollReveal>

        {/* Category Tabs with Scroll Animation */}
        <ScrollReveal delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeSkillCategoryPill"
                  className="absolute inset-0 bg-primary rounded-full shadow-md"
                  transition={activePillTransition}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </ScrollReveal>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.6, ease: smoothEase, delay: (index % 3) * 0.1 }}
                  className="p-5 rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:border-border-hover transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-muted text-foreground">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-sm text-foreground">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs font-extrabold text-muted-foreground">
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
