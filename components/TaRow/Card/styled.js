import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import styled from 'styled-components';
import { vhd, vwm } from '@/context/pxConvert';
import { transition } from '@/context/transition';

export const CardCom = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -48%);
  border-style: solid;
  border-color: var(--color-transparent);
  opacity: 0;

  @media only screen and (min-width: 576px) {
    border-width: ${vhd(0.6)};
    border-radius: ${vhd(21.36)};
    width: ${vhd(371.34)};
    height: ${vhd(671.53)};
  }

  @media only screen and (max-width: 575px) {
    border-width: ${vwm(0.6)};
    border-radius: ${vwm(12.78)};
    width: ${vwm(222.23)};
    height: ${vwm(401.88)};
  }

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 99.9%;
    height: 99.9%;
    background-color: var(--color-medium-slate-blue);
    border-radius: inherit;
    border: inherit;
    border-color: var(--color-black);

    ${transition({
      property: 'transform',
    })}
  }

  &.active::after {
    transform: translate(-50%, -50%) rotate(3deg);
  }
`;

export const Wrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: var(--color-geraldine);
  border-radius: inherit;
  border: inherit;
  border-color: var(--color-black);

  @media only screen and (min-width: 576px) {
    padding: ${vhd(35.26)} ${vhd(33.2)} ${vhd(33.79)};
  }

  @media only screen and (max-width: 575px) {
    padding: ${vwm(21)} ${vwm(19.5)};
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: inherit;
  border: inherit;

  @media only screen and (min-width: 576px) {
    padding: ${vhd(6.9)} ${vhd(7.7)} 0;
  }

  @media only screen and (max-width: 575px) {
    padding: ${vwm(4.13)} ${vwm(4.65)} 0;
  }
`;

export const Img = styled.div`
  position: relative;
  width: 100%;
  border: inherit;
  background-color: inherit;
  overflow: hidden;

  @media only screen and (min-width: 576px) {
    height: ${vhd(466)};
    margin-bottom: ${vhd(31.21)};
  }

  @media only screen and (max-width: 575px) {
    height: ${vwm(278.61)};
    margin-bottom: ${vwm(18.68)};
  }

  & img {
    transform: scale(1.01);
  }

  &::after {
    content: '1';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: inherit;

    font-family: var(--font-poppins);
    line-height: 121.663%;

    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 576px) {
      width: ${vhd(80.59)};
      height: ${vhd(40.29)};
      border-radius: 0 0 ${vhd(50)} ${vhd(50)};
      font-size: ${vhd(23.143)};
    }

    @media only screen and (max-width: 575px) {
      width: ${vwm(48.23)};
      height: ${vwm(24.11)};
      border-radius: 0 0 ${vwm(50)} ${vwm(50)};
      font-size: ${vwm(13.85)};
    }
  }
`;

export const Descr = styled.p`
  width: 100%;
  font-weight: 500;
  line-height: 121.663%;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 576px) {
    font-size: ${vhd(25.866)};
  }

  @media only screen and (max-width: 575px) {
    font-size: ${vwm(15.48)};
  }
`;

export const Pacman = styled(Lottie)`
  position: absolute;
  left: 50%;

  width: 100%;
  aspect-ratio: 1/1;

  @media only screen and (min-width: 576px) {
    top: ${vhd(87.2)};
    transform: translateX(-51.2%) scale(2.025);
  }

  @media only screen and (max-width: 575px) {
    top: ${vwm(51)};
    transform: translateX(-51.2%) scale(2.04);
  }
`;
