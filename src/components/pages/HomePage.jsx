import { useOutletContext } from 'react-router-dom';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import FeaturesSection from '../sections/FeaturesSection';
import GallerySection from '../sections/GallerySection';
import BenefitsSection from '../sections/BenefitsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FaqSection from '../sections/FaqSection';
import ContactSection from '../sections/ContactSection';

export default function HomePage({ onWatchDemo: propOnWatchDemo }) {
  const context = useOutletContext() || {};
  const onWatchDemo = propOnWatchDemo || context.onWatchDemo;

  return (
    <main id="main-content" className="flex-1">
      {/* 1. Hero Section with CTA */}
      <HeroSection onWatchDemo={onWatchDemo} />

      {/* 2. About the Game */}
      <AboutSection />

      {/* 3. Features Section */}
      <FeaturesSection />

      {/* 4. Screenshots & Demo Gallery */}
      <GallerySection onOpenVideo={onWatchDemo} />

      {/* 5. Benefits for Parents */}
      <BenefitsSection />

      {/* 6. Testimonials / Reviews */}
      <TestimonialsSection />

      {/* 7. FAQ Section */}
      <FaqSection />

      {/* 8. Contact Form */}
      <ContactSection />
    </main>
  );
}
