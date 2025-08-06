/** @format */

import { Podkova, Poppins } from "@next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AppWrapper from "@/context/state";
import pagesColors from "@/context/color.utils";
import { AnimatePresence, motion } from "framer-motion";
import TagManager from "react-gtm-module";

import "@/styles/globals.scss";
import "locomotive-scroll/src/locomotive-scroll.scss";
import "swiper/css";
import "swiper/css/navigation";

import AllImages from "@/components/AllImages";
import Preloader from "@/components/Preloader";
import Loading from "@/components/Loading";

import { EXCLUDED_ROUTES_PRELOADER, EXCLUDED_ROUTES_PAGE_TRANSITION, EXCLUDED_ROUTES_ALL_IMAGES, ROUTES } from "@/routes";

const podkova = Podkova({
  weight: ["400", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-podkova",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const App = ({ Component, pageProps }) => {
  const { route } = useRouter();
  const [preloader, setPreloader] = useState(true);
  const [loadingAllImages, setLoadingAllImages] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [bodyColor, setBodyColor] = useState("violet");
  const [activeNavItemDesktop, setActiveNavItemDesktop] = useState("white");
  const [activeNavItemMobile, setActiveNavItemMobile] = useState("white");
  const routes = ROUTES;

  useEffect(() => {
    const onLoad = () => setTimeout(() => setLoadingState(true), 300);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);

    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    const pageData = pagesColors[route] || {};
    setBodyColor(pageData.color);
    setActiveNavItemDesktop(pageData.colorInvert);
    setActiveNavItemMobile(pageData.colorMobile);

    setPreloader(!EXCLUDED_ROUTES_PRELOADER.includes(route));
    setLoadingAllImages(!EXCLUDED_ROUTES_PRELOADER.includes(route));
  }, [route]);

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-KP38XNB" });
  }, []);

  const preloaderColor = (preloader) => {
    if (preloader) return pagesColors[route]?.colorPreloader;
    else return bodyColor;
  };

  return (
    <AppWrapper>
      {!EXCLUDED_ROUTES_ALL_IMAGES.includes(route) && loadingAllImages && <AllImages />}
      {preloader && <Preloader loadingState={loadingState} preloaderColor={preloaderColor} />}
      {!EXCLUDED_ROUTES_PAGE_TRANSITION.includes(route) && <Loading />}
      <style jsx global>{`
        body {
          background-color: var(--color-${bodyColor});
        }
        .navigation .active-desktop,
        .navigation .active-bottom {
          color: var(--color-${activeNavItemDesktop});
          pointer-events: none;
        }
        .navigation a.active-mobile {
          color: var(--color-${activeNavItemMobile});
          pointer-events: none;
        }
      `}</style>
      <AnimatePresence mode="wait">
        <motion.div
          key={route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`${podkova.variable} ${poppins.variable}`}
          style={{ height: "inherit", overflow: "hidden !important" }}
        >
          <Component loadingState={loadingState} {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </AppWrapper>
  );
};

export default App;
