import styled from 'styled-components';

export const FocusCom = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: inherit;
  z-index: 299;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  background-color: var(--color-transparent);

  @media only screen and (min-width: 441px) {
    padding: var(--height-l) 0;
  }

  @media only screen and (min-width: 992px) {
    padding: var(--height-xl) 0;
  }

  @media only screen and (max-width: 440px) {
    padding: var(--height-xs) 0;
  }
`;

export const FocusEl = styled.div`
  height: 100%;
  background-color: inherit;
  position: relative;
  opacity: 1;
  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: 0.2s;

  &.isActive {
    transform: scale(1.05, 1.03);
    transition-duration: 0.5s;
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
