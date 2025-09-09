import Header from './components/layout/Header';
import HeroSection from './components/home/HeroSection';
import ImpressiveStats from './components/home/ImpressiveStats';
import AboutHero from './components/about/AboutHero';
import CompanyValues from './components/about/CompanyValues';
import Leadership from './components/about/Leadership';
import SectionNghiDinh from './components/about/SectionNghiDinh';
import SystemDiagram from './components/about/SystemDiagram';
import Systeminterface from './components/about/Systeminterface';
import ServiceCTA from './components/services/ServiceCTA';
import Casestudyjul7 from './components/projects/Casestudyjul7';
import FeaturedProjects from './components/projects/FeaturedProjects';
import ContactForm from './components/contact/ContactForm';
import FAQ from './components/services/FAQ';
import Zalo from './components/contact/Zalo';
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
        <Systeminterface  />
        <Casestudyjul7 />
        <FeaturedProjects />
        <Zalo/>
        <ServiceCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;