import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { vhd, vwm } from '@/context/pxConvert';

const rotate = keyframes`
  100% {
    transform: rotate(-360deg);
  }
`;

const Icons = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: var(--color-transparent);
  z-index: 1;

  display: flex;
  flex-wrap: wrap;
`;

export const IconsCom = styled(Icons)`
  @media only screen and (min-width: 576px) {
    width: calc(100% - ${vhd(25 * 2)});
    height: calc(100% - ${vhd(38 * 2)});
  }

  @media only screen and (max-width: 575px) {
    width: calc(100% - ${vhd(15 * 2)});
    height: calc(100% - ${vhd(16 * 2)});
  }

  & svg {
    @media only screen and (min-width: 576px) {
      width: ${vhd(98)};
      height: ${vhd(98)};
    }

    @media only screen and (max-width: 575px) {
      width: ${vwm(59.56)};
      height: ${vwm(59.56)};
    }
  }
`;

export const IconsComPrediction = styled(Icons)`
  @media only screen and (min-width: 576px) {
    padding: ${vhd(11)} ${vhd(9)};
  }

  @media only screen and (max-width: 575px) {
    padding: ${vhd(8)} ${vhd(7)};
  }

  & svg {
    @media only screen and (min-width: 576px) {
      width: ${vhd(68)};
      height: ${vhd(68)};
    }

    @media only screen and (max-width: 575px) {
      width: ${vwm(38)};
      height: ${vwm(38)};
    }
  }
`;

const PositionIcon = styled.div`
  display: flex;
  width: 50%;
  height: 50%;
`;

export const TL = styled(PositionIcon)`
  & svg {
    position: absolute;
    top: 50%;
    left: 50%;

    @media only screen and (min-width: 576px) {
      transform: translate(-250%, 150%) scale(0.8);
    }

    @media only screen and (max-width: 575px) {
      transform: translate(-274%, 124%) scale(0.8);
    }

    & path {
      transform-origin: center;
      animation: ${rotate} ${({ $styledRotate }) => ($styledRotate ? '1s' : '0s')} linear 0s infinite;
    }
  }
`;

export const TLP = styled(PositionIcon)`
  align-items: flex-start;
`;

export const TR = styled(PositionIcon)`
  & svg {
    position: absolute;
    top: 50%;
    right: 50%;

    @media only screen and (min-width: 576px) {
      transform: translate(120%, -88%) rotate(-10deg) scale(0.8);
    }

    @media only screen and (max-width: 575px) {
      transform: translate(95%, -89%) rotate(-10deg) scale(0.8);
    }
  }
`;

export const TRP = styled(PositionIcon)`
  align-items: flex-start;
  justify-content: flex-end;
`;

export const BL = styled(PositionIcon)`
  & svg {
    position: absolute;
    bottom: 50%;
    left: 50%;

    @media only screen and (min-width: 576px) {
      transform: translate(-180%, -100%) scale(0.8);
    }

    @media only screen and (max-width: 575px) {
      transform: translate(-232%, -100%) scale(0.8);
    }

    & path {
      transform-origin: center;
      animation: ${rotate} ${({ $styledRotate }) => ($styledRotate ? '1s' : '0s')} linear 0s infinite;
    }
  }
`;

export const BLP = styled(PositionIcon)`
  align-items: flex-end;
  justify-content: flex-start;
`;

export const BR = styled(PositionIcon)`
  & svg {
    position: absolute;
    bottom: 50%;
    right: 50%;

    @media only screen and (min-width: 576px) {
      transform: translate(170%, 130%) scale(0.8);
    }

    @media only screen and (max-width: 575px) {
      transform: translate(236%, 106%) scale(0.8);
    }

    & path {
      transform-origin: center;
      animation: ${rotate} ${({ $styledRotate }) => ($styledRotate ? '1s' : '0s')} linear 0s infinite;
    }
  }
`;

export const BRP = styled(PositionIcon)`
  align-items: flex-end;
  justify-content: flex-end;
`;
