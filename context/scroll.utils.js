/** @format */

import { ROUTES } from "../routes";

const defaultPage = {
  smooth: true,
  multiplier: 0.9,
  lerp: 0.1,
  touchMultiplier: 3,
  smartphone: {
    smooth: true,
  },
  tablet: {
    smooth: true,
  },
};

const scrollRouteConfigMap = Object.entries(ROUTES).reduce((acc, { 1: { route, scrollPage } }) => {
  scrollPage && (acc[route] = defaultPage);
  return acc;
}, {});

export default scrollRouteConfigMap;
