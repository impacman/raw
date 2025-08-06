import { motion } from 'framer-motion';
import styled from 'styled-components';
import { vhd, vwm } from '@/context/pxConvert';

export const ContentCom = styled.div`
  position: relative;
  height: 100%;

  @media only screen and (min-width: 576px) {
    width: ${vhd(626)};
    margin: 0 auto;
  }

  @media only screen and (max-width: 575px) {
    width: 100%;
    overflow: hidden;
  }
`;

export const Animation = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Top = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  @media only screen and (min-width: 576px) {
    padding: ${vhd(55.86)} 0;
  }

  @media only screen and (max-width: 575px) {
    padding: ${vwm(25.14)} 0;
  }
`;

export const Logo = styled(motion.div)`
  position: relative;
  line-height: 121.663%;
  text-transform: uppercase;
  transform: translateY(-50%);
  opacity: 0;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    aspect-ratio: 1/1;
    background-color: var(--color-white);
    border-radius: 50%;
  }

  @media only screen and (min-width: 576px) {
    font-size: ${vhd(39.322)};

    &::after,
    &::before {
      width: ${vhd(10.68)};
    }
    &::before {
      left: ${vhd(-50 - 10.68)};
    }
    &::after {
      right: ${vhd(-50 - 10.68)};
    }
  }

  @media only screen and (max-width: 575px) {
    font-size: ${vwm(23.532)};

    &::after,
    &::before {
      width: ${vwm(6.39)};
    }
    &::before {
      left: ${vwm(-30 - 6.39 * 1.9)};
    }
    &::after {
      right: ${vwm(-30 - 6.39 * 2.1)};
    }
  }
`;

export const Descr = styled(motion.p)`
  line-height: 121.663%;
  text-transform: uppercase;
  font-weight: 500;
  position: absolute;

  @media only screen and (min-width: 576px) {
    top: 50vh;
    font-size: ${vhd(23.143)};
    transform: translateY(-50%) scale(1.6);
  }

  @media only screen and (max-width: 575px) {
    top: 49%;
    font-size: ${vwm(15.48)};
    transform: translateY(-50%) scale(1.9);
`;
