/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import { mobVw, desVw } from "@/context/convertPxToVw";

export const MiniCom = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-black);
  color: var(--color-white);
  font-family: var(--font-poppins);
  text-transform: uppercase;
  z-index: 379;
  line-height: 1;
  font-weight: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 440px) {
    grid-gap: ${mobVw.mini(18)};
  }

  @media only screen and (min-width: 441px) {
    grid-gap: ${desVw.mini(4)};
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 440px) {
      width: 80vw;
    }

    @media only screen and (min-width: 441px) {
    }
  }

  & a {
    text-align: center;

    &.active-mobile {
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 440px) {
    font-size: ${mobVw.mini(28)};

    & a {
      transition: color 0.1s ease 0s;

      &[data-tap-color="violet"] {
        &:active {
          color: var(--color-violet);
        }
      }

      &[data-tap-color="black"] {
        &:active {
          color: var(--color-black);
        }
      }
    }
  }

  @media only screen and (min-width: 441px) {
    font-size: ${desVw.mini(64)};
  }
`;
