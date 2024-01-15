import "@/styles/globals.css";
import { ThemeProvider } from "@/utils/Theme";
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.div key={router.route}>
            <Component {...pageProps} key={router.asPath} />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
