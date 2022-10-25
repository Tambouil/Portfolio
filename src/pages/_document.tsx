import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-p-32 scroll-smooth">
      <Head />
      <body className="bg-dark-50 text-dark-600 transition-colors duration-300 ease-in-out dark:bg-dark-850 dark:text-dark-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
