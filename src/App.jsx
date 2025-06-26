import Header from './components/layout/Header';
import HeroSection from './components/home/HeroSection';
import ImpressiveStats from './components/home/ImpressiveStats';
import AboutHero from './components/about/AboutHero';
import CompanyValues from './components/about/CompanyValues';
import Leadership from './components/about/Leadership';
import SectionNghiDinh from './components/about/SectionNghiDinh';
import SystemDiagram from './components/about/SystemDiagram';

import ServiceCTA from './components/services/ServiceCTA';
import FeaturedProjects from './components/projects/FeaturedProjects';
import ContactForm from './components/contact/ContactForm';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ImpressiveStats />
        <AboutHero />
        <Leadership/>
        <SectionNghiDinh />
        <CompanyValues />
        <SystemDiagram/>
        
        <FeaturedProjects />
        <ServiceCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;