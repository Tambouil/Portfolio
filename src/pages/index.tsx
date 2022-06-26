import type { NextPage } from "next";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { Projects } from "@/components/Projects";
import Skills from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Meta from "@/layouts/Meta";

const Home: NextPage = () => {
  return (
    <>
      <Meta title="Valentin Berceaux | Full Stack Developer" />
      <Navbar />
      <main className="container mx-auto space-y-6 ">
        <Header />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
