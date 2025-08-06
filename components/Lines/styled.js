import styled from 'styled-components';

export const LinesCom = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--color-transparent);
  z-index: 369;
  pointer-events: none;
`;

const LinesItems = styled.div`
  position: absolute;
  height: inherit;
  opacity: 0.4;
`;

export const LineHorizontal = styled(LinesItems)`
  width: inherit;
  top: 0;
  left: 0;

  &::after,
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.06rem;
    background-color: var(--color-white);
  }

  @media only screen and (min-width: 441px) {
    &::after {
      top: var(--height-l);
    }

    &::before {
      bottom: var(--height-l);
    }
  }

  @media only screen and (min-width: 992px) {
    &::after {
      top: var(--height-xl);
    }

    &::before {
      bottom: var(--height-xl);
    }
  }

  @media only screen and (max-width: 440px) {
    &::after {
      top: var(--height-xs);
    }

    &::before {
      bottom: var(--height-xs);
    }
  }
`;

export const LineVertical = styled(LinesItems)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 0.06rem;
    height: 100%;
    background-color: var(--color-white);
  }

  &::after {
    left: 0;
  }

  &::before {
    right: 0;
  }

  @media only screen and (min-width: 992px) {
    width: var(--width-l);
  }

  @media only screen and (min-width: 1200px) {
    width: var(--width-xl);
  }

  @media only screen and (max-width: 991px) {
    width: var(--width-s);
  }

  @media only screen and (max-width: 440px) {
    width: var(--width-xs);
  }
`;
