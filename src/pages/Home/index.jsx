import HeaderNav from "./sections/HeaderNav";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Floating Pill Navigation */}
      <HeaderNav />

      {/* Main Single Page Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default HomePage;