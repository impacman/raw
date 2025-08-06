/** @format */

export const desVw = {
  mini: (pix) => `${(pix / 1200) * 100}vw`,
  selfiechallenge: (pix) => `${(pix / 1200) * 100}vw`,
};

export const mobVw = {
  promo: (pix) => `${(pix / 414) * 100}vw`,
  mini: (pix) => `${(pix / 414) * 100}vw`,
  selfiechallenge: (pix, number = false) =>
    !number ? `${(pix / 414) * 100}vw` : (pix / 414) * 100,
  ambassadors: (pix) => `${(pix / 777) * 100}vw`,
};

export const mobVh = {
  promo: (pix) => `${(pix / 874) * 100}vh`,
};
