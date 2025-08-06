import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BannerCom = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-black);
  overflow: hidden;

  @media only screen and (min-width: 992px) {
    padding: 12.31vw 0 6.5vw;
    min-height: ${({ styledHeight }) => (styledHeight ? `${styledHeight}vh` : '100vh')};
  }

  @media only screen and (max-width: 991px) {
    justify-content: ${({ styledAmbassadors }) => (styledAmbassadors ? 'flex-end' : 'space-between')};
    padding: ${({ styledAmbassadors }) => (styledAmbassadors ? '24vw' : '20vw')} 0 ${({ styledAmbassadors }) => (styledAmbassadors ? '30vw' : '8vw')};
    min-height: 78vh;
  }

  @media only screen and (max-width: 575px) {
    padding: 20vw 0 ${({ styledAmbassadors }) => (styledAmbassadors ? '60vw' : '8vw')};
    min-height: 70vh;
  }
`;

export const Membership = styled.div`
  position: absolute;
  text-transform: uppercase;
  z-index: 999;
  color: var(--color-black);

  @media only screen and (min-width: 992px) {
    top: 0;
    left: 0;
    height: calc(var(--height-xl) + 0.06rem);
    font-size: var(--fz-60-des);
    padding: 0 var(--side-dimensions);
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 991px) {
    top: 16vw;
    right: 1vw;
    font-size: var(--fz-35-tab);
  }

  @media only screen and (max-width: 575px) {
    top: 15vw;
    font-size: var(--fz-28-mob);
  }
`;

export const MembershipDescr = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  text-transform: uppercase;
  font-weight: 200;
  font-family: var(--font-poppins);

  @media only screen and (min-width: 992px) {
    color: var(--color-black);
    left: 0;
    bottom: 3.34vw;
    align-items: center;
    justify-content: space-between;
    font-size: 1.4vw;

    & p {
      display: flex;
      align-items: center;

      & span {
        &:nth-of-type(1) {
          font-family: var(--font-podkova);
          transform: translateY(-2px);
        }

        &:nth-of-type(2) {
          font-weight: 400;
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    color: var(--color-white);
    flex-direction: column-reverse;
    align-items: flex-start;
    left: 4vw;
    bottom: 8vw;
    font-size: var(--fz-35-tab);
    font-weight: 300;

    & p {
      margin-bottom: 1vw;
    }
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-20-mob);
    left: 6vw;

    & p {
      margin-bottom: 1.5vw;
    }
  }
`;

export const ParallaxLogo = styled.div`
  width: auto;
  display: flex;
  margin-bottom: 10vw;

  @media only screen and (min-width: 992px) {
    height: 9.9vw;

    & a,
    & div {
      margin-right: 2vw;
    }
  }

  @media only screen and (max-width: 991px) {
    height: 20vw;

    & a,
    & div {
      margin-right: 5vw;
    }
  }

  @media only screen and (max-width: 575px) {
    & a,
    & div {
      margin-right: 4vw;
    }
  }
`;

export const ParallaxText = styled.div`
  display: flex;
  margin-left: 1.5vw;

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

export const DescrWrap = styled.div`
  color: var(--color-white);

  @media only screen and (min-width: 992px) {
    max-width: 44.957vw;
    align-self: flex-end;
    margin-right: 3.15vw;
  }

  @media only screen and (max-width: 991px) {
    padding: 0 8vw;
  }
`;

export const ImgWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: var(--color-black);

  & img {
    opacity: 0.8;
  }
`;
