import Image from "next/image";

const social = [
  {
    id: 0,
    name: "Telegram",
    link: "https://t.me/smakosh",
    icon: "/assets/img/telegram.svg",
  },
  {
    id: 1,
    name: "Github",
    link: "https://github.com/smakosh",
    icon: "/assets/img/github.svg",
  },
  {
    id: 2,
    name: "StackOverflow",
    link: "https://stackoverflow.com/users/story/7396786",
    icon: "/assets/img/stackoverflow.svg",
  },
  {
    id: 3,
    name: "Twitter",
    link: "https://twitter.com/smakosh",
    icon: "/assets/img/twitter.svg",
  },
];

const Footer = () => {
  return (
    <div className="pt-56 pb-16 bg-[url('/assets/img/footer.svg')] bg-cover bg-top bg-no-repeat">
      <div className="container mx-auto flex items-center md:items-end text-center md:text-left justify-between flex-col md:flex-row">
        <div className="mb-8 md:mb-0">
          <h2 className="text-brand-primary font-bold text-2xl mb-4">
            John Doe
          </h2>
          <span className="text-brand-primary">
            © All rights are reserved | {new Date().getFullYear()} | Made with{" "}
            <span aria-label="love" role="img">
              💖
            </span>{" "}
            by{" "}
            <a
              href="https://smakosh.com/?ref=portfolio-dev"
              rel="noopener noreferrer"
              target="_blank"
              className="text-brand-primary"
            >
              Smakosh
            </a>
          </span>
        </div>
        <div className="flex items-center">
          {social.map(({ id, name, link, icon }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`follow me on ${name}`}
              className="mr-2 last:mr-0"
            >
              <Image
                width={24}
                height={24}
                layout="fixed"
                src={icon}
                alt={name}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;