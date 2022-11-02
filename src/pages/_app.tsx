import { AnimatePresence } from "framer-motion";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AnimatePresence exitBeforeEnter>
    <Component {...pageProps} />
  </AnimatePresence>
);

export default MyApp;
