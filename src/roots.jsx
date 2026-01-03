import { Routes, Route } from "react-router-dom";

// Pages
import HeroSection from "./components/HeroSection";
import VisionMissionValues from "./components/VisionMissionValues";
import FounderValues from "./components/FounderValues";
import ProjectGallery from "./components/ProjectGallery";
import ContactSection from "./components/ContactSection";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<HeroSection />} />

      {/* Location-based SEO pages */}
      <Route
        path="/contact"
        element={<ContactSection />}
      />
      <Route
        path="/vision-mission-values"
        element={<VisionMissionValues />}
      />
      <Route
        path="/founder-values"
        element={<FounderValues />}
      />
      <Route
        path="/project-gallery"
        element={<ProjectGallery />}
      />
    </Routes>
  );
};

export default AppRoutes;