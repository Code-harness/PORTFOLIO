import CtaFooter from "../components/landing/CtaFooter";
import Hero from "../components/landing/Hero";
import Services from "../components/landing/Services";
import AboutHero from "../components/landing/AboutHero";
import Projects from "../components/landing/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <AboutHero />
      <Projects/>
      <CtaFooter />
    </div>
  );
};

export default Home;
