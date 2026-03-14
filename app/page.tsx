import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import portfolioData from '@/data/portfolio.json';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        name={portfolioData.name}
        role={portfolioData.role}
        tagline={portfolioData.tagline}
      />
      <About about={portfolioData.about} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Contact contact={portfolioData.contact} />
      <Footer name={portfolioData.name} />
    </main>
  );
}