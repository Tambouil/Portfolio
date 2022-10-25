import type { NextPage } from 'next';
import Meta from '@/layouts/Meta';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero';
import MobileNavbar from '@/components/Navbar/MobileNavbar';

const Home: NextPage = () => {
  return (
    <>
      <Meta title="Valentin Berceaux | Full Stack Developer" />
      <Navbar />
      <MobileNavbar />
      <Hero />
    </>
  );
};

export default Home;
