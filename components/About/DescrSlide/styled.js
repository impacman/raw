import { Swiper } from 'swiper/react';
import styled from 'styled-components';

export const DescrSlideCom = styled(Swiper)`
  @media only screen and (min-width: 992px) {
    margin: -15vw -9.18vw 0;
  }

  @media only screen and (max-width: 991px) {
    margin: -25vw -9vw 0;
  }

  .swiper-button-prev {
    left: 50%;

    @media only screen and (min-width: 992px) {
      transform: translateX(calc(50% - 2vw));
    }

    @media only screen and (max-width: 991px) {
      transform: translateX(calc(50% - 3vw));
    }

    @media only screen and (max-width: 575px) {
      transform: translateX(calc(50% - 5.5vw));
    }
  }

  .swiper-button-next {
    right: 50%;

    @media only screen and (min-width: 992px) {
      transform: translateX(calc(50% + 2vw));
    }

    @media only screen and (max-width: 991px) {
      transform: translateX(calc(50% + 3vw));
    }

    @media only screen and (max-width: 575px) {
      transform: translateX(calc(50% + 5.5vw));
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: auto;
    bottom: 8vw;
    width: auto;
    height: auto;
    opacity: 0.9;
    transition: opacity 0.3s ease 0s;

    &::after {
      color: var(--color-white);

      @media only screen and (min-width: 992px) {
        font-size: 1.67vw;
      }

      @media only screen and (max-width: 991px) {
        font-size: 3vw;
      }

      @media only screen and (max-width: 575px) {
        font-size: 4.5vw;
      }
    }
  }

  .swiper-button-disabled {
    opacity: 0.35;
  }
`;

export const DescrGrid = styled.div`
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 21.37vw 9.18vw 15.81vw;
  }

  @media only screen and (max-width: 991px) {
    padding: 38vw 9vw 24vw;
  }
`;

export const DescrWrap = styled.div`
  color: var(--color-white);

  @media only screen and (min-width: 992px) {
    &:last-of-type {
      max-width: 45.776vw;
    }
  }

  @media only screen and (max-width: 991px) {
    &:first-of-type {
      margin-bottom: 16vw;
    }

    &:last-of-type p:first-of-type {
      margin-bottom: 5vw !important;
    }
  }
`;
