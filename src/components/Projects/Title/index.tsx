const Title = () => {
  return (
    <div className="pb-4">
      <div className="pb-6 mx-auto">
        <h2 className="text-xl font-bold md:text-4xl mb-1 text-lightest-navy dark:text-lightest-slate">
          Projects
        </h2>
        <span className="text-base text-lightest-navy dark:text-slate">
          These are some of {""}
          <strong className="font-semibold">
            my favourites coding projects
          </strong>
          {""} I made during my coding bootcamp as well as side projects.
        </span>
      </div>
    </div>
  );
};

export default Title;
