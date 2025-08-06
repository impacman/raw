/** @format */

import { ROUTES } from "../routes";

const themes = {
  default: {
    color: "violet",
    colorInvert: "black",
    colorMobile: "black",
    colorHoverBottomNav: "black",
    colorPreloader: {
      lines: "white",
      logo: "white",
      loading: "black",
    },
  },
  blackViolet: {
    color: "black",
    colorInvert: "violet",
    colorMobile: "violet",
    colorHoverBottomNav: "violet",
    colorPreloader: {
      lines: "white",
      logo: "white",
      loading: "violet",
    },
  },
  whiteViolet: {
    color: "white",
    colorInvert: "violet",
    colorMobile: "violet",
    colorHoverBottomNav: "violet",
    colorPreloader: {
      lines: "black",
      logo: "black",
      loading: "violet",
    },
  },
  nero: {
    color: "nero",
    colorInvert: "nero",
    colorMobile: "nero",
    colorHoverBottomNav: "nero",
    colorPreloader: {
      lines: "nero",
      logo: "nero",
      loading: "nero",
    },
  },
};

const pagesColors = Object.entries(ROUTES).reduce((acc, [key, { route, theme, themeSettings }]) => {
  acc[route] = {
    ...(themes[theme] ?? themes.default),
    page: route,
    ...themeSettings,
  };
  return acc;
}, {});

export default pagesColors;
