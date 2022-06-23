export interface IPost {
  title: string;
  stack: string;
  description: string;
  build: string;
  github?: string;
  website?: string;
}

const Card = (props: IPost) => {
  return (
    <li className="flex flex-col justify-between col-span-1 rounded-lg shadow dark:bg-lightest-navy">
      <div className="flex items-center justify-between w-full p-6 space-x-6 overflow-hidden">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <h3 className="text-sm font-medium  text-navy dark:text-lightest-slate truncate">
              {props.title}
            </h3>
            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-primary-light text-xs leading-4 font-medium bg-ternary-light bg-opacity-70 dark:bg-opacity-100 rounded-full">
              {props.stack}
            </span>
          </div>
          <p className="mt-1 text-sm  text-slate">
            {props.description}
            <br />
            <span className="text-ternary-light dark:text-primary-light font-light italic pt-2 inline-block">
              {props.build}
            </span>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="flex -mt-px">
          <div className="flex flex-1 w-0 border-r border-gray-200">
            <a
              href={props.github}
              target="_blank"
              rel="noreferrer"
              className={`relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5  ${
                props.github === undefined
                  ? "text-gray-200 dark:text-lightest-navy-disabled"
                  : "text-gray-700 dark:text-white"
              }  transition duration-150 ease-in-out border border-transparent rounded-bl-lg`}
            >
              <svg
                className={`w-5 h-5 ${
                  props.github === undefined
                    ? "text-gray-200 dark:text-lightest-navy-disabled"
                    : "text-slate hover:text-ternary-light dark:text-white"
                }  `}
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 lg:ml-3">Code</span>
            </a>
          </div>
          <div className="flex flex-1 w-0 -ml-px">
            <a
              href={props.website}
              target="_blank"
              rel="noreferrer"
              className={`relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 ${
                props.website === undefined
                  ? "text-gray-200 dark:text-lightest-navy-disabled"
                  : "text-gray-700 dark:text-white"
              }  transition duration-150 ease-in-out border border-transparent rounded-br-lg`}
            >
              <svg
                className={`w-5 h-5 ${
                  props.website === undefined
                    ? "text-gray-200 dark:text-lightest-navy-disabled"
                    : "text-slate hover:text-ternary-light dark:text-white"
                }  `}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
              <span className="ml-3">Live version</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
