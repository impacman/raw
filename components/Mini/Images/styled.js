/** @format */

import styled from 'styled-components';
import { mobVw, desVw } from '@/context/convertPxToVw';

export const ImagesCom = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  pointer-events: none;
`;

const Img = styled.div`
  position: absolute;
  /* overflow: hidden; */

  & div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

export const Img1 = styled(Img)`
  @media only screen and (min-width: 441px) {
    width: ${desVw.mini(136)};
    height: ${desVw.mini(109)};

    .step-2 & {
      left: ${desVw.mini(136)};
      bottom: ${desVw.mini(65)};
    }

    .step-3 & {
      left: ${desVw.mini(111)};
      bottom: ${desVw.mini(-21)};
    }
  }

  @media only screen and (max-width: 440px) {
    width: ${mobVw.mini(91)};
    height: ${mobVw.mini(73)};

    .step-2 & {
      left: ${mobVw.mini(36)};
      bottom: ${mobVw.mini(89)};
    }

    .step-3 & {
      left: ${mobVw.mini(-8)};
      bottom: ${mobVw.mini(340)};
    }
  }
`;

export const Img2 = styled(Img)`
  @media only screen and (min-width: 441px) {
    width: ${desVw.mini(104)};
    height: ${desVw.mini(105)};

    .step-2 & {
      top: ${desVw.mini(292)};
      left: ${desVw.mini(52)};
    }

    .step-3 & {
      top: ${desVw.mini(238)};
      left: ${desVw.mini(50)};
    }
  }

  @media only screen and (max-width: 440px) {
    width: ${mobVw.mini(70)};
    height: ${mobVw.mini(76)};

    .step-2 & {
      top: ${mobVw.mini(119)};
      left: ${mobVw.mini(46)};
    }

    .step-3 & {
      top: ${mobVw.mini(20)};
      right: 0;
    }
  }
`;

export const Img3 = styled(Img)`
  @media only screen and (min-width: 441px) {
    width: ${desVw.mini(122)};
    height: ${desVw.mini(145)};

    .step-2 & {
      top: ${desVw.mini(-26)};
      right: ${desVw.mini(211)};
    }

    .step-3 & {
      top: ${desVw.mini(55)};
      right: ${desVw.mini(409)};
    }
  }

  @media only screen and (max-width: 440px) {
    width: ${mobVw.mini(82)};
    height: ${mobVw.mini(80)};

    .step-2 & {
      top: ${mobVw.mini(53)};
      right: ${mobVw.mini(101)};
    }

    .step-3 & {
      display: none;
    }
  }
`;

export const Img4 = styled(Img)`
  @media only screen and (min-width: 441px) {
    width: ${desVw.mini(124)};
    height: ${desVw.mini(99)};

    .step-2 & {
      right: ${desVw.mini(85)};
      bottom: ${desVw.mini(65)};
    }

    .step-3 & {
      right: ${desVw.mini(-39)};
      bottom: ${desVw.mini(328)};
    }
  }

  @media only screen and (max-width: 440px) {
    width: ${mobVw.mini(103)};
    height: ${mobVw.mini(83)};

    .step-2 & {
      right: ${mobVw.mini(50)};
      bottom: ${mobVw.mini(43)};
    }

    .step-3 & {
      top: ${mobVw.mini(310)};
      right: ${mobVw.mini(18)};
    }
  }
`;
