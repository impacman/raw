import { motion } from 'framer-motion';
import { vhd, vwm } from '@/context/pxConvert';
import { transition } from '@/context/transition';
import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

export const PredictionCom = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -48%);
  z-index: ${({ $styledIndex }) => $styledIndex};
  display: flex;
  perspective-origin: center;
  perspective: 2000px;
  opacity: 0;

  @media only screen and (min-width: 576px) {
    width: 97%;
    height: 100%;
  }

  @media only screen and (max-width: 575px) {
    width: ${vwm(346.88)};
    height: ${vwm(616.78)};
  }
`;

export const Card = styled(motion.div)`
  position: relative;
  background-color: var(--color-violet);
  width: 100%;
  height: 100%;
  margin: auto;
  transform-style: preserve-3d;

  @media only screen and (min-width: 576px) {
    border-radius: ${vhd(27.67)};
    transform: rotate(0deg) scale(0.61);
  }

  @media only screen and (max-width: 575px) {
    border-radius: ${vwm(16.56)};
    transform: rotate(0deg) scale(0.64);
  }

  &.active {
    ${transition({
      property: 'transform',
    })}

    @media only screen and (min-width: 576px) {
      transform: rotate(7deg) scale(0.61) translateY(-1%);
    }

    @media only screen and (max-width: 575px) {
      transform: rotate(7deg) scale(0.63, 0.65) translateY(-1%);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: inherit;
`;

export const Front = styled(Content)`
  backface-visibility: hidden;
  transform: rotateY(0deg);
  z-index: 2;
  background-color: ${({ $styledColor }) => `var(--color-${$styledColor ? $styledColor : 'violet'})`};
  overflow: hidden;
`;

export const Back = styled(Content)`
  transform: rotateY(-180deg);
  border-style: solid;
  border-color: var(--color-black);
  background-color: inherit;

  @media only screen and (min-width: 576px) {
    padding: ${vhd(54)} ${vhd(51)};
    border-width: ${vhd(1.4)};
  }

  @media only screen and (max-width: 575px) {
    padding: ${vwm(32)} ${vwm(30)};
    border-width: ${vwm(0.9)};
  }
`;

export const BackContent = styled.div`
  width: 100%;
  height: 100%;
  border: inherit;
  background-color: inherit;

  @media only screen and (min-width: 576px) {
    padding: ${vhd(10)} ${vhd(10)} 0;
  }

  @media only screen and (max-width: 575px) {
    padding: ${vwm(6)} ${vwm(7)} 0;
  }
`;

export const Img = styled.div`
  position: relative;
  width: 100%;
  border: inherit;
  background-color: inherit;
  overflow: hidden;

  @media only screen and (min-width: 576px) {
    height: ${vhd(715.46)};
    margin-bottom: ${vhd(70)};
  }

  @media only screen and (max-width: 575px) {
    height: ${vwm(431.28)};
    margin-bottom: ${vwm(28.91)};
  }

  &::after {
    content: attr(data-number);
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
      width: ${vhd(123.84)};
      height: ${vhd(61.92)};
      border-radius: 0 0 ${vhd(100)} ${vhd(100)};
      font-size: ${vhd(35.57)};
    }

    @media only screen and (max-width: 575px) {
      width: ${vwm(74.65)};
      height: ${vwm(37.33)};
      border-radius: 0 0 ${vwm(100)} ${vwm(100)};
      font-size: ${vwm(21.44)};
    }
  }
`;

export const BackDescr = styled.p`
  font-weight: 500;
  line-height: 121.663%;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 576px) {
    font-size: ${vhd(39.75)};
  }

  @media only screen and (max-width: 575px) {
    font-size: ${vwm(23.96)};
  }
`;

export const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 20px);
  height: auto;
  z-index: 2;

  @media only screen and (min-width: 576px) {
    width: calc(100% + ${vhd(20)});
  }

  @media only screen and (max-width: 575px) {
    width: calc(100% + ${vwm(11)});
  }

  & path {
    stroke-dashoffset: 5000;
    stroke-dasharray: 5000;
    animation: ${loading} 2.3s infinite 0s alternate;
  }
`;

export const Animation = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ $styledColor }) => `var(--color-${$styledColor ? $styledColor : 'violet'})`};

  @media only screen and (min-width: 576px) {
    padding: ${vhd(90)} ${vhd(40)};
  }

  @media only screen and (max-width: 575px) {
    padding: ${vwm(56)} ${vwm(24)};
  }
`;

export const Wrap = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  border-style: solid;
  border-color: ${({ $styledColor }) => `var(--color-${$styledColor ? $styledColor : 'white'})`};
  background-color: var(--color-transparent);

  @media only screen and (min-width: 576px) {
    border-width: ${vhd(0.6)};
    padding: ${vhd(39)} ${vhd(39)} ${vhd(39 / 2)};
  }

  @media only screen and (max-width: 575px) {
    border-width: ${vwm(0.6)};
    padding: ${vwm(23)} ${vwm(23)} ${vwm(23 / 2)};
  }

  &::before {
    content: '';
    border: inherit;
    display: block;

    @media only screen and (min-width: 576px) {
      width: ${vhd(147.07)};
      height: ${vhd(214.05)};
      border-radius: ${vhd(9.71)};
      margin-bottom: ${vhd(41.62)};
    }

    @media only screen and (max-width: 575px) {
      width: ${vwm(88.03)};
      height: ${vwm(128.12)};
      border-radius: ${vwm(5.81)};
      margin-bottom: ${vwm(24.91)};
    }
  }
`;

export const Title = styled.div`
  position: absolute;
  color: ${({ $styledColor }) => `var(--color-${$styledColor ? $styledColor : 'white'})`};

  font-weight: 600;
  line-height: 121.663%;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 576px) {
    top: ${vhd(13.5)};
    left: ${vhd(30)};
    font-size: ${vhd(37.83)};

    & span {
      &:not(:first-of-type) {
        margin-left: ${vhd(70)};
      }

      &:nth-of-type(2) {
        margin-top: ${vhd(2)};
      }
    }
  }

  @media only screen and (max-width: 575px) {
    top: ${vwm(8)};
    left: ${vwm(18)};
    font-size: ${vwm(22.66)};

    & span {
      &:not(:first-of-type) {
        margin-left: ${vwm(50)};
      }

      &:nth-of-type(2) {
        margin-top: ${vwm(2)};
      }
    }
  }
`;

export const Descr = styled.p`
  color: ${({ $styledColor }) => `var(--color-${$styledColor ? $styledColor : 'white'})`};
  font-family: var(--font-poppins);
  line-height: 125.556%;
  text-transform: lowercase;
  text-align: center;

  @media only screen and (min-width: 576px) {
    font-size: ${vhd(21.84)};
    margin-bottom: ${vhd(79.29)};
    padding: 0 ${vhd(4)};
  }

  @media only screen and (max-width: 575px) {
    font-size: ${vwm(13.07)};
    margin-bottom: ${({ $styledSpace }) => ($styledSpace ? '47px' : '37px')};
  }
`;

export const Info = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;

  @media only screen and (min-width: 576px) {
    padding: ${vhd(39)} ${vhd(39)} ${vhd(70)};
  }

  @media only screen and (max-width: 575px) {
    padding: ${vwm(23)} ${vwm(23)} ${vwm(20)};
  }
`;

export const Btn = styled(motion.a)`
  width: 100%;
  background-color: ${({ $styledColor }) => `var(--color-${$styledColor ? $styledColor.bg : 'white'})`};
  color: ${({ $styledColor }) => `var(--color-${$styledColor ? $styledColor.text : 'black'})`};
  font-family: var(--font-poppins);
  font-weight: 600;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 576px) {
    height: ${vhd(91.25)};
    margin-bottom: ${vhd(28.53)};
    padding: ${vhd(7)};
    font-size: ${vhd(24.27)};
    border-radius: ${vhd(21.97)};
  }

  @media only screen and (max-width: 575px) {
    height: ${vwm(54.62)};
    margin-bottom: ${vwm(17.08)};
    padding: ${vwm(7)};
    font-size: ${vwm(14.53)};
    border-radius: ${vwm(13.15)};
  }
`;

export const FootNote = styled.p`
  color: ${({ $styledColor }) => `var(--color-${$styledColor ? $styledColor : 'white'})`};
  text-align: center;
  font-weight: 600;
  line-height: 0.9;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 576px) {
    font-size: ${vhd(33.01)};
  }

  @media only screen and (max-width: 575px) {
    font-size: ${vwm(19.76)};

    & span:last-of-type {
      transform: translateX(${vwm(2)});
    }
  }
`;
