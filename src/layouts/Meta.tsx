import Head from "next/head";

interface MetaProps {
  title: string;
  keywords: string;
  description: string;
}

const Meta = ({ title, keywords, description }: MetaProps) => {
  return (

    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="robots" content="index,follow" />
      <meta property="og:site_name" content="Portfolio" />
      <meta
        property="og:title"
        content="Valentin Berceaux | Full Stack Developer"
      />
      <meta
        name="description"
        content="Bonjour 👋, I'm Valentin Berceaux, a fullstack web developer with Back-End affinity from West of France."



      />
      <meta
        property="og:image"
        itemProp="image"
        content="https://portfolio-tambouil.vercel.app/assets/img/social.jpg"
      />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Valentin Berceaux | Full Stack Developer",
  keywords:
    "next.js, react, web, ui, freelance, dev, development, node, node js",
  description:
    "Bonjour 👋, I'm Valentin Berceaux, a fullstack web developer with Back-End affinity from West of France.",
};

export default Meta;
