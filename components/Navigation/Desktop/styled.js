import styled from 'styled-components';

export const DesktopCom = styled.nav`
  @media only screen and (min-width: 992px) {
    position: static;
    font-size: var(--fz-60-des);
    color: ${({ styledDark }) => (styledDark ? 'var(--color-black)' : 'var(--color-white)')};
    text-transform: uppercase;
  }
`;

export const Item = styled.div`
  @media only screen and (min-width: 992px) {
    position: fixed;
    height: calc(var(--height-xl) + 0.06rem);
    z-index: 999;
    /* transition: color 0.3s ease 0s; */

    & a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      color: inherit;
      padding: 0 var(--side-dimensions);

      @media only screen and (min-width: 992px) {
        position: relative;

        &.isUnderline {
          &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, calc(-50% + 0.8vw));
            width: calc(100% - (var(--side-dimensions) * 2));
            height: 0.12vw;
            background-color: var(--color-black);
          }
        }
      }
    }

    &.top-left {
      top: 0;
      left: 0;
    }

    &.top-right {
      top: 0;
      right: 0;
    }

    &.bottom-left {
      bottom: 0;
      left: 0;
    }

    &.bottom-right {
      bottom: 0;
      right: 0;
    }

    &[data-scroll-color='white-violet'] {
      color: var(--color-white);
    }

    &[data-scroll-color='white-black'] {
      color: var(--color-white);
    }

    &[data-scroll-color='black-white'] {
      color: var(--color-black);
    }

    &[data-scroll-color='black-violet'] {
      color: var(--color-black);
    }

    &[data-scroll-color='violet-important'] {
      color: var(--color-violet) !important;
    }

    &[data-scroll-color='black-important'] {
      color: var(--color-black) !important;
    }

    @media (hover: hover) {
      transition: color 0.3s ease 0s;

      &[data-hover-color='violet'] {
        &:hover {
          color: var(--color-violet);
        }
      }

      &[data-hover-color='black'] {
        &:hover {
          color: var(--color-black);
        }
      }

      &[data-scroll-color='white-violet'] {
        &:hover {
          color: var(--color-violet);
        }
      }

      &[data-scroll-color='white-black'] {
        &:hover {
          color: var(--color-black);
        }
      }

      &[data-scroll-color='black-white'] {
        &:hover {
          color: var(--color-white);
        }
      }

      &[data-scroll-color='black-violet'] {
        &:hover {
          color: var(--color-violet);
        }
      }
    }
  }
`;
