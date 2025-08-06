import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Country = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background-color: inherit;
  color: inherit;
  border-style: solid;
  border-color: var(--color-orchid);
  transition-property: border-color, color;
  transition-timing-function: ease;
  transition-duration: 0.2s;
  z-index: 9;

  @media only screen and (min-width: 576px) {
    border-radius: 1.54vw;
  }

  @media only screen and (max-width: 575px) {
    border-radius: 4.26vw;
  }
`;

export const CountryHead = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;

  display: flex;
  align-items: center;
  justify-content: center;

  transition-duration: 0.1s;
  transition-property: background-color;
  transition-timing-function: ease;

  &.isActive {
    background-color: var(--color-snuff);
  }

  @media only screen and (min-width: 576px) {
    padding: 0 1vw;
    min-width: 12.12vw;
    font-size: var(--fz-50-des);
    grid-gap: 0.8vw;
  }

  @media only screen and (max-width: 575px) {
    padding: 0 4vw;
    min-width: 27.73vw;
    font-size: var(--fz-15-min-mob);
    grid-gap: 2vw;
  }

  @media (hover: hover) {
    cursor: pointer;
    transition-duration: 0.3s;

    &:hover {
      background-color: var(--color-snuff);
    }
  }
`;

export const CountryHeadArrow = styled.svg`
  height: auto;
  transition: transform 0.3s ease 0s;

  &.isTransform {
    transform: scaleY(-1);
  }

  @media only screen and (min-width: 576px) {
    width: 1.8vw;
  }

  @media only screen and (max-width: 575px) {
    width: 5vw;
  }
`;

export const CountryBody = styled(motion.div)`
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
  border: inherit;
  border-radius: inherit;
  background-color: var(--color-snuff);

  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 576px) {
    top: calc(100% + 0.6vw);
    padding: calc(2.72vw / 2) calc(2.72vw / 2);
    grid-gap: calc(2.72vw / 8);
    font-size: var(--fz-40-des);
  }

  @media only screen and (max-width: 575px) {
    top: calc(100% + 1vw);
    padding: calc(6.4vw / 2) calc(6.4vw / 2);
    grid-gap: calc(6.4vw / 8);
    font-size: var(--fz-15-min-mob);
  }

  & span {
    border-radius: inherit;
    transition-duration: 0.1s;
    transition-property: background-color;
    transition-timing-function: ease;

    @media only screen and (min-width: 576px) {
      padding: calc(2.72vw / 6) calc(2.72vw / 4);
    }

    @media only screen and (max-width: 575px) {
      padding: calc(6.4vw / 6) calc(6.4vw / 4);
    }

    @media (hover: hover) {
      cursor: pointer;
      transition-duration: 0.3s;

      &:hover {
        background-color: var(--color-white);
      }
    }
  }
`;

export const CodeCountry = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  transition: color 0.2s ease 0s;
  font-family: var(--font-poppins);

  .isError & {
    color: var(--color-free-speech-red);
  }

  @media only screen and (min-width: 576px) {
    padding: 0 0.5vw 0 1.98vw;
  }

  @media only screen and (max-width: 575px) {
    padding: 0 2vw 0 5.33vw;
  }
`;
