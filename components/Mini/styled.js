/** @format */

import styled from 'styled-components';
import { mobVw, desVw } from '@/context/convertPxToVw';

export const MiniCom = styled.div`
  position: relative;
  width: 100%;
`;

export const ScrollSectoin = styled.div`
  position: relative;
  z-index: 9;
  width: 100%;
  color: var(--color-black);
  transition: background-color 0.5s ease 0s;

  @media only screen and (min-width: 441px) {
    &.step-1 {
      padding: calc(var(--height-xl) + ${desVw.mini(55)}) 0 ${desVw.mini(160)};
    }

    &.step-2 {
      padding: ${desVw.mini(199)} 0;
    }

    &.step-3 {
      padding: ${desVw.mini(199)} 0 ${desVw.mini(165)};
    }
  }

  @media only screen and (max-width: 440px) {
    &.step-1 {
      padding: calc(var(--height-xxs) + ${mobVw.mini(30)}) 0 ${mobVw.mini(94)};
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 93vh;
    }

    &.step-2 {
      padding: ${mobVw.mini(207)} 0 ${mobVw.mini(194)};
      text-align: center;
      margin-top: ${mobVw.mini(-50)};
    }

    &.step-3 {
      padding: ${mobVw.mini(44)} 0 ${mobVw.mini(111)};
    }
  }
`;

export const Wrap = styled.div`
  position: relative;
  width: 100%;

  @media only screen and (min-width: 441px) {
    .step-4 & {
      padding: ${desVw.mini(53)} ${desVw.mini(296)} ${desVw.mini(129)} ${desVw.mini(332)};
    }
  }

  @media only screen and (max-width: 440px) {
    .step-4 & {
      padding: ${mobVw.mini(88)} ${mobVw.mini(18)} ${mobVw.mini(150)};
    }
  }
`;

export const Prizes = styled.div`
  position: absolute;
  z-index: -1;

  @media only screen and (min-width: 441px) {
    top: ${desVw.mini(71)};
    left: ${desVw.mini(91)};
    width: ${desVw.mini(478)};
    height: ${desVw.mini(478)};
  }

  @media only screen and (max-width: 440px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + ${mobVw.mini(30)}));
    width: ${mobVw.mini(382)};
    height: ${mobVw.mini(187)};
  }

  & img {
    @media only screen and (min-width: 441px) {
    }

    @media only screen and (max-width: 440px) {
      object-fit: contain;
    }
  }
`;
