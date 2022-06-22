import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AnimatePresence>
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="bg-primary-light dark:bg-navy transition duration-300">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  </AnimatePresence>
);

export default MyApp;
