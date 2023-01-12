import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { motion } from "framer-motion";

config.autoAddCss = false;
// importing components
import NavBar from "../components/NavBar";
import { LoaderExample } from "../components/loading";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      setLoading(true);
    };

    const handleComplete = (url) => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, []);
  if (loading) {
    return <LoaderExample />;
  }
  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-w-[270px] whole-container scroll-smooth h-screen overflow-auto"
    >
      <NavBar />
      <Component {...pageProps} />
    </motion.div>
  );
}
