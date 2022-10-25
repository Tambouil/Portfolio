import type { NextPage } from 'next';
import Meta from '@/layouts/Meta';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero';
import MobileNavbar from '@/components/Navbar/MobileNavbar';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Home: NextPage = () => {
  return (
    <>
      <Meta title="Valentin Berceaux | Full Stack Developer" />
      <Navbar />
      <MobileNavbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default Home;
