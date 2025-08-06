import { motion } from 'framer-motion';
import styled from 'styled-components';

export const DownloadCom = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  overflow-x: auto;
  background-color: inherit;
  z-index: 299;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QrCodeWrap = styled.div`
  @media only screen and (min-width: 992px) {
    position: relative;
    width: 22.89vw;
    height: 22.89vw;
    margin-bottom: 2.62vw;
  }
`;

export const QrCode = styled(motion.div)`
  @media only screen and (min-width: 992px) {
    width: 100%;
    height: 100%;

    & svg {
      width: inherit;
      height: inherit;
    }
  }
`;

export const WrapperEls = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const DownloadEl = styled.a`
  display: flex;
  flex-direction: column;
  font-family: var(--font-poppins);
  font-weight: 100;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
  cursor: pointer;

  @media only screen and (min-width: 992px) {
    font-size: var(--fz-200-des);
    height: var(--fz-200-des);
    margin: 0 5.63vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: var(--fz-80-tab);
    height: var(--fz-80-tab);
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-63-mob);
    height: var(--fz-63-mob);
  }

  & span {
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: var(--hover-time-animation);
    transform-origin: top center;

    &.second {
      font-family: var(--font-podkova);
      transform: scaleY(0.2);
      opacity: 0;
    }
  }

  @media (hover: hover) {
    &:hover span {
      &.first {
        transition-delay: 0.1s;
        transform: scaleY(0.2) translateY(-100%);
        opacity: 0;
      }

      &.second {
        transform: scaleY(1) translateY(-100%);
        opacity: 1;
      }
    }
  }

  &:active {
    @media only screen and (min-width: 992px) {
      color: var(--color-eclipse);
    }

    @media only screen and (max-width: 991px) {
      color: var(--color-violet);
    }
  }
`;
