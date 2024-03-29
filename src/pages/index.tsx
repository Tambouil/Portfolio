import type { NextPage } from 'next';
import Meta from '@/layouts/Meta';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero';
import MobileNavbar from '@/components/Navbar/MobileNavbar';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Folder/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Navbar />
      <MobileNavbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
