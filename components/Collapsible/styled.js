import styled from 'styled-components';

export const CollapsibleCom = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  z-index: 299;
  background-color: var(--color-black);

  &::after,
  &::before {
    content: '';
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 479;
    background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);

    @media only screen and (min-width: 441px) {
      height: calc(var(--height-l) + 0.06rem);
    }

    @media only screen and (min-width: 992px) {
      height: calc(var(--height-xl) + 0.06rem);
    }

    @media only screen and (max-width: 440px) {
      height: calc(var(--height-xs) + 0.06rem);
    }
  }

  &::after {
    top: 0;
  }

  &::before {
    bottom: -2px;
    transform: rotate(180deg);
    transition: opacity 0.3s ease 0s;
  }

  &.isActive::before {
    opacity: 0;
    pointer-events: none;
  }
`;

export const CollapsibleWrapper = styled.div`
  width: 100%;

  @media only screen and (min-width: 441px) {
    padding: var(--height-l) 0;
  }

  @media only screen and (min-width: 992px) {
    padding: var(--height-xl) 0;
  }

  @media only screen and (max-width: 440px) {
    padding: calc(var(--height-xs) + 8vw) 0 calc(var(--height-xs) / 2);
  }
`;

export const Items = styled.div`
  @media only screen and (min-width: 992px) {
    margin-bottom: 3.96vw;
  }

  @media only screen and (max-width: 991px) {
    margin-bottom: 15vw;
  }

  @media only screen and (max-width: 575px) {
    margin-bottom: 22.5vw;
  }
`;

export const ParallaxText = styled.span`
  margin-left: 1.5vw;
  line-height: 199%;
  letter-spacing: -0.03em;
  color: var(--color-violet);

  @media only screen and (min-width: 992px) {
    font-size: var(--fz-230-des);
  }

  @media only screen and (max-width: 991px) {
    font-size: var(--fz-80-tab);
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-90-mob);
  }
`;
