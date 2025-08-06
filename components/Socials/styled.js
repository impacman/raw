import styled from 'styled-components';

export const SocialsCom = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  overflow-x: auto;
  background-color: inherit;
  z-index: 299;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Social = styled.a`
  display: flex;
  flex-direction: column;
  font-family: var(--font-poppins);
  font-weight: 100;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
  cursor: pointer;

  @media only screen and (min-width: 992px) {
    font-size: var(--fz-200-des);
    height: var(--fz-200-des);
  }

  @media only screen and (max-width: 991px) {
    font-size: var(--fz-80-tab);
    height: var(--fz-80-tab);
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-63-mob);
    height: var(--fz-63-mob);
  }

  & span {
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: var(--hover-time-animation);
    transform-origin: top center;

    &.second {
      font-family: var(--font-podkova);
      transform: scaleY(0.2);
      opacity: 0;
    }
  }

  @media (hover: hover) {
    &:hover span {
      &.first {
        transform: scaleY(0.2) translateY(-100%);
        opacity: 0;
      }

      &.second {
        transform: scaleY(1) translateY(-100%);
        opacity: 1;
      }
    }
  }

  &:active span {
    color: var(--color-mauve);
  }
`;
