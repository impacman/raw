import { motion } from "framer-motion";
import styled from "styled-components";
import { mobVw } from "@/context/convertPxToVw";

export const AmbassadorsCom = styled.div`
  position: relative;
  background-color: var(--color-white);

  & [data-scroll-repeat] {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 113%;
      height: 100%;
      background-color: var(--color-white);
      transition: transform 1.3s;
      transform-origin: center top;
    }

    &.is-inview::after {
      transform: scaleY(0);
    }
  }

  & img {
    transform: translate(-50%, -50%) scale(1.05);
  }
`;

export const WrapTypeForm = styled.div`
  position: relative;
  background-color: var(--color-violet);

  @media only screen and (min-width: 992px) {
    /* padding: 1vw 0 12vw; */
    padding: 0 0 12vw;
  }

  @media only screen and (max-width: 991px) {
    /* padding: 3vw 0 8vw; */
    padding: 0 0 8vw;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    background-color: var(--color-white);

    @media only screen and (min-width: 992px) {
      height: 13vw;
    }

    @media only screen and (max-width: 991px) {
      height: 9vw;
    }
  }
`;

export const WrapBtn = styled.div`
  position: fixed;
  z-index: 333;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (min-width: 576px) {
    bottom: 1.333vw;
  }

  @media only screen and (max-width: 575px) {
    width: 100%;
    bottom: 0;
    padding: 0 ${mobVw.ambassadors(24)} ${mobVw.ambassadors(24)};
  }

  transition: transform 0.3s ease 0.3s, opacity 0.3s ease 0s;
  &.isHide {
    transition: transform 0.3s ease, opacity 0.3s ease 0.3s;
    transform: translate(-50%, 150%);
    opacity: 0;
    pointer-events: none;
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
