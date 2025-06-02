import AboutSection from "@/sections/AboutSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/Footer";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
            <Footer />
        </>
    )
}