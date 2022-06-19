import type { NextPage } from "next";
import { Meta } from "@/layouts/Meta";
import Navbar from "../components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import { Projects } from "@/components/Projects/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Meta
        title="Valentin Berceaux | Full Stack Developer"
        description="Bonjour 👋, I'm Valentin Berceaux, a fullstack web developer with Back-End affinity from West of France."
      />
      <Navbar
        logo={"VB"}
        home={"Home"}
        projects={"Projects"}
        skills={"Skills"}
        contact={"Contact"}
      />
      <main className="space-y-6 ">
        <Header />
        <Projects />
      </main>
    </>
  );
};

export default Home;
