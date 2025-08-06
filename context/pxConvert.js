const vh = {
  des: 1080,
  mob: 0,
};

const vw = {
  des: 0,
  mob: 375,
};

const oneScreen = {
  des: 1920,
};

export const vhd = (px = 0) => `${((px * 100) / vh.des).toFixed(3)}vh`;
export const vwm = (px = 0) => `${((px * 100) / vw.mob).toFixed(3)}vw`;
export const vOneScreen = (px = 0) => `${((px * 100) / oneScreen.des).toFixed(3)}vw`;
