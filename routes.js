/** @format */

export const ROUTES = {
  HOME: {
    route: "/",
    scrollPage: false,
  },
  PRELOADER: {
    route: "/preloader",
    scrollPage: false,
  },
  LOGIN: {
    route: "/login",
    scrollPage: false,
  },
  DOWNLOAD: {
    route: "/download",
    scrollPage: false,
    theme: "blackViolet",
    themeSettings: {
      colorMobile: "black",
    },
  },
  FAQ: {
    route: "/faq",
    scrollPage: true,
    theme: "blackViolet",
    themeSettings: {
      colorMobile: "black",
    },
  },
  GUIDELINES: {
    route: "/guidelines",
    scrollPage: true,
    themeSettings: {
      colorMobile: "violet",
    },
  },
  PRIVACY_POLICY: {
    route: "/privacy-policy",
    scrollPage: true,
    theme: "whiteViolet",
    themeSettings: {
      color: "white",
    },
  },
  SOCIALS: {
    route: "/socials",
    scrollPage: false,
    themeSettings: {
      colorMobile: "violet",
    },
  },
  DM_US: {
    route: "/dm-us",
    scrollPage: true,
    theme: "blackViolet",
    themeSettings: {
      colorMobile: "black",
    },
  },
  TERMS_CONDITIONS: {
    route: "/terms-conditions",
    scrollPage: true,
    themeSettings: {
      colorMobile: "violet",
    },
  },
  PARTNERSHIP: {
    route: "/partnership",
    scrollPage: true,
    theme: "blackViolet",
  },
  AMBASSADORS: {
    route: "/ambassadors",
    scrollPage: true,
    theme: "whiteViolet",
  },
  AMBASSADORS_TERMS_CONDITIONS: {
    route: "/ambassadors/terms-conditions",
    scrollPage: true,
    theme: "whiteViolet",
  },
  MEMBERSHIP: {
    route: "/membership",
    scrollPage: true,
    theme: "blackViolet",
    themeSettings: {
      colorHoverBottomNav: "black",
    },
  },
  MEMBERSHIP_PRIVACY_POLICY: {
    route: "/membership/privacy-policy",
    scrollPage: true,
    theme: "blackViolet",
  },
  MOSTWANTED: {
    route: "/mostwanted",
    scrollPage: true,
    theme: "whiteViolet",
  },
  MOSTWANTED_DONE: {
    route: "/mostwanted/done",
    scrollPage: false,
    theme: "whiteViolet",
  },
  MOSTWANTED_PRIVACY_POLICY: {
    route: "/mostwanted/privacy-policy",
    scrollPage: true,
    theme: "whiteViolet",
  },
  UNSUBSCRIBE: {
    route: "/unsubscribe",
    scrollPage: false,
    theme: "whiteViolet",
  },
  GETRAW: {
    route: "/getraw",
    scrollPage: true,
    theme: "whiteViolet",
  },
  GETRAW_SNAP: {
    route: "/getrawsnap",
    scrollPage: true,
    theme: "whiteViolet",
  },
  GETRAW_SNAP_2: {
    route: "/getrawsnap2",
    scrollPage: true,
    theme: "whiteViolet",
  },
  GETRAW_TT: {
    route: "/getrawtt",
    scrollPage: true,
    theme: "whiteViolet",
  },
  GETRAW_TT_2: {
    route: "/getrawtt2",
    scrollPage: true,
    theme: "whiteViolet",
  },
  GETRAW_FB: {
    route: "/getrawfb",
    scrollPage: true,
    theme: "whiteViolet",
  },
  GETRAW_PIN: {
    route: "/getrawpin",
    scrollPage: true,
    theme: "whiteViolet",
  },
  GETRAW_RD: {
    route: "/getrawrd",
    scrollPage: true,
    theme: "whiteViolet",
  },
  GETRAW_RD_2: {
    route: "/getrawrd2",
    scrollPage: true,
    theme: "whiteViolet",
  },
  GETRAW_ALL: {
    route: "/getrawall",
    scrollPage: true,
    theme: "whiteViolet",
  },
  WEB_2_APP_TT: {
    route: "/web2app/tt/opt2",
    scrollPage: true,
    theme: "whiteViolet",
  },
  TARAW: {
    route: "/taraw",
    scrollPage: false,
    theme: "nero",
  },
  TARAW_TT: {
    route: "/taraw/tt",
    scrollPage: false,
    theme: "nero",
  },
  TARAW_GG: {
    route: "/taraw/gg",
    scrollPage: false,
    theme: "nero",
  },
  HERAW: {
    route: "/heraws",
    scrollPage: true,
    theme: "whiteViolet",
  },
  GHOSTING: {
    route: "/ghost-bust",
    scrollPage: true,
    theme: "blackViolet",
  },
  RAWEXZOO: {
    route: "/raw-exzoo",
    scrollPage: false,
    theme: "whiteViolet",
  },
  CHILD_SAFETY: {
    route: "/child-safety",
    scrollPage: true,
    themeSettings: {
      colorMobile: "violet",
    },
  },
  PROMO: {
    route: "/promo",
    scrollPage: false,
    theme: "whiteViolet",
  },
  PRIZEDROP: {
    route: "/prizedrop",
    scrollPage: true,
    theme: "whiteViolet",
  },
  PRIZEDROP_TERMS_CONDITIONS: {
    route: "/prizedrop/terms-conditions",
    scrollPage: true,
    theme: "whiteViolet",
  },
  SELFIECHALLENGE: {
    route: "/selfiechallenge",
    scrollPage: true,
    themeSettings: {
      color: "violet",
    },
  },
  SELFIECHALLENGE_TERMS_CONDITIONS: {
    route: "/selfiechallenge/terms-conditions",
    scrollPage: true,
    theme: "whiteViolet",
  },
};

export const EXCLUDED_ROUTES_PRELOADER = [
  ROUTES.UNSUBSCRIBE.route,
  ROUTES.TARAW.route,
  ROUTES.TARAW_GG.route,
  ROUTES.TARAW_TT.route,
  ROUTES.DM_US.route,
  ROUTES.GETRAW_FB.route,
  ROUTES.GETRAW_SNAP.route,
  ROUTES.GETRAW_SNAP_2.route,
  ROUTES.GETRAW_TT.route,
  ROUTES.GETRAW_TT_2.route,
  ROUTES.GETRAW_PIN.route,
  ROUTES.GETRAW_RD.route,
  ROUTES.GETRAW_RD_2.route,
  ROUTES.GETRAW_ALL.route,
  ROUTES.WEB_2_APP_TT.route,
  ROUTES.HERAW.route,
  ROUTES.GHOSTING.route,
  ROUTES.RAWEXZOO.route,
  ROUTES.PROMO.route,
];

export const EXCLUDED_ROUTES_PAGE_TRANSITION = [ROUTES.RAWEXZOO.route];

export const EXCLUDED_ROUTES_ALL_IMAGES = [
  ROUTES.RAWEXZOO.route,
  ROUTES.PRIZEDROP.route,
  ROUTES.SELFIECHALLENGE.route,
  ROUTES.SELFIECHALLENGE_TERMS_CONDITIONS.route,
  ROUTES.AMBASSADORS_TERMS_CONDITIONS.route,
];

export const REDIRECT_ROUTES_TO_MAIN = [
  ROUTES.MEMBERSHIP.route,
  ROUTES.MEMBERSHIP_PRIVACY_POLICY.route,
  ROUTES.MOSTWANTED.route,
  ROUTES.MOSTWANTED_PRIVACY_POLICY.route,
  ROUTES.MOSTWANTED_DONE.route,
];
