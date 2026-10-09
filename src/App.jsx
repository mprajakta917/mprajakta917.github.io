import AboutSection from "./components/aboutSection";
import ClientsSection from "./components/clientSection";
import ContactSection from "./components/contact";
import ContactHeroSection from "./components/contactHeroSection";
import FeatureCards from "./components/featureCards";
import FeaturedWork from "./components/featureWork";
import  {HeroSection}  from "./components/heroSection";
import Navigation from "./components/navigation";
import TestimonialsSlider from "./components/testimonial";
import WorkProcessSection from "./components/workProgress";

function App() {
  return <>
  <Navigation />
  <HeroSection />
  <FeatureCards />
  <FeaturedWork />
  <AboutSection/>
  <ClientsSection />
  <TestimonialsSlider/>
  <WorkProcessSection/>
  <ContactHeroSection />
  <ContactSection />
  </>;
}

export default App;
