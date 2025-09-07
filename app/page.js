import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';   
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';


import Skills from './components/Skills';
import WorkShowcase from './components/WorkShowcase';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className=" text-[#AB4E52]">
      <ParticleBackground/>
       <ParticlesBackground />
      <Navbar />

      
      <section
        id="hero"
        className="h-screen flex items-center justify-center"
      >
        <Hero />
      </section>

    
      <AboutMe />
      <Experience/>
      
    
      <Skills />
      <WorkShowcase />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
}
