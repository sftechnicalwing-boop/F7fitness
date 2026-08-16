import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { About } from './components/About';
import { WhyF7 } from './components/WhyF7';
import { Programs } from './components/Programs';
import { VideoSection } from './components/VideoSection';
import { Facilities } from './components/Facilities';
import { Trainers } from './components/Trainers';
import { Results } from './components/Results';
import { Testimonials } from './components/Testimonials';
import { Membership } from './components/Membership';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AuthPage } from './pages/AuthPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white font-sans selection:bg-brand-yellow selection:text-brand-black">
      {/* Navigation */}
      <Navbar />

      {/* Global Scroll Sections Container */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Brand Statement */}
        <BrandStatement />

        {/* 3. About F7 Section */}
        <About />

        {/* 5. Why F7 core benefits grid */}
        <WhyF7 />

        {/* 6. Programs Showcase */}
        <Programs />

        {/* 7. Full-width Cinematic Video Energy Section */}
        <VideoSection />

        {/* 8. Facilities Showcase (w/ dynamic Lightbox) */}
        <Facilities />

        {/* 9. Meet the Trainers Section */}
        <Trainers />

        {/* 10. Transformation Results Case Studies */}
        <Results />

        {/* 11. Large quote Testimonials */}
        <Testimonials />

        {/* 12. Membership Plans Tier List */}
        <Membership />

        {/* 13. Visual Category-filtered Gallery (w/ Lightbox) */}
        <Gallery />

        {/* 14. Location coordinates and Operating Hours details */}
        <Location />

        {/* 15. High Impact Final Call to Action */}
        <FinalCTA />
      </main>

      {/* 16. Branded footer */}
      <Footer />

      {/* Floating WhatsApp Integration */}
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
