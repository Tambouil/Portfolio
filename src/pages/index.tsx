import type { NextPage } from "next";
import { Meta } from "@/layouts/Meta";
import Navbar from "../components/Navbar/Navbar";
import Header from "@/components/Header/Header";

const Home: NextPage = () => {
  return (
    <>
      <Meta
        title="Valentin Berceaux | Full Stack Developer"
        description="Bonjour 👋, I'm Valentin Berceaux, a fullstack web developer with Back-End affinity from West of France."
      />
      <Navbar />
      <main className="space-y-6 ">
        <Header />
      </main>
    </>
  );
};

export default Home;
