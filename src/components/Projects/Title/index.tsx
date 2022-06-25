const Title = () => {
  return (
    <div className="pb-4">
      <div className="pb-6 mx-auto">
        <h2 className="text-xl font-bold md:text-4xl mb-1 text-lightest-navy dark:text-lightest-slate">
          Projects
        </h2>
        <span className="font-mono text-base text-lightest-navy dark:text-slate">
          These are {""}
          <strong className="font-semibold">my favourite projects.</strong>
          {""} They come from clients inquiries, my coding bootcamp or side
          projects.
        </span>
      </div>
    </div>
  );
};

export default Title;
