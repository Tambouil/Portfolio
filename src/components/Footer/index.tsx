import Image from "next/image";

const social = [
  {
    id: 0,
    name: "Twitter",
    link: "https://twitter.com/valbcx",
    icon: "/assets/img/twitter.svg",
  },
  {
    id: 1,
    name: "Mail",
    link: "mailto:v.berceaux@icloud.com?subject=🤘 Hi Val, I'd like to hire you",
    icon: "/assets/img/mail.svg",
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/Tambouil",
    icon: "/assets/img/github.svg",
  },
  {
    id: 3,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/valentin-berceaux-240b5614b/",
    icon: "/assets/img/linkedin.svg",
  },
  {
    id: 4,
    name: "Malt",
    link: "https://www.malt.fr/profile/valentinberceaux",
    icon: "/assets/img/malt.svg",
  },
];

const Footer = () => {
  return (
    <div className="pt-56 pb-16 bg-[url('/assets/img/footer.svg')] bg-cover bg-top bg-no-repeat">
      <div className="container mx-auto flex items-center md:items-end text-center md:text-left justify-between flex-col md:flex-row">
        <div className="mb-8 md:mb-0 text-light-navy">
          © {new Date().getFullYear()} | Valentin Berceaux
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
