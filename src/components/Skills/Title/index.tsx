const Title = () => {
  return (
    <div className="pb-4">
      <div className="pb-6 mx-auto">
        <h2 className="text-xl font-bold md:text-4xl mb-1 text-light-navy dark:text-lightest-slate">
          About me
        </h2>
        <span className="text-base text-lightest-navy dark:text-slate">
          I'm a {""}
          <strong className="font-bold">self-taught</strong>
          {""} developer. I'm currently following a coding bootcamp at
          OpenClassrooms to enhanced my skills.
        </span>
      </div>
    </div>
  );
};

export default Title;
