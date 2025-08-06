import styled from 'styled-components';
import { vOneScreen } from '@/context/pxConvert';

export const GhostingCom = styled.div`
  position: relative;
  width: 100%;
`;

export const ScrollSectoin = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;

  padding-bottom: ${({ $styledPB }) => ($styledPB ? vOneScreen($styledPB) : 0)};
  padding-left: ${({ $styledPL }) => ($styledPL ? vOneScreen($styledPL) : 0)};
  padding-top: ${({ $styledPT }) => ($styledPT ? vOneScreen($styledPT) : 0)};

  z-index: ${({ $zIndex }) => ($zIndex ? $zIndex : 1)};
`;

export const Title = {
  h1: styled.h1`
    color: var(--color-violet);
    font-size: ${vOneScreen(155.93)};
    line-height: 87.342%;
    text-transform: uppercase;
    margin-left: ${vOneScreen(-10)};

    & span {
      margin-left: ${vOneScreen(115)};
    }
  `,
  h2: styled.h2`
    font-size: ${vOneScreen(116.844)};
    line-height: 123.409%;
    text-transform: uppercase;
    overflow: hidden;
    margin: 0 0 ${vOneScreen(10)} ${vOneScreen(-10)};

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & span {
      white-space: nowrap;
    }
  `,
  h2Big: styled.h2`
    font-size: ${vOneScreen(175.758)};
    line-height: 80%;
    text-transform: uppercase;

    margin-bottom: ${({ $styledMB }) => ($styledMB ? vOneScreen($styledMB) : 0)};
    margin-left: ${({ $styledML }) => ($styledML ? vOneScreen($styledML) : 0)};
  `,
  h2Footer: styled.h2`
    font-size: ${vOneScreen(141.416)};
    line-height: 92%;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;

    & span {
      &:last-of-type {
        font-family: var(--font-poppins);
        color: var(--color-violet);
        font-size: ${vOneScreen(100.324)};
        letter-spacing: ${vOneScreen(2.006)};
        margin: ${vOneScreen(48)} 0 ${vOneScreen(87)} ${vOneScreen(550)};
      }
    }
  `,
};

const DecsrDefault = styled.p`
  margin-bottom: ${({ $styledMB }) => ($styledMB ? vOneScreen($styledMB) : 0)};
  margin-left: ${({ $styledML }) => ($styledML ? vOneScreen($styledML) : 0)};
  margin-top: ${({ $styledMT }) => ($styledMT ? vOneScreen($styledMT) : 0)};
`;

const DescrPoppins = styled(DecsrDefault)`
  font-family: var(--font-poppins);
  font-weight: 200;
`;

export const Descr = {
  default: styled(DescrPoppins)`
    font-size: ${vOneScreen(61.494)};
    line-height: 115.458%;
    letter-spacing: ${vOneScreen(3.075)};
    text-transform: lowercase;
  `,
  bold: styled(DecsrDefault)`
    font-size: ${vOneScreen(77.42)};
    line-height: 79%;
    letter-spacing: ${vOneScreen(-2.323)};
    text-transform: uppercase;
  `,
  big: styled(DescrPoppins)`
    font-size: ${vOneScreen(58.701)};
    line-height: 106.943%;
    text-transform: uppercase;

    & span {
      font-weight: 400;
    }
  `,
  footer: styled(DescrPoppins)`
    color: var(--color-violet);
    font-size: ${vOneScreen(68.522)};
    font-weight: 400;
    line-height: 100%;
    letter-spacing: ${vOneScreen(1.37)};
    text-transform: uppercase;

    & span {
      padding-left: ${vOneScreen(98)};
    }
  `,
  little: styled(DescrPoppins)`
    font-size: ${vOneScreen(63.057)};
    line-height: 105%;
    letter-spacing: ${vOneScreen(-1.892)};
    text-transform: lowercase;
    font-weight: 400;
  `,
  full: styled(DecsrDefault)`
    font-size: ${vOneScreen(84.157)};
    line-height: 104.531%;
    text-transform: uppercase;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & span {
      white-space: nowrap;
    }
  `,
  star: styled(DecsrDefault)`
    font-size: ${vOneScreen(37.963)};
    line-height: 105%;
    letter-spacing: ${vOneScreen(-1.139)};
    text-transform: lowercase;
  `,
  doneBig: styled(DescrPoppins)`
    color: var(--color-violet);
    font-weight: 400;
    & span {
      &:first-of-type {
        line-height: 138.212%;
        font-size: ${vOneScreen(141)};
        letter-spacing: ${vOneScreen(-5.64)};
        text-transform: uppercase;
      }

      &:last-of-type {
        font-size: ${vOneScreen(105.219)};
        letter-spacing: ${vOneScreen(-4.209)};
        text-transform: lowercase;
      }
    }
  `,
  doneMin: styled(DescrPoppins)`
    color: var(--color-violet);
    font-weight: 400;
    line-height: 185.212%;
    font-size: ${vOneScreen(85.101)};
    letter-spacing: ${vOneScreen(-3.404)};
    text-transform: uppercase;
  `,
};

const Img = styled.div`
  position: absolute;
  overflow: hidden;
`;

export const Imgs = {
  i1: styled(Img)`
    width: ${vOneScreen(158.66)};
    height: ${vOneScreen(240)};
    top: ${vOneScreen(118)};
    left: ${vOneScreen(-10)};

    @media (max-width: 575px) {
      top: ${vOneScreen(-50)};
    }
  `,
  i2: styled(Img)`
    width: ${vOneScreen(125.25)};
    height: ${vOneScreen(168.91)};
    top: ${vOneScreen(71)};
    right: ${vOneScreen(152)};
    border-radius: ${vOneScreen(15)};

    & img {
      transform: scale(1.1);
    }
  `,
  i3: styled(Img)`
    width: ${vOneScreen(373)};
    height: ${vOneScreen(564.24)};
    top: ${vOneScreen(155)};
    right: ${vOneScreen(231)};
    z-index: -1;

    & img {
      transform: scale(1.1);
    }
  `,
  i4: styled(Img)`
    width: ${vOneScreen(205)};
    height: ${vOneScreen(276.47)};
    top: ${vOneScreen(0)};
    left: ${vOneScreen(310)};
    border-radius: ${vOneScreen(25)};

    & img {
      transform: scale(1.1);
    }

    @media (max-width: 575px) {
      top: ${vOneScreen(-150)};
    }
  `,
  i5: styled(Img)`
    width: ${vOneScreen(1350)};
    height: ${vOneScreen(488)};
    top: ${vOneScreen(92)};
    left: ${vOneScreen(265)};
    z-index: -1;

    @media (max-width: 575px) {
      top: ${vOneScreen(160)};
    }
  `,
  i61: styled(Img)`
    width: ${vOneScreen(404)};
    height: ${vOneScreen(753)};
    top: ${vOneScreen(61)};
    left: ${vOneScreen(-42)};
    z-index: -1;
    border-radius: ${vOneScreen(24)};

    & img {
      transform: scale(1.02);
      width: auto;
    }
  `,
  i62: styled(Img)`
    width: ${vOneScreen(404)};
    height: ${vOneScreen(753)};
    top: ${vOneScreen(61)};
    left: ${vOneScreen(382)};
    z-index: -1;
    border-radius: ${vOneScreen(24)};

    & img {
      transform: scale(1.02);
      width: auto;
      left: auto;
      right: 0;
    }
  `,
  i7: styled(Img)`
    width: ${vOneScreen(264)};
    height: ${vOneScreen(355.98)};
    top: ${vOneScreen(0)};
    right: ${vOneScreen(38)};
    border-radius: ${vOneScreen(34)};

    & img {
      transform: scale(1.1);
    }
  `,
  i8: styled(Img)`
    width: ${vOneScreen(690)};
    height: ${vOneScreen(285)};
    bottom: ${vOneScreen(0)};
    left: ${vOneScreen(615)};
    z-index: -1;

    & img {
      transform: scale(1.1);
    }
  `,
  i9: styled(Img)`
    width: ${vOneScreen(290)};
    height: ${vOneScreen(393.57)};
    top: ${vOneScreen(320)};
    right: ${vOneScreen(251)};
    z-index: -1;
    border-radius: ${vOneScreen(32)};

    & img {
      transform: scale(1.03);
    }
  `,
  i10: styled(Img)`
    width: 100vw;
    height: ${vOneScreen(536)};
    bottom: ${vOneScreen(0)};
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  `,
};

export const FormWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: ${vOneScreen(640)};

  & form {
    & label {
      color: var(--color-violet);
      height: ${vOneScreen(70)};
    }

    & > div {
      &:nth-of-type(1) label {
        margin-left: ${vOneScreen(198)};
      }

      &:nth-of-type(2) label {
        margin-left: ${vOneScreen(796)};
      }
    }
  }

  & input {
    font-size: ${vOneScreen(58)};
    border: ${vOneScreen(4.66)} solid var(--color-white);
    border-radius: ${vOneScreen(33)};
    font-weight: 200;
    color: var(--color-violet);
  }
`;
