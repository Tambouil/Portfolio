import { FiArrowDownCircle } from "react-icons/fi";

const GetIntouch = () => {
  return (
    <div className="flex justify-center sm:block">
      <a
        href="/files/Stoman-Resume.pdf"
        className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
        aria-label="Download Resume"
      >
        <FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
        <span className="text-sm sm:text-lg duration-100">Say Hello</span>
      </a>
    </div>
  );
};

export default GetIntouch;
