import GetIntouch from "./GetIntouch";

const Title = () => {
  return (
    <div className="pb-4">
      <div className="pb-6 mx-auto">
        <h2 className="text-xl font-bold md:text-4xl mb-1">Contact</h2>
        <span className="text-base text-gray-600">
          Here you will find {""}
          <strong className="font-semibold">
            a few of my favourite coding projects
          </strong>
          {""} I made to learn new tech during bootcamp or when I have free
          time.
        </span>
        <GetIntouch />
      </div>
    </div>
  );
};

export default Title;
