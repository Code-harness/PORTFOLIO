import CtaFooter from "../components/landing/CtaFooter";
import Hero from "../components/landing/Hero";
import Services from "../components/landing/Services";
import AboutHero from "../components/landing/AboutHero";
import Projects from "../components/landing/Projects";
import Contact from "../components/landing/contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <AboutHero />
      <Projects/>
      <Contact/>
      <CtaFooter />
    </div>
  );
};

export default Home;
