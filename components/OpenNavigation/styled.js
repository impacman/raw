/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";

export const OpenNavigationCom = styled.div`
  position: absolute;
  height: 100%;

  @media only screen and (min-width: 992px) {
    bottom: 0;
    left: 0;
    width: 100vw;
  }

  @media only screen and (max-width: 991px) {
    right: 50%;
    transform: translateX(50%);
    width: var(--width-s);
    background-color: var(--color-transparent);
    margin-right: -12.9vw;
    z-index: -1;
  }

  @media only screen and (max-width: 575px) {
    margin-right: -15vw;
  }

  @media only screen and (max-width: 440px) {
    margin-right: -20.3vw;
  }
`;

export const Wrapper = styled(motion.div)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  aspect-ratio: 1/1;

  @media only screen and (min-width: 992px) {
    right: var(--side-dimensions);
    width: 49px;
  }

  @media only screen and (max-width: 991px) {
    right: -2vw;
    width: 6.5vw;
  }

  @media only screen and (max-width: 767px) {
    right: -1vw;
    width: 7vw;
  }

  @media only screen and (max-width: 575px) {
    width: 10vw;
  }

  @media only screen and (max-width: 991px) and (max-height: 440px) {
    right: -1.5vw;
    width: 5.5vw;
  }
`;

const Item = styled(motion.span)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  @media only screen and (min-width: 992px) {
    right: 1px;
    width: calc(100% - 2px);
    height: 0.063rem;
  }

  @media only screen and (max-width: 991px) {
    right: 1vw;
    width: calc(100% - 2vw);
    height: 0.05vw;
  }

  @media only screen and (max-width: 575px) {
    height: 0.05rem;
  }

  @media only screen and (max-width: 991px) and (max-height: 440px) {
    height: 0.05rem;
  }
`;

export const ItemLight = styled(Item)`
  background-color: var(--color-white);
`;

export const ItemDark = styled(Item)`
  background-color: var(--color-black);
`;
