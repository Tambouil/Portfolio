const GetIntouch = () => {
  return (
    <div className="flex justify-center sm:block">
      <a
        href="mailto:v.berceaux@icloud.com?subject=🤘 Hi Val, I'd like to hire you"
        target="blank"
        className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg 
        py-2.5 sm:py-3 shadow-lg rounded-lg bg-white dark:bg-lightest-slate focus:ring-1 
        focus:ring-slate hover:bg-lightest-slate dark:hover:bg-white text-lightest-navy duration-300"
      >
        <span className="font-mono text-sm sm:text-lg duration-100">
          👋 Say Hello
        </span>
      </a>
    </div>
  );
};

export default GetIntouch;
