import styled from 'styled-components';
import { vOneScreen } from '@/context/pxConvert';

export const HeRawCom = styled.div`
  position: relative;
  width: 100%;
`;

export const ScrollSectoin = styled.div`
  position: relative;
  color: var(--color-black);
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
    font-size: ${vOneScreen(143.444)};
    line-height: 106%;
    text-transform: uppercase;
    margin-bottom: ${vOneScreen(120)};
    letter-spacing: ${vOneScreen(-4.303)};
    display: flex;
    flex-direction: column;

    & span {
      &:first-of-type {
        margin-left: ${vOneScreen(-10)};
      }

      &:last-of-type {
        margin: ${vOneScreen(-35)} 0 0 ${vOneScreen(400)};
      }
    }
  `,
  h2: styled.h2`
    position: relative;
    z-index: 3;
    font-size: ${vOneScreen(122.911)};
    font-weight: 500;
    line-height: 95%;
    letter-spacing: ${vOneScreen(-3.687)};
    text-transform: uppercase;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    & span {
      white-space: nowrap;
    }
  `,
  h2Big: styled.h2`
    font-size: ${vOneScreen(370.703)};
    line-height: 93%;
    text-transform: uppercase;
    margin: 0 0 ${vOneScreen(133)} ${vOneScreen(95)};
  `,
};

const DescrPoppins = styled.p`
  font-family: var(--font-poppins);
  text-transform: lowercase;
  margin-bottom: ${({ $styledMB }) => ($styledMB ? vOneScreen($styledMB) : 0)};
  margin-left: ${({ $styledML }) => ($styledML ? vOneScreen($styledML) : 0)};
  margin-top: ${({ $styledMT }) => ($styledMT ? vOneScreen($styledMT) : 0)};
`;

const Descr200 = styled(DescrPoppins)`
  font-weight: 300;
`;

const Descr300 = styled(DescrPoppins)`
  font-weight: 300;
`;

export const Descr = {
  default: styled(Descr300)`
    font-size: ${vOneScreen(43.227)};
    line-height: 98.75%;
  `,
  withImg: styled(Descr200)`
    font-size: ${vOneScreen(78)};
    line-height: 110%;
    letter-spacing: ${vOneScreen(-2.34)};
    margin-left: ${vOneScreen(-16)};

    & span {
      &:not(:last-of-type) {
        &:nth-of-type(1) {
          margin-left: ${vOneScreen(20)};
        }

        &:nth-of-type(2) {
          margin-left: ${vOneScreen(184)};
        }
      }

      &:last-of-type {
        color: var(--color-violet);
      }
    }
  `,
  full: styled(DescrPoppins)`
    position: relative;
    z-index: 1;
    font-size: ${vOneScreen(29)};
    font-weight: 100;
    line-height: 105%;
    opacity: 0.58;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    & span {
      white-space: nowrap;

      &:first-of-type {
        margin-left: ${vOneScreen(-5)};
      }

      &:last-of-type {
        margin-left: ${vOneScreen(-90)};
      }
    }
  `,
  uppercase: styled(Descr200)`
    position: relative;
    z-index: 2;
    font-size: ${vOneScreen(61.401)};
    font-weight: 275;
    line-height: 121%;
    letter-spacing: ${vOneScreen(-1.842)};
    text-transform: uppercase;
  `,
  bold: {
    default: styled(DescrPoppins)`
      font-size: ${vOneScreen(54)};
      line-height: 105%;
      letter-spacing: ${vOneScreen(-1.62)};
    `,
    big: styled(Descr300)`
      font-size: ${vOneScreen(60.544)};
      line-height: 121%;
      letter-spacing: ${vOneScreen(-0.605)};

      & span {
        &:nth-of-type(1) {
          color: var(--color-violet);
          font-weight: 600;
        }

        &:nth-of-type(2) {
          color: var(--color-violet);
        }

        &:nth-of-type(3) {
          padding-left: ${vOneScreen(55)};
        }
      }
    `,
  },
  big: styled.p`
    font-size: ${vOneScreen(156.262)};
    line-height: 84.237%;
    text-transform: uppercase;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    & span {
      white-space: nowrap;

      & span {
        color: var(--color-violet);
      }
    }
  `,
};

export const LogoWrap = styled.div`
  position: absolute;
  top: ${vOneScreen(220)};
  right: ${vOneScreen(180)};

  width: auto;
  height: ${vOneScreen(34)};
`;

const Img = styled.div`
  position: absolute;
  overflow: hidden;
`;

export const Imgs = {
  i1: styled(Img)`
    width: ${vOneScreen(675)};
    height: ${vOneScreen(639.48)};
    top: ${vOneScreen(55)};
    right: ${vOneScreen(-35)};
  `,
  i2: styled(Img)`
    width: ${vOneScreen(261)};
    height: ${vOneScreen(70.86)};
    top: ${vOneScreen(100)};
    left: ${vOneScreen(-90)};
  `,
  i3: styled(Img)`
    width: ${vOneScreen(821)};
    height: ${vOneScreen(199)};
    top: ${vOneScreen(60)};
    right: ${vOneScreen(358)};
  `,
  i4: styled(Img)`
    width: ${vOneScreen(82.92)};
    height: ${vOneScreen(122.03)};
    top: ${vOneScreen(0)};
    right: ${vOneScreen(225)};
    border-radius: ${vOneScreen(10)};

    & img {
      transform: scale(1.1);
    }
  `,
  i5: styled(Img)`
    width: ${vOneScreen(1012)};
    height: ${vOneScreen(634)};
    top: ${vOneScreen(0)};
    left: ${vOneScreen(-27)};
    z-index: -1;
  `,
  i6: styled(Img)`
    width: ${vOneScreen(161)};
    height: ${vOneScreen(240.62)};
    top: ${vOneScreen(0)};
    left: ${vOneScreen(358)};
    z-index: 3;
    border-radius: ${vOneScreen(17)};

    & img {
      transform: scale(1.1);
    }
  `,
  i7: styled(Img)`
    width: ${vOneScreen(1400)};
    height: ${vOneScreen(485)};
    top: ${vOneScreen(85)};
    left: ${vOneScreen(260)};
    z-index: 2;
  `,
  i8: styled(Img)`
    width: ${vOneScreen(761)};
    height: ${vOneScreen(927)};
    top: ${vOneScreen(270)};
    left: ${vOneScreen(-35)};
    z-index: 1;
  `,
  i9: styled(Img)`
    width: ${vOneScreen(409)};
    height: ${vOneScreen(775.42)};
    top: ${vOneScreen(968)};
    right: ${vOneScreen(209)};
    z-index: -1;
    border-radius: ${vOneScreen(38.47)};

    & img {
      transform: scale(1.03);
    }
  `,
  i10: styled(Img)`
    width: 100vw;
    height: ${vOneScreen(485)};
    bottom: ${vOneScreen(333)};
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  `,
};

export const FormWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: ${vOneScreen(286)};
`;

export const Done = styled.p`
  color: var(--color-violet);
  text-align: center;
  font-family: var(--font-poppins);
  font-size: ${vOneScreen(77.661)};
  font-weight: 300;
  line-height: 107.059%;
  letter-spacing: ${vOneScreen(-2.33)};
  text-transform: uppercase;
`;
