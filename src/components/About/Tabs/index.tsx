import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Post {
  id: number;
  headingTitle?: string;
  title?: string;
  description?: string;
}

const Tabs = () => {
  let [categories] = useState({
    Stack: [
      {
        id: 1,
        title: "Back-end",
        description: "Node.js, Express, MongoDB, Mongoose, PostgreSQL, Prisma",
      },
      {
        id: 2,
        title: "Font-end",
        description: "React, Next.js, SCSS with BEM methodology, Tailwind",
      },
      {
        id: 3,
        title: "Tools",
        description:
          "Git, GitHub, headless CMS, Netlify, Heroku, Vercel, VS Code, WebStorm, Paw, Postman",
      },
    ],
    OpenClassrooms: [
      {
        id: 1,
        headingTitle:
          "6 months coding bootcamp where I played with Javascript and TypeScript ecosystem on 6 projects from web integration into build a full stack application",
      },
      {
        id: 2,
        title: "Project 6: Groupomania",
        description: "Full stack TypeScript Web app",
      },
      {
        id: 3,
        title: "Project 5: Piquante",
        description: "TypeScript REST API with CRUD operations",
      },
      {
        id: 4,
        title: "Project 4: Kanap",
        description: "Front-End e-commerce app with vanilla JS",
      },
      {
        id: 5,
        title: "Project 3: La panthère",
        description: "SEO and Accessibility best practices project",
      },
      {
        id: 6,
        title: "Project 2: Ohmyfood",
        description: "Web integration with full CSS animations",
      },
      {
        id: 7,
        title: "Project 1: Booki",
        description: "HTML / CSS web integration",
      },
    ],
    Philosophy: [
      {
        id: 1,
        headingTitle: "Software Craftsmanship",
      },
      {
        id: 2,
        title:
          "I'm currently learning the concepts of Software Craftsmanship. I began this journey with the book “Software Craft” by Cyrille Martraire",
        description:
          "DDD, TDD, Clean Code & refactoring, Continuous Integration etc.",
      },
    ],
  });

  return (
    <div className="grid place-items-center">
      <div className="w-full max-w-xxl px-0 lg:px-12 pb-8">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl p-1 bg-slate/[0.12] dark:bg-lightest-navy ">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    " focus:outline-none",
                    selected
                      ? "bg-white text-lightest-navy dark:bg-lightest-slate shadow"
                      : "text-slate hover:bg-white/[0.12] hover:text-lightest-navy dark:hover:text-white"
                  )
                }
              >
                <div className="flex items-center justify-center">
                  <svg
                    className="w-10 h-10 mt-px px-2"
                    viewBox="0 0 640 512"
                    fill="currentColor"
                  >
                    <path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z" />
                  </svg>
                  {category}
                </div>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-slate/[0.12] dark:bg-lightest-navy p-3",
                  "ring-white focus:outline-none"
                )}
              >
                <ul>
                  {posts.map((post: Post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 text-navy hover:bg-white/[0.12]"
                    >
                      <h3 className="text-md font-extrabold leading-5 dark:text-white text-center">
                        {post.headingTitle}
                      </h3>
                      <h4 className="text-sm font-medium leading-5 dark:text-white">
                        {post.title}
                      </h4>

                      <p className="mt-1 flex space-x-1 text-xs font-normal leading-4 dark:text-lightest-slate">
                        {post.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Tabs;
