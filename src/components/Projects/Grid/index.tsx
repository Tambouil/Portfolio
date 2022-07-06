import Card from "./Card";

const projects = [
  {
    id: 0,
    title: "Portfolio",
    stack: "React",
    description: "Personnal portfolio website",
    build: "Build with Next.js, TailwindCSS & Framer Motion",
    github: "https://github.com/Tambouil/Portfolio",
    website: "https://valentin-berceaux.vercel.app/",
  },
  {
    id: 1,
    title: "REST API",
    stack: "Node.js",
    description: "REST API with auth, CRUD operations and files management",
    build: "Build with Express.js, MongoDB, JWT, YUP validator & Multern",
    github: "https://github.com/Tambouil/Piiquante",
  },
  {
    id: 2,
    title: "SD Architectes",
    stack: "React",
    description: "Showcase website for an architecture agency",
    build: "Build with Next.js, vanilla CSS & Contentful headless CMS",
    website: "https://www.sdarchitectes.com/",
  },
  {
    id: 3,
    title: "Boîte à plans",
    stack: "PHP",
    description:
      "Files transfer and clients management Web App for SD Architectes agency",
    build: "Build with PHP & Bootstrap",
    website: "https://bap.sdarchitectes.com/",
  },
  {
    id: 4,
    title: "Movies App",
    stack: "React",
    description: "Movies App using TMDB Api",
    build: "Build with React, SCSS & TMDB Api",
    github: "https://github.com/Tambouil/Movie-App",
    website: "https://tambouil-movies-app.netlify.app/",
  },
  {
    id: 5,
    title: "Rock-Paper-Scissors Game",
    stack: "React",
    description:
      "Famous The Big Bang Theory game (Rock-Paper-Scissors-Lizard-Spock) with easy and hard modes",
    build: "Build with React & vanilla CSS. Designed by Frontend Mentor",
    github: "https://github.com/Tambouil/Rock-Paper-Scissors",
    website: "https://rock-paper-scissors-tambouil.netlify.app/",
  },
];

const Grid = () => {
  return (
    <>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map(
          ({ id, title, stack, description, build, github, website }) => (
            <Card
              key={id}
              title={title}
              stack={stack}
              description={description}
              build={build}
              github={github}
              website={website}
            />
          )
        )}
      </ul>
      <div className="flex justify-center items-center">
        <a
          target="blank"
          href="https://github.com/Tambouil"
          className=" font-semibold py-2 px-4 text-light-navy dark:bg dark:text-light-navy dark:bg-white my-5 rounded-lg shadow card card-body sm:rounded-lg hover:bg-gray-50 focus:bg-gray-100"
        >
          View more on Github
        </a>
      </div>
    </>
  );
};

export default Grid;
