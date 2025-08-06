/** @format */

import { createContext, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "./state";
import useResizeObserver from "use-resize-observer";
import scrollRouteConfigMap from "./scroll.utils";

export const SmoothScrollContext = createContext({
  scroll: null,
  isReady: false,
});

export const SmoothScrollProviderWithouDestroy = ({
  children,
  options,
  refContainer,
}) => {
  const [isReady, setIsReady] = useState(false);
  const LocomotiveScrollRef = useRef(null);

  const { height } = useResizeObserver({ ref: refContainer });
  const { route } = useRouter();

  const { setCounterClicks } = useAppContext();

  // ---------------------- CONFIG ------------------------

  const config = {
    "partnership-home": [
      ["black-violet"],
      ["black-violet"],
      ["black-violet"],
      ["violet-important"],
    ],
    about: [
      ["white-violet", "top"],
      ["white-violet", "top"],
      ["white-violet", "bottom"],
      ["violet-important", "bottom"],
    ],
    banner: [
      ["black-white", "top"],
      ["black-white", "top"],
      ["black-white", "bottom"],
      ["violet-important", "bottom"],
    ],
    list: [
      ["black-violet", "top"],
      ["black-violet", "top"],
      ["black-violet", "bottom"],
      ["violet-important", "bottom"],
    ],
    download: [
      ["white", "top"],
      ["white", "top"],
      ["black-violet", "bottom"],
      ["violet-important", "bottom"],
    ],
    typeForm: [
      ["black-white", "top"],
      ["black-white", "top"],
      ["black-violet", "bottom"],
      ["black-violet", "bottom"],
    ],
  };

  const ambassadorKeys = [
    "ambasadorStart",
    "ambasadorYouWay",
    "ambasadorGetPaid",
    "ambasadorMoves",
    "ambasadorDeal",
    "ambasadorImages",
    "ambasadorPerfect",
  ];

  ambassadorKeys.forEach((key) => {
    config[key] = Array(4).fill(["black-violet"]);
  });

  // ---------------------- HELPERS ------------------------

  const changeColor = (el, color) => {
    el.setAttribute("data-scroll-color", color);
    el.setAttribute("data-hover-color", "");
  };

  const blockTracking = (el, color, position, top, bottom, h) => {
    if (!position) return changeColor(el, color);

    if (position === "top" && top <= 0 && bottom >= 0) {
      changeColor(el, color);
    }

    if (position === "bottom" && top <= h && bottom >= h) {
      changeColor(el, color);
    }
  };

  // ---------------------- EFFECT ------------------------

  useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;

        LocomotiveScrollRef.current = new LocomotiveScroll({
          el: document.querySelector("[data-scroll-container]") ?? undefined,
          ...scrollRouteConfigMap[route],
        });

        const trigers = document.querySelectorAll("[data-triger]");
        const navItems = document.querySelectorAll(".navigation > div");
        const membershipJoin = document.querySelector("[data-membership-join]");
        const selfieChallengeBtn = document.querySelector(
          "[data-selfie-challenge-btn]"
        );
        const typeFormBtn = document.querySelector("[data-btn-type-form]");
        const typeFormSection = document.querySelector(
          '[data-triger="typeForm"]'
        );

        const h = window.innerHeight - 1;

        const activeNavItem = (triger, arg) => {
          const trigerValue = triger.dataset.triger;
          const top = triger.getBoundingClientRect().top;
          const bottom = triger.getBoundingClientRect().bottom;

          if (config[trigerValue]) {
            config[trigerValue].forEach((args, index) => {
              if (navItems[index]) {
                blockTracking(navItems[index], ...args, top, bottom, h);
              }
            });
          } else if (trigerValue === "collapsible") {
            bottom - arg.scroll.y - 100 <= h
              ? triger.classList.add("isActive")
              : triger.classList.remove("isActive");
          }
        };

        const handleTypeFormBtnPosition = () => {
          const btnTop = typeFormBtn.getBoundingClientRect().top;
          const sectionTop = typeFormSection.getBoundingClientRect().top - 500;

          if (btnTop > sectionTop) {
            typeFormBtn.classList.add("isHide");
          } else {
            typeFormBtn.classList.remove("isHide");
          }
        };

        // Scroll event for trigers
        trigers.length > 0 &&
          navItems.length > 0 &&
          LocomotiveScrollRef.current.on("scroll", (arg) =>
            trigers.forEach((triger) => activeNavItem(triger, arg))
          );

        // Scroll event for btn (type form)
        typeFormBtn &&
          typeFormSection &&
          LocomotiveScrollRef.current.on("scroll", handleTypeFormBtnPosition);

        // Scroll event for join btn
        membershipJoin &&
          LocomotiveScrollRef.current.on("scroll", (arg) =>
            arg.scroll.y >= arg.limit.y - 200
              ? setCounterClicks(1)
              : setCounterClicks(0)
          );

        // Scroll event for moving button
        if (selfieChallengeBtn) {
          const heightBtn = selfieChallengeBtn.clientHeight;
          const colBtnsInWindow = Math.floor(h / heightBtn);
          const placedBtn = parseInt(selfieChallengeBtn.dataset.colBtns, 10);
          const positionBtn = parseInt(
            selfieChallengeBtn.dataset.topPosition,
            10
          );

          LocomotiveScrollRef.current.on("scroll", (arg) => {
            const { limit, scroll } = arg;

            const initialTranslateX = placedBtn * 100;
            const progress = scroll.y / limit.y;
            const translateX =
              initialTranslateX +
              progress * (colBtnsInWindow - placedBtn) * 100;

            selfieChallengeBtn.style.transform = `translate(-50%, ${translateX}%)`;
          });
        }

        setIsReady(true);
      } catch (error) {
        throw Error(`Scroll: ${error}`);
      }
    })();

    return () => {
      if (LocomotiveScrollRef.current) {
        LocomotiveScrollRef.current.destroy();
      }

      setIsReady(false);
    };
  }, []);

  useEffect(() => {
    if (LocomotiveScrollRef.current) {
      LocomotiveScrollRef.current.update();
    }
  }, [height, route]);

  return (
    <SmoothScrollContext.Provider
      value={{ scroll: LocomotiveScrollRef.current, isReady }}
    >
      {children}
    </SmoothScrollContext.Provider>
  );
};

SmoothScrollContext.displayName = "SmoothScrollContext";
SmoothScrollProviderWithouDestroy.displayName =
  "SmoothScrollProviderWithouDestroy";
