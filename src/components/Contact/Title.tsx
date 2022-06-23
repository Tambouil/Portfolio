import GetIntouch from "./GetIntouch";

const Title = () => {
  return (
    <div className="pb-4">
      <div className="pb-6 mx-auto">
        <h2 className="text-xl font-bold md:text-4xl mb-1 text-lightest-navy dark:text-lightest-slate">
          Contact
        </h2>
        <span className="text-base text-lightest-navy dark:text-slate">
          I&apos;m currently available for your next project. Feel free to
          contact me to talk about it !
        </span>
        <GetIntouch />
      </div>
    </div>
  );
};

export default Title;
