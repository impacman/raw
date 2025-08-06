import { vOneScreen } from '@/context/pxConvert';
import styled from 'styled-components';

export const Forms = {
  default: styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    transition: opacity 0.3s ease 0s;

    @media only screen and (min-width: 992px) {
      padding: 0 20.198vw 0 6.186vw;
      margin-bottom: 4vw;
    }

    @media only screen and (max-width: 991px) {
      margin: 14vw 0 24vw;
      visibility: hidden;
    }

    @media only screen and (max-width: 440px) {
      margin: 0 0 28.352vw;
      visibility: visible;
    }
  `,
  oneScreen: styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    transition: opacity 0.3s ease 0s;
    padding: 0 ${vOneScreen(151)} 0 ${vOneScreen(89)};

    display: flex;
    flex-direction: column;
    grid-gap: ${vOneScreen(72)};
  `,
};

export const Btns = {
  default: styled.div`
    position: absolute;
    display: ${({ styledHidden }) => (styledHidden ? 'none' : 'block')};
    pointer-events: ${({ styledHidden }) => (styledHidden ? 'none' : 'auto')};
    width: ${({ styledHidden }) => (styledHidden ? '0' : 'auto')};
    height: ${({ styledHidden }) => (styledHidden ? '0' : 'auto')};
    overflow: ${({ styledHidden }) => (styledHidden ? 'hidden' : 'visible')};

    @media only screen and (min-width: 992px) {
      right: 3.526vw;
      bottom: 0.683vw;
    }

    @media only screen and (max-width: 991px) {
      right: 5vw;
      bottom: -20vw;
    }

    @media only screen and (max-width: 575px) {
      right: 0;
      bottom: -29vw;
    }
  `,
  oneScreen: styled.div`
    position: absolute;
    width: ${vOneScreen(320)};
    height: ${vOneScreen(320)};
    right: ${vOneScreen(120)};
    bottom: ${vOneScreen(-230)};

    & button {
      width: 100%;
      height: 100%;
      font-size: ${vOneScreen(56)};
      border: ${vOneScreen(5.92)} solid var(--color-violet);
    }
  `,
};

export const Error = styled.div`
  position: absolute;
  top: 0;
  color: var(--color-red);
  text-transform: uppercase;
  font-family: var(--font-poppins);
  font-weight: 200;

  @media only screen and (min-width: 992px) {
    right: var(--side-dimensions);
    transform: translateY(-4vw);
    font-size: 1vw;
  }

  @media only screen and (max-width: 991px) {
    top: -6vw;
    right: 3vw;
    font-size: 2vw;
  }

  @media only screen and (max-width: 575px) {
    top: -6vw;
    right: 5vw;
    font-size: 3vw;
  }
`;
