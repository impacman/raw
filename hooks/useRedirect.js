/** @format */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { ROUTES, REDIRECT_ROUTES_TO_MAIN } from "@/routes";

const findRedirectTo = (route, obj) => {
  const item = Object.values(obj).find((item) => item.route === route && item.redirectTo);
  return item?.redirectTo || null;
};

export const useRedirect = (page = false) => {
  const { route, push } = useRouter();

  useEffect(() => {
    if (REDIRECT_ROUTES_TO_MAIN.includes(route)) {
      push("/");
      return;
    }

    const local = localStorage.getItem("is-passed") === "true";
    const redirectTo = findRedirectTo(route, ROUTES);

    if (!local) push(route);
    else if (redirectTo) push(redirectTo);
  }, [route]);
};
