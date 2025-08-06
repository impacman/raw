import Link from 'next/link';
import styled from 'styled-components';

export const MostWantedDoneCom = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 576px) {
    justify-content: center;
  }

  @media only screen and (max-width: 575px) {
    padding: 38.5vw 6.4vw 6.4vw;
  }
`;

export const WrapTexts = styled.div`
  position: relative;
  color: var(--color-black);
  font-family: var(--font-poppins);
  text-transform: uppercase;
  line-height: 1.4;

  @media only screen and (min-width: 576px) {
    font-size: var(--fz-46-des);
    font-weight: 200;
  }

  @media only screen and (max-width: 575px) {
    width: 100%;
    font-size: var(--fz-20-min-mob);
    margin-bottom: 23.2vw;
    font-weight: 300;
  }
`;

export const Text = styled.p`
  &:first-of-type {
    @media only screen and (min-width: 576px) {
      margin-left: -7.5vw;
      margin-bottom: 8.16vw;
    }

    @media only screen and (max-width: 575px) {
      margin-bottom: 16vw;
      margin-left: 4.26vw;
    }
  }

  &:last-of-type {
    @media only screen and (min-width: 576px) {
      margin-left: 12.18vw;
      margin-bottom: 10.33vw;
    }

    @media only screen and (max-width: 575px) {
      margin-left: 20.53vw;
    }
  }
`;

export const Back = styled(Link)`
  position: relative;
  background-color: var(--color-black);
  display: flex;
  align-items: center;
  justify-content: center;

  transition-property: background-color;
  transition-duration: 0.1s;
  transition-timing-function: ease;

  @media only screen and (min-width: 576px) {
    font-size: var(--fz-60-des);
    border-radius: 1.23vw;
    padding: 1vw 3.24vw;
    height: 4.95vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-15-min-mob);
    width: 100%;
    height: 17.06vw;
    border-radius: 4.26vw;
    font-family: var(--font-poppins);
    font-weight: 400;
  }

  @media (hover: hover) {
    cursor: pointer;
    transition-duration: 0.3s;

    &:hover {
      background-color: var(--color-violet);
    }
  }

  &:active {
    background-color: var(--color-violet);
  }
`;

export const Lines = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
`;
