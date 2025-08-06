/** @format */

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { mobVw, desVw } from '@/context/convertPxToVw';

const Btn = styled.div`
  position: fixed;
  z-index: 299;

  @media only screen and (min-width: 441px) {
    right: ${desVw.mini(30)};
    bottom: ${desVw.mini(30)};
  }

  @media only screen and (max-width: 440px) {
    width: calc(100% - ${mobVw.mini(18 * 2)});
    left: 50%;
  }
`;

export const BtnNoMove = styled(Btn)`
  @media only screen and (max-width: 440px) {
    transform: translateX(-50%);
    bottom: ${mobVw.selfiechallenge(40)};
  }
`;

export const BtnMove = styled(Btn)`
  @media only screen and (max-width: 440px) {
    top: -${({ $styledTopPosition }) => $styledTopPosition};
    transform: translate(-50%, calc(100% * ${({ $styledColBtns }) => $styledColBtns}));
    padding: 0 0 ${mobVw.selfiechallenge(80)};
  }
`;

export const Wrap = styled(motion.div)`
  position: relative;
  width: 100%;
  background-color: var(--color-black);
  color: var(--color-white);
  font-family: var(--font-poppins);
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;

  @media only screen and (min-width: 441px) {
    font-size: ${desVw.mini(24)};
    letter-spacing: ${desVw.mini(-0.72)};
  }

  @media only screen and (max-width: 440px) {
    font-size: ${mobVw.mini(24.716)};
    letter-spacing: ${mobVw.mini(-0.741)};
  }

  & span,
  & a {
    display: block;

    @media only screen and (min-width: 441px) {
      padding: ${desVw.mini(20)} ${desVw.mini(30)};
    }

    @media only screen and (max-width: 440px) {
      padding: ${mobVw.mini(21)};
    }
  }
`;
