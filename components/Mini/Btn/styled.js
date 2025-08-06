/** @format */

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { mobVw, desVw } from '@/context/convertPxToVw';

export const BtnCom = styled.div`
  position: fixed;
  z-index: 299;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (min-width: 441px) {
    bottom: ${desVw.mini(30)};
  }

  @media only screen and (max-width: 440px) {
    width: calc(100% - ${mobVw.mini(18 * 2)});
    bottom: ${mobVw.mini(35)};
  }
`;

export const Wrap = styled(motion.div)`
  position: relative;
  width: 100%;
  background-color: var(--color-violet);
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
      padding: ${desVw.mini(20)} ${desVw.mini(85)};
    }

    @media only screen and (max-width: 440px) {
      padding: ${mobVw.mini(21)};
    }
  }
`;
