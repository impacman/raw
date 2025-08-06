import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PreviewAppCom = styled.div`
  position: relative;

  @media only screen and (min-width: 992px) {
    margin-bottom: 11.06vw;
  }

  @media only screen and (max-width: 991px) {
    margin: 10vw 0;
  }
`;

export const Grid = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 992px) {
    grid-gap: 1vw;
  }

  @media only screen and (max-width: 991px) {
    grid-gap: 3.5vw;
  }
`;

export const LinkApp = styled(motion.span)`
  font-family: var(--font-poppins);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: 0.024vw;
  color: var(--color-violet);
  position: relative;
  text-transform: uppercase;

  @media only screen and (min-width: 992px) {
    font-size: var(--fz-40-des);
  }

  @media only screen and (max-width: 991px) {
    font-size: var(--fz-20-mob);
    text-align: center;

    display: flex;
    flex-direction: column;

    &:first-of-type {
      flex-direction: column-reverse;
    }
  }
`;

export const Images = styled.div`
  position: relative;
  overflow: hidden;
  background-color: var(--color-black);

  & #fixed-target {
    position: absolute;
    left: 0;
    right: 0;
  }

  & div[data-scroll-sticky] {
    position: absolute;
    top: -100vh;
    left: 0;
    right: 0;
    height: 100%;
  }

  & span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.01);
  }

  @media only screen and (min-width: 992px) {
    width: 43.59vw;
    height: 100vh;

    & #fixed-target {
      top: -100vh;
      bottom: -100vh;
    }
  }

  @media only screen and (max-width: 991px) {
    width: 67vw;
    height: 90vw;
    margin: 0 auto;

    & #fixed-target {
      top: 0;
      bottom: 0;
    }

    & div[data-scroll-sticky] {
      top: 0;
      transform: none !important;
    }
  }
`;

export const Parallax = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-60%, -50%);
  height: auto;
  width: 100vw;
  padding: 2vw 0;
  pointer-events: none;
`;

export const ParallaxMove = styled.div`
  font-weight: 400;
  line-height: 0.94;
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  white-space: nowrap;

  @media only screen and (min-width: 992px) {
    font-size: var(--fz-252-des);
  }

  @media only screen and (max-width: 991px) {
    font-size: var(--fz-63-mob);
  }
`;
