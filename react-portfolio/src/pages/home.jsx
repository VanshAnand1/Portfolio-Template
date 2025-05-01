import { ThemeToggle } from "../components/themetoggle";
import { StarBackground } from "@/components/starbackground";
import { NavBar } from "@/components/navbar";
import { HomeSection } from "@/components/homesection";
import { AboutSection } from "@/components/aboutsection";
import { SkillSection } from "@/components/skillsection";
import { ProjectSection } from "@/components/projectsection";
import { ContactSection } from "@/components/contactsection";
import { Footer } from "@/components/footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />
      {/* background effects */}
      <StarBackground />
      {/* navbar */}
      <NavBar />
      {/* main content */}
      <main>
        <HomeSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};
