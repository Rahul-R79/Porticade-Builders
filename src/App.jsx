import HeroSection from './components/HeroSection';
import VisionMission from './components/VisionMission';
import FounderValues from './components/FounderValues';
import ServiceSection from './components/ServiceSection';
import ProjectGallery from './components/ProjectGallery';
import ReviewSection from './components/ReviewSection';
import PolicyCarousel from './components/PolicyCarousel';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <HeroSection />
            <VisionMission />
            <FounderValues />
            <ServiceSection />
            <ProjectGallery />
            <ReviewSection />
            <PolicyCarousel />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;