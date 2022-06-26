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

// import { Head, Html, Main, NextScript } from "next/document";
// import { NextSeo } from "next-seo";
// import { AppConfig } from "@/utils/AppConfig";

// type IMetaProps = {
//   title: string;
//   description: string;
//   site_name: string;
//   locale: string;
//   canonical?: string;
// };

// export default function Document(props: IMetaProps) {
//   return (
//     <Html lang={AppConfig.locale}>
//       <Head>
//         <link rel="icon" href={`/favicon.ico`} key="favicon" />
//         <meta
//           property="og:image"
//           content="https://portfolio-tambouil.vercel.app/assets/img/developer-dark.svg"
//           key="ogimage"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Heebo&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
//           rel="stylesheet"
//         />
//         <NextSeo
//           title={props.title}
//           description={props.description}
//           canonical={props.canonical}
//           openGraph={{
//             title: props.title,
//             description: props.description,
//             url: props.canonical,
//             locale: AppConfig.locale,
//             site_name: AppConfig.site_name,
//           }}
//         />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }
