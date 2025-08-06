import { motion } from 'framer-motion';
import styled from 'styled-components';

const Navigation = styled.nav`
  @media only screen and (min-width: 992px) {
    display: flex;
    text-transform: uppercase;
    font-family: var(--font-poppins);
    font-weight: 100;
  }
`;

export const BottomPosition = styled(Navigation)`
  @media only screen and (min-width: 992px) {
    position: ${({ styledPosStatic }) => (styledPosStatic ? 'absolute' : 'fixed')};
    left: 0;
    bottom: 0;
    width: 100%;
    height: var(--height-xl);
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--side-dimensions);
    z-index: 489;
    font-size: var(--fz-40-des);
    line-height: 1.2;
    color: ${({ styledDark }) => (styledDark ? 'var(--color-black)' : 'var(--color-white)')};
  }
`;

export const NormalPosition = styled(Navigation)`
  @media only screen and (min-width: 992px) {
    width: 30vw;
    flex-direction: column;
    color: var(--color-white);

    & a {
      padding: 0.55vw 0;
      overflow: hidden;

      & > span {
        position: relative;
        color: var(--color-transparent);

        &::before {
          content: attr(data-link-name);
          opacity: 1;
        }

        &::after {
          content: attr(data-link-name);
          font-weight: 200;
          font-family: var(--font-podkova);
          transform: translateY(100%);
          opacity: 0;
        }

        &::before,
        &::after {
          content: attr(data-link-name);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: var(--color-white);

          transition-property: transform, opacity;
          transition-duration: 0.5s;
          transition-timing-function: ease;
          transition-delay: 0s;
        }
      }

      @media (hover: hover) {
        &:hover {
          & > span {
            &::after {
              transform: none;
              opacity: 1;
            }
            &::before {
              transform: translateY(calc(-100% - 0.55vw));
            }
          }
        }
      }
    }

    & span {
      display: block;
      transform: translateY(-130%);
      transform-origin: top;
      opacity: 0;
    }

    .isAnim & span {
      transition: all 0.9s ease 0s;
    }

    .isActive & span {
      transform: none;
      opacity: 1;
      transition: all 0.9s ease 0.9s;
    }

    @media only screen and (min-width: 992px) {
      font-size: calc(var(--fz-50-des) / 1.1);
    }

    @media only screen and (min-width: 1367px) {
      font-size: var(--fz-50-des);
    }
  }
`;

export const Item = styled(motion.div)`
  &.no-active {
    font-family: var(--font-podkova);
    font-size: var(--fz-60-des);
    opacity: 0;
    pointer-events: none;
  }
`;
