import { motion } from "framer-motion";
import styled from "styled-components";

export const StartCom = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--color-white);
  display: flex;

  @media only screen and (min-width: 576px) {
    /* height: 49.083vw; */
    min-height: 100vh;
    padding: 9.25vw 0 20vw 2.833vw;
    justify-content: space-between;
  }

  @media only screen and (max-width: 575px) {
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    padding: 0 3.089vw 7.465vw;
  }
`;

export const Title = styled.h1`
  position: relative;
  z-index: 2;
  color: var(--color-black);
  font-family: var(--font-poppins);
  text-transform: uppercase;
  line-height: 0.86;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 576px) {
    width: 62vw;
    font-size: 5.333vw;

    & br {
      display: none;
    }
  }

  @media only screen and (max-width: 575px) {
    font-size: 10.057vw;
    text-align: center;
    letter-spacing: -0.3vw;
    margin-bottom: 19.048vw;
  }

  & span {
    &:first-of-type {
      font-weight: 500;
    }

    &:last-of-type {
      font-weight: 200;
      color: var(--color-violet);
    }
  }
`;

export const Img = styled.div`
  overflow: hidden;

  @media only screen and (min-width: 576px) {
    position: absolute;
    z-index: 1;
    top: 0;
    height: 100%;
    width: 37.333vw;
    right: 12.333vw;
  }

  @media only screen and (max-width: 575px) {
    position: relative;
    width: 57.658vw;
    height: 99.614vw;
    order: -1;
    margin-bottom: 4.891vw;
  }
`;

export const WrapBtn = styled.div`
  @media only screen and (min-width: 576px) {
    position: absolute;
    z-index: 3;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1.333vw;
  }

  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`;

export const Btn = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-violet);
  color: var(--color-white);
  text-transform: uppercase;
  font-weight: 600;

  @media only screen and (min-width: 576px) {
    width: 37.5vw;
    height: 6.833vw;
    border-radius: 1.667vw;
    font-size: 1.703vw;
  }

  @media only screen and (max-width: 575px) {
    width: 100%;
    height: 17.117vw;
    border-radius: 4.266vw;
    font-size: 4.266vw;
  }
`;
