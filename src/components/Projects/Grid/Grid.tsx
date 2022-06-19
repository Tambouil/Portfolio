import Card from "./Card/Card";

const Grid = () => {
  return (
    <div className="px-4 sm:px-8">
      <div className="max-w-screen-xl mx-auto">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Card
            title={"hello"}
            stack={"hello"}
            description={"hello from the other side"}
            build={"hello"}
          />
          <Card
            title={"Bonjour"}
            stack={"Bonjour"}
            description={"Bonjour from the other side"}
            build={"Bonjour"}
          />
          <Card
            title={"TEst"}
            stack={"TEst"}
            description={"TEst from the other side"}
            build={"TEst"}
          />
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <a
          href="https://github.com/Tambouil"
          className=" font-semibold py-2 px-4 text-blue-400 border-gray-200 my-5  rounded-lg shadow card card-body sm:rounded-lg hover:bg-gray-50 focus:bg-gray-100"
        >
          View more on Github
        </a>
      </div>
    </div>
  );
};

export default Grid;
