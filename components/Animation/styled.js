import styled from 'styled-components';

export const AnimationCom = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 249;
  overflow: hidden;
  background-color: var(--color-transparent);

  pointer-events: none;

  @media only screen and (min-width: 992px) {
    padding: calc(var(--height-xl) + (var(--side-dimensions) / 2)) calc(var(--side-dimensions) / 4)
      calc(var(--height-xl) + (var(--side-dimensions) / 2)) var(--side-dimensions);
    width: 38.5vw;
  }

  @media only screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: inherit;

  @media only screen and (min-width: 992px) {
    width: 100%;
  }

  @media only screen and (max-width: 991px) {
    width: var(--width-s);
    margin: 0 auto;
  }

  @media only screen and (max-width: 440px) {
    width: var(--width-xs);
  }

  @media only screen and (max-width: 991px) and (max-height: 440px) {
    width: 23vw;
    margin: 0;
  }
`;

const Content = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: inherit;
  pointer-events: none;

  &.isActive {
    pointer-events: auto;
  }

  @media only screen and (min-width: 992px) {
    top: 0;
  }

  @media only screen and (max-width: 991px) {
    bottom: 0;
    height: var(--height-l);
    padding: 1.4vw 2.45vw;
  }

  @media only screen and (max-width: 440px) {
    height: var(--height-xs);
    padding: 1.4vw 2.8vw;
  }

  @media only screen and (max-width: 991px) and (max-height: 440px) {
    top: 0;
    left: 0;
    bottom: auto;
    padding: 0;
    height: 100%;
    padding: calc(var(--height-l) + 1.5vw) 1.5vw;
  }
`;

export const ContentTop = styled(Content)`
  justify-content: flex-start;
  z-index: 1;
`;

export const ContentBottom = styled(Content)`
  justify-content: flex-end;
  z-index: 2;

  @media only screen and (max-width: 991px) {
    justify-content: flex-start;
  }

  @media only screen and (max-width: 991px) and (max-height: 440px) {
    justify-content: flex-end;
  }
`;
