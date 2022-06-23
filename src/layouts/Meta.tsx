import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import { AppConfig } from "@/utils/AppConfig";

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
        <meta
          property="og:url"
          content="https://valentin-berceaux.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Valentin Berceaux | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Bonjour 👋, I'm Valentin Berceaux, a fullstack web developer with Back-End affinity from West of France."
        />
        <meta
          property="og:image"
          content="https://portfolio-tambouil.vercel.app/assets/img/developer-dark.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="valentin-berceaux.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://valentin-berceaux.vercel.app/"
        />
        <meta
          name="twitter:title"
          content="Valentin Berceaux | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Bonjour 👋, I'm Valentin Berceaux, a fullstack web developer with Back-End affinity from West of France."
        />
        <meta
          name="twitter:image"
          content="https://portfolio-tambouil.vercel.app/assets/img/developer-dark.svg"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
