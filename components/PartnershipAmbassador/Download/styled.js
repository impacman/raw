import { motion } from 'framer-motion';
import styled from 'styled-components';

export const DownloadCom = styled.div`
  width: 100%;
  background-color: var(--color-white);
  color: var(--color-white);

  /* display: flex;
  flex-direction: column;
  justify-content: center; */

  /* font-family: var(--font-poppins); */

  /* @media only screen and (min-width: 992px) {
    min-height: 90vh;
    padding: 3vh 9.18vw 8vw;
    line-height: 0.9;
    align-items: center;
  }

  @media only screen and (max-width: 991px) {
    padding: 11.5vw 9.3vw 16.9vw;
    align-items: flex-start;
  } */
`;

export const Wrapper = styled.div`
  position: relative;

  @media only screen and (min-width: 576px) {
    height: 46.5vw;
  }

  @media only screen and (max-width: 575px) {
    height: 185.071vw;
  }
`;

export const Info = styled.div`
  position: relative;
  color: var(--color-violet);
  font-family: var(--font-poppins);
  text-transform: uppercase;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 576px) {
    align-items: flex-end;
  }

  @media only screen and (min-width: 992px) {
    height: 18.764vw;
    padding: 2.442vw var(--side-dimensions) 0;
  }

  @media only screen and (max-width: 991px) {
    height: 29.606vw;
    padding: 3.853vw 3.025vw 0;
  }

  @media only screen and (max-width: 575px) {
    height: 46.332vw;
    padding: 0 0 10.94vw;
    justify-content: flex-end;
  }
`;

export const InfoTitle = styled.p`
  font-weight: 300;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 576px) {
    align-items: flex-end;
    line-height: 111.25%;
  }

  @media only screen and (min-width: 992px) {
    font-size: 2.473vw;
    margin-bottom: 1.298vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: 3.902vw;
    margin-bottom: 2.048vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: 5.331vw;
    margin-bottom: 1.802vw;
    padding-left: 0.129vw;
    line-height: 124.723%;
    font-family: var(--font-podkova);
  }
`;

export const InfoDescr = styled.p`
  font-weight: 200;

  @media only screen and (min-width: 576px) {
    & br {
      display: none;
    }
  }

  @media only screen and (min-width: 992px) {
    font-size: 0.927vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: 1.463vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: 3.732vw;
    padding-left: 8.752vw;
    line-height: 125%;
  }
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 0;
  z-index: 1;
  line-height: 0.78;

  @media only screen and (min-width: 992px) {
    font-size: 9.583vw;
    top: 5.904vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: 10vw;
    top: 8vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: 15.994vw;
    top: 15.058vw;
  }

  & span {
    position: relative;

    @media only screen and (min-width: 992px) {
      &:not(:first-of-type) {
        margin-left: 23.555vw;
        letter-spacing: 0.192vw;
      }
    }

    @media only screen and (max-width: 991px) {
      &:not(:first-of-type) {
        margin-left: 23vw;
      }
    }

    @media only screen and (max-width: 575px) {
      &:first-of-type {
        margin-left: 9.009vw;
        line-height: 88.239%;
      }

      &:not(:first-of-type) {
        margin-left: 0;
        line-height: 115.957%;
      }
    }
  }
`;

export const Articles = styled.div`
  z-index: 2;

  @media only screen and (min-width: 576px) {
    position: absolute;
    left: 0;
  }

  @media only screen and (min-width: 992px) {
    bottom: 7.048vw;
  }

  @media only screen and (max-width: 991px) {
    bottom: 5vw;
  }

  @media only screen and (max-width: 575px) {
    position: relative;
    display: flex;
    flex-direction: column;
    top: 69.884vw;
    padding: 0 8.88vw;
  }
`;

export const ArticlesRow = styled.div`
  display: flex;

  @media only screen and (min-width: 576px) {
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`;

export const ArticlesLink = styled.div`
  font-family: var(--font-poppins);
  line-height: 1.23;
  text-transform: uppercase;
  font-weight: 200;

  display: flex;
  align-items: center;

  @media only screen and (min-width: 992px) {
    font-size: 2.72vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: 2.8vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: 6.436vw;
    line-height: 1.78;
  }
`;

export const ArticlesLinkSlash = styled.span`
  @media only screen and (min-width: 992px) {
    margin-right: 2.164vw;
  }

  @media only screen and (max-width: 991px) {
    margin-right: 1.5vw;
  }

  @media only screen and (max-width: 575px) {
    margin-right: 2.571vw;
  }
`;

export const ArticlesLinkText = styled.a`
  text-shadow: 1px 1px 0 var(--color-transparent), -1px -1px 0 var(--color-transparent), 1px -1px 0 var(--color-transparent),
    -1px 1px 0 var(--color-transparent);
  transition: all 0.3s ease 0s;

  @media only screen and (min-width: 992px) {
    margin-right: 2.164vw;
  }

  @media only screen and (max-width: 991px) {
    margin-right: 1.5vw;
  }

  @media only screen and (max-width: 575px) {
    margin-right: 2.571vw;
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: var(--color-violet);
      text-shadow: 1px 1px 0 var(--color-violet), -1px -1px 0 var(--color-violet), 1px -1px 0 var(--color-violet), -1px 1px 0 var(--color-violet);
    }
  }
`;
