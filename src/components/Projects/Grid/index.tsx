import Card from "./Card";

const Grid = () => {
  return (
    <>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <Card
          title={"Portfolio"}
          stack={"React"}
          description={"Personnal portfolio website"}
          build={"Build with Next.js & TailwindCSS"}
          github={"https://github.com/Tambouil/Portfolio"}
          website={"https://valentin-berceaux.vercel.app/"}
        />
        <Card
          title={"REST API"}
          stack={"Node.js"}
          description={
            "REST API with auth, CRUD operations and files management"
          }
          build={"Build with Express.js, MongoDB, JWT, YUP validator, Multer"}
          github={"https://github.com/Tambouil/Piiquante"}
        />
        <Card
          title={"SD Architectes"}
          stack={"React"}
          description={"Showcase website for an architecture agency"}
          build={"Build with Next.js, vanilla CSS and Contentful headless CMS"}
          website={"https://www.sdarchitectes.com/"}
        />
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
