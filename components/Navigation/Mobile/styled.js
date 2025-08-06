/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";

export const MobileCom = styled(motion.nav)`
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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 991px) {
    font-weight: 100;
    font-size: var(--fz-70-tab);
    line-height: 1.25;

    & > div {
      &:nth-child(1) {
        order: 2;
      }

      &:nth-child(2) {
        order: 1;
      }

      &:nth-child(3) {
        order: 3;
      }

      &:nth-child(4) {
        order: 4;
      }
    }

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

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-61-mob);
  }
`;

export const Wrapper = styled.div`
  @media only screen and (max-width: 991px) {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    font-size: var(--fz-26-tab);
    line-height: 2;
    padding: 2.78vw 1.73vw 1.91vw;

    display: flex;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-23-mob);
  }
`;

export const BottomItem = styled(motion.div)`
  @media only screen and (max-width: 991px) {
    width: 50%;
    flex: 0 0 50%;
    display: flex;
    padding: 1vw 0;
    margin-bottom: 1vw;

    &:nth-of-type(even) {
      justify-content: flex-end;
    }
  }

  @media only screen and (max-width: 575px) {
    padding: 0.86vw 0;
    margin-bottom: 2.95vw;
  }
`;
