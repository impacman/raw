import styled from 'styled-components';
import { mobVw, desVw } from '@/context/convertPxToVw';

export const SelfieChallengeCom = styled.div`
  position: relative;
  width: 100%;
  color: var(--color-white);
`;

export const ScrollSectoin = styled.div`
  position: relative;
  z-index: ${({ $zIndex }) => ($zIndex ? $zIndex : 2)};
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 441px) {
    padding-bottom: ${({ $styledPBDes }) => ($styledPBDes ? desVw.selfiechallenge($styledPBDes) : 0)};
    padding-left: ${({ $styledPLDes }) => ($styledPLDes ? desVw.selfiechallenge($styledPLDes) : 0)};
    padding-top: ${({ $styledPTDes }) => ($styledPTDes ? desVw.selfiechallenge($styledPTDes) : 0)};
  }

  @media only screen and (max-width: 440px) {
    padding-bottom: ${({ $styledPBMob }) => ($styledPBMob ? mobVw.selfiechallenge($styledPBMob) : 0)};
    padding-left: ${({ $styledPLMob }) => ($styledPLMob ? mobVw.selfiechallenge($styledPLMob) : 0)};
    padding-top: ${({ $styledPTMob }) => ($styledPTMob ? mobVw.selfiechallenge($styledPTMob) : 0)};
  }

  &[data-section-main] {
    @media only screen and (min-width: 441px) {
      padding: 0 !important;
      height: 100vh;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    @media only screen and (max-width: 440px) {
      padding-bottom: ${({ $styledPBMob }) => ($styledPBMob ? mobVw.selfiechallenge($styledPBMob) : 0)};
      padding-left: ${({ $styledPLMob }) => ($styledPLMob ? mobVw.selfiechallenge($styledPLMob) : 0)};
      padding-top: ${({ $styledPTMob }) => ($styledPTMob ? mobVw.selfiechallenge($styledPTMob) : 0)};
    }
  }
`;

export const WrapLogo = styled.div`
  position: absolute;

  @media only screen and (min-width: 441px) {
    top: ${desVw.selfiechallenge(20)};
    left: ${desVw.selfiechallenge(12)};
    width: ${desVw.selfiechallenge(56)};
    height: ${desVw.selfiechallenge(17)};
  }

  @media only screen and (max-width: 440px) {
    top: ${mobVw.selfiechallenge(23)};
    right: ${mobVw.selfiechallenge(80)};
    width: ${mobVw.selfiechallenge(56)};
    height: ${mobVw.selfiechallenge(17)};
  }
`;

const defaultTitle = `
    font-weight: 400;
    text-transform: uppercase;
    line-height: 0.9;

    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 441px) {
      font-size: ${desVw.selfiechallenge(116)};
      letter-spacing: ${desVw.selfiechallenge(-3.48)};
    }

    @media only screen and (max-width: 440px) {
      font-size: ${mobVw.selfiechallenge(56)};
      letter-spacing: ${mobVw.selfiechallenge(-1.68)};
    }
`;

export const Title = {
  h1: styled.h1`
    ${defaultTitle}
  `,
  h2: styled.h2`
    ${defaultTitle}
  `,
};

export const Parallax = {
  Default: {
    Wrap: styled.div`
      position: absolute;
      left: 50%;
      transform: translateX(-60%);
      height: auto;
      width: 100vw;
      pointer-events: none;

      @media only screen and (min-width: 441px) {
        top: ${desVw.selfiechallenge(80 * 2)};
      }

      @media only screen and (max-width: 440px) {
        top: ${mobVw.selfiechallenge(42)};
      }
    `,
    Move: styled.div`
      font-family: var(--font-poppins);
      font-weight: 300;
      line-height: 105%;
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      white-space: nowrap;

      @media only screen and (min-width: 441px) {
        font-size: ${desVw.selfiechallenge(53.451)};
        letter-spacing: ${desVw.selfiechallenge(-1.604)};
      }

      @media only screen and (max-width: 440px) {
        font-size: ${mobVw.selfiechallenge(24)};
        letter-spacing: ${mobVw.selfiechallenge(-0.72)};
      }
    `,
  },
  Footer: {
    Wrap: styled.div`
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-60%);
      height: auto;
      width: 100vw;
      pointer-events: none;
    `,
    Move: styled.div`
      font-weight: 400;
      line-height: 0.85;
      text-transform: lowercase;
      white-space: nowrap;

      @media only screen and (min-width: 441px) {
        font-size: ${desVw.selfiechallenge(103.712)};
      }

      @media only screen and (max-width: 440px) {
        font-size: ${mobVw.selfiechallenge(42.987)};
      }
    `,
  },
};

export const Grid = {
  Wrap: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media only screen and (min-width: 441px) {
      width: ${desVw.selfiechallenge(961)};
      height: ${desVw.selfiechallenge(672)};
      margin: ${desVw.selfiechallenge(46)} 0 0 ${desVw.selfiechallenge(14)};
      grid-gap: ${desVw.selfiechallenge(15)};
    }

    @media only screen and (max-width: 440px) {
      width: ${mobVw.selfiechallenge(428)};
      height: ${mobVw.selfiechallenge(299)};
      margin: ${mobVw.selfiechallenge(25)} 0 0 ${mobVw.selfiechallenge(4)};
      grid-gap: ${mobVw.selfiechallenge(7)};
    }
  `,
  Img: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media only screen and (min-width: 441px) {
      border-radius: ${desVw.selfiechallenge(22.5)};
    }

    @media only screen and (max-width: 440px) {
      border-radius: ${mobVw.selfiechallenge(10)};
    }
  `,
};

export const Descr = {
  WiWi: styled.p`
    font-family: var(--font-poppins);
    font-weight: 300;
    line-height: 1.15;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 441px) {
      font-size: ${desVw.selfiechallenge(30)};
      letter-spacing: ${desVw.selfiechallenge(-0.9)};
      margin: ${desVw.selfiechallenge(-7)} 0 0 ${desVw.selfiechallenge(788)};
    }

    @media only screen and (max-width: 440px) {
      font-size: ${mobVw.selfiechallenge(18)};
      letter-spacing: ${mobVw.selfiechallenge(-0.54)};
      margin: ${mobVw.selfiechallenge(-4)} 0 0 ${mobVw.selfiechallenge(169)};
    }
  `,
  Tips: styled.p`
    font-family: var(--font-poppins);
    color: ${({ $color }) => `var(--color-${$color ? $color : 'white'})`};
    font-style: italic;
    font-weight: 300;
    line-height: 1.3;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 441px) {
      font-size: ${desVw.selfiechallenge(30)};
      letter-spacing: ${desVw.selfiechallenge(-0.9)};
      margin-bottom: ${({ $styledMBDes }) => ($styledMBDes ? desVw.selfiechallenge($styledMBDes) : 0)};
      margin-left: ${({ $styledMLDes }) => ($styledMLDes ? desVw.selfiechallenge($styledMLDes) : 0)};
      margin-top: ${({ $styledMTDes }) => ($styledMTDes ? desVw.selfiechallenge($styledMTDes) : 0)};
    }

    @media only screen and (max-width: 440px) {
      font-size: ${mobVw.selfiechallenge(18)};
      letter-spacing: ${mobVw.selfiechallenge(-0.54)};
      margin-bottom: ${({ $styledMBMob }) => ($styledMBMob ? mobVw.selfiechallenge($styledMBMob) : 0)};
      margin-left: ${({ $styledMLMob }) => ($styledMLMob ? mobVw.selfiechallenge($styledMLMob) : 0)};
      margin-top: ${({ $styledMTMob }) => ($styledMTMob ? mobVw.selfiechallenge($styledMTMob) : 0)};
    }
  `,
};

export const List = {
  Wrap: styled.ul`
    font-family: var(--font-poppins);
    font-weight: 300;
    line-height: 0.84;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 441px) {
      font-size: ${desVw.selfiechallenge(30)};
      letter-spacing: ${desVw.selfiechallenge(-0.9)};
      margin-top: ${desVw.selfiechallenge(46)};
      grid-gap: ${desVw.selfiechallenge(18)};
      padding-left: ${desVw.selfiechallenge(30)};
    }

    @media only screen and (max-width: 440px) {
      font-size: ${mobVw.selfiechallenge(18)};
      letter-spacing: ${mobVw.selfiechallenge(-0.54)};
      margin-top: ${mobVw.selfiechallenge(24)};
      grid-gap: ${mobVw.selfiechallenge(18)};
      padding-left: ${mobVw.selfiechallenge(13)};
    }
  `,
  Item: styled.li``,
};

export const Price = {
  Wrap: styled.div`
    position: absolute;
    width: auto;
    background-color: ${({ $bgColor }) => ($bgColor ? `#${$bgColor}` : 'var(--color-black)')};
    color: ${({ $color }) => `var(--color-${$color ? $color : 'white'})`};
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 441px) {
      padding: ${desVw.selfiechallenge(0)} ${desVw.selfiechallenge(30)} 0 ${desVw.selfiechallenge(10)};
      height: ${desVw.selfiechallenge(162)};
      border-radius: ${desVw.selfiechallenge(48)};

      &:nth-of-type(1) {
        top: 0;
        right: ${desVw.selfiechallenge(-35)};
      }

      &:nth-of-type(2) {
        top: ${desVw.selfiechallenge(96)};
        left: ${desVw.selfiechallenge(97.5)};
      }

      &:nth-of-type(3) {
        left: ${desVw.selfiechallenge(405)};
        bottom: ${desVw.selfiechallenge(-54)};
      }
    }

    @media only screen and (max-width: 440px) {
      padding: ${mobVw.selfiechallenge(0)} ${mobVw.selfiechallenge(13)} 0 ${mobVw.selfiechallenge(10)};
      height: ${mobVw.selfiechallenge(68)};
      border-radius: ${mobVw.selfiechallenge(20)};

      &:nth-of-type(1) {
        top: ${mobVw.selfiechallenge(167)};
        right: ${mobVw.selfiechallenge(-12)};
      }

      &:nth-of-type(2) {
        top: ${mobVw.selfiechallenge(0)};
        left: ${mobVw.selfiechallenge(37)};
      }

      &:nth-of-type(3) {
        right: ${mobVw.selfiechallenge(96)};
        bottom: ${mobVw.selfiechallenge(132)};
      }
    }
  `,
  Text: styled.span`
    font-family: var(--font-poppins);
    font-style: italic;
    font-weight: 400;
    line-height: 1;

    @media only screen and (min-width: 441px) {
      font-size: ${desVw.selfiechallenge(119)};
    }

    @media only screen and (max-width: 440px) {
      font-size: ${mobVw.selfiechallenge(50)};
    }
  `,
};

const Images = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
`;

export const Img = {
  i1: styled(Images)`
    @media only screen and (min-width: 441px) {
      top: ${desVw.selfiechallenge(-30)};
      right: ${desVw.selfiechallenge(263)};
      width: ${desVw.selfiechallenge(387)};
      height: ${desVw.selfiechallenge(624)};
    }

    @media only screen and (max-width: 440px) {
      top: ${mobVw.selfiechallenge(27)};
      left: ${mobVw.selfiechallenge(38)};
      width: ${mobVw.selfiechallenge(304)};
      height: ${mobVw.selfiechallenge(494)};
    }
  `,
  i2: styled(Images)`
    z-index: -2;

    @media only screen and (min-width: 441px) {
      top: ${desVw.selfiechallenge(17)};
      right: ${desVw.selfiechallenge(-17)};
      width: ${desVw.selfiechallenge(779)};
      height: ${desVw.selfiechallenge(473)};
    }

    @media only screen and (max-width: 440px) {
      top: ${mobVw.selfiechallenge(27)};
      left: 0;
      width: 100vw;
      height: ${mobVw.selfiechallenge(340)};

      & img {
        object-position: 20% center;
      }
    }
  `,
  i3: styled(Images)`
    @media only screen and (min-width: 441px) {
      top: ${desVw.selfiechallenge(162)};
      left: ${desVw.selfiechallenge(227)};
      width: ${desVw.selfiechallenge(120)};
      height: ${desVw.selfiechallenge(152)};
    }

    @media only screen and (max-width: 440px) {
      top: ${mobVw.selfiechallenge(-20)};
      left: ${mobVw.selfiechallenge(25)};
      width: ${mobVw.selfiechallenge(70)};
      height: ${mobVw.selfiechallenge(73)};
    }
  `,
  i4: styled(Images)`
    @media only screen and (min-width: 441px) {
      bottom: ${desVw.selfiechallenge(-190)};
      right: ${desVw.selfiechallenge(-31)};
      width: ${desVw.selfiechallenge(225)};
      height: ${desVw.selfiechallenge(253)};
    }

    @media only screen and (max-width: 440px) {
      top: ${mobVw.selfiechallenge(120)};
      right: ${mobVw.selfiechallenge(-3)};
      width: ${mobVw.selfiechallenge(93)};
      height: ${mobVw.selfiechallenge(104)};
    }
  `,
  i5: styled(Images)`
    @media only screen and (min-width: 441px) {
      top: ${desVw.selfiechallenge(413)};
      right: ${desVw.selfiechallenge(270)};
      width: ${desVw.selfiechallenge(91)};
      height: ${desVw.selfiechallenge(95)};
    }

    @media only screen and (max-width: 440px) {
      top: ${mobVw.selfiechallenge(200)};
      left: ${mobVw.selfiechallenge(104)};
      width: ${mobVw.selfiechallenge(54)};
      height: ${mobVw.selfiechallenge(69)};
    }
  `,
  i6: styled(Images)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
  `,
  i9: styled(Images)`
    @media only screen and (min-width: 441px) {
      top: ${desVw.selfiechallenge(-75)};
      right: ${desVw.selfiechallenge(-16)};
      width: ${desVw.selfiechallenge(274)};
      height: ${desVw.selfiechallenge(270)};
    }

    @media only screen and (max-width: 440px) {
      bottom: ${mobVw.selfiechallenge(25)};
      right: ${mobVw.selfiechallenge(-5)};
      width: ${mobVw.selfiechallenge(125)};
      height: ${mobVw.selfiechallenge(123)};
    }
  `,
  i10: styled(Images)`
    @media only screen and (min-width: 441px) {
      bottom: ${desVw.selfiechallenge(80)};
      left: ${desVw.selfiechallenge(-45)};
      width: ${desVw.selfiechallenge(325)};
      height: ${desVw.selfiechallenge(492)};
    }

    @media only screen and (max-width: 440px) {
      top: ${mobVw.selfiechallenge(45)};
      left: ${mobVw.selfiechallenge(-37)};
      width: ${mobVw.selfiechallenge(152)};
      height: ${mobVw.selfiechallenge(226)};
      transform: scaleX(-1);
    }
  `,
  i11: styled(Images)`
    border-style: solid;
    border-color: var(--color-white);

    @media only screen and (min-width: 441px) {
      bottom: ${desVw.selfiechallenge(-348)};
      left: ${desVw.selfiechallenge(64)};
      width: ${desVw.selfiechallenge(536)};
      height: ${desVw.selfiechallenge(1162)};
      border-width: ${desVw.selfiechallenge(2)};
      border-radius: ${desVw.selfiechallenge(40)};
    }

    @media only screen and (max-width: 440px) {
      bottom: ${mobVw.selfiechallenge(5)};
      left: ${mobVw.selfiechallenge(23)};
      width: ${mobVw.selfiechallenge(225)};
      height: ${mobVw.selfiechallenge(489)};
      border-width: ${mobVw.selfiechallenge(0.8)};
      border-radius: ${mobVw.selfiechallenge(17)};
    }
  `,
};
