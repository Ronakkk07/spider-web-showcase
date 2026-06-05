import Navbar from "@/components/Navbar";
import SpiderWebBackground from "@/components/SpiderWebBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import CareerTimeline from "@/components/CareerTimeline";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import VoiceWalkthrough from "@/components/VoiceWalkthrough";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <SpiderWebBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <CareerTimeline />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <VoiceWalkthrough />
      <Footer />
    </div>
  );
};

export default Index;
