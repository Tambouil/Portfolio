const Title = () => {
  return (
    <div className="pb-4">
      <div className="pb-6 mx-auto">
        <h2 className="text-xl font-bold md:text-4xl mb-1 text-light-navy dark:text-lightest-slate">
          About me
        </h2>
        <span className="font-mono text-base text-lightest-navy dark:text-slate">
          I&apos;m a {""}
          <strong className="font-bold">self-taught</strong>
          {""} developer currently following a coding bootcamp at OpenClassrooms
          to enhance my skills. Even if I&apos;m specialised in Javascript and
          TypeScript, I also like to experiment with others technologies and
          frameworks.
        </span>
      </div>
    </div>
  );
};

export default Title;
