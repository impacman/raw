import { Swiper } from 'swiper/react';
import styled from 'styled-components';

export const ShortsCom = styled(Swiper)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  background-color: inherit;
  z-index: 99;

  & .swiper-wrapper {
    width: 100%;
    height: 100%;
    background-color: inherit;

    display: flex;
    flex-direction: column;
  }

  & .swiper-slide {
    width: 100% !important;
    height: 100%;
    position: relative;
    background-color: inherit;

    display: flex;
    justify-content: center;
    flex-shrink: 0;
    transition-property: transform;
  }

  @media only screen and (min-width: 991px) {
    padding: var(--height-xl) 0;
  }
`;

export const Heart = styled.svg`
  position: absolute;
  z-index: 999999;
  /* pointer-events: none; */

  @media only screen and (min-width: 991px) {
    top: 1.918vw;
    right: -1.238vw;
    width: 19.183vw;
    height: 20.668vw;

    & path {
      stroke-width: 0.062vw;
    }
  }

  @media only screen and (max-width: 992px) {
    left: -13vw;
    bottom: -15vw;
    width: 40vw;
    height: 41vw;
    transform: rotate(-17deg);

    & path {
      stroke-width: 0.9vw;
    }
  }
`;

export const DemoComWrap = styled.div`
  @media only screen and (min-width: 991px) {
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: calc(1.45vw + (var(--side-dimensions) * 2));
    height: 100vh;
    z-index: 489;
  }
`;

export const DemoCom = styled(Swiper)`
  @media only screen and (min-width: 991px) {
    position: absolute;
    top: 50%;
    right: var(--side-dimensions);
    transform: translateY(-50%);
    width: 1.45vw;
    height: 10vw;
    background-color: var(--color-transparent);
    z-index: 499;
    overflow: hidden;
    padding: 3.2vw 0;

    .swiper-slide {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 0.5vw 0;

      & span {
        width: 100%;
        height: 0.123vw;
        background-color: var(--color-white);
        transition: all 0.5s ease 0s;
        border-radius: 100px;
      }

      &:not(&-visible, &-prev, &-next) span {
        width: 10px;
        opacity: 0.2;
      }

      &-prev span {
        &:nth-of-type(1) {
          width: 40%;
          opacity: 0.4;
        }
        &:nth-of-type(2) {
          width: 60%;
          opacity: 0.6;
        }
        &:nth-of-type(3) {
          width: 80%;
          opacity: 0.8;
        }
      }

      &-next span {
        &:nth-of-type(1) {
          width: 80%;
          opacity: 0.8;
        }
        &:nth-of-type(2) {
          width: 60%;
          opacity: 0.6;
        }
        &:nth-of-type(3) {
          width: 40%;
          opacity: 0.4;
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
  }
`;
