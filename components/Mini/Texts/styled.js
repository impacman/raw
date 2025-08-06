/** @format */

import styled from 'styled-components';
import { mobVw, desVw } from '@/context/convertPxToVw';

export const TextsCom = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  text-transform: uppercase;
  font-family: var(--font-poppins);

  .step-1 & {
    line-height: 90%;
    font-weight: 400;

    @media only screen and (min-width: 441px) {
      font-size: ${desVw.mini(102)};
      letter-spacing: ${desVw.mini(-3.06)};
      padding: 0 ${desVw.mini(91)} 0 ${desVw.mini(156)};
    }

    @media only screen and (max-width: 440px) {
      font-size: ${mobVw.mini(64)};
      letter-spacing: ${mobVw.mini(-1.92)};
      padding: 0 ${mobVw.mini(6)};
    }

    & span {
      &:nth-of-type(3) {
        font-style: italic;
      }

      @media only screen and (min-width: 441px) {
        &:not(:nth-of-type(1)) {
          align-self: flex-end;
        }
        &:nth-of-type(1) {
          align-self: flex-start;
        }
        &:nth-of-type(2) {
          padding-right: ${desVw.mini(173)};
        }
        &:nth-of-type(3) {
          padding-right: ${desVw.mini(243)};
        }
        &:nth-of-type(5) {
          padding-right: ${desVw.mini(81)};
        }
      }

      @media only screen and (max-width: 440px) {
        width: 100%;

        &:nth-of-type(2) {
          padding-left: ${mobVw.mini(64)};
        }

        &:nth-of-type(3) {
          margin-bottom: ${mobVw.mini(236)};
        }

        &:nth-of-type(4) {
          text-align: center;
        }

        &:nth-of-type(5) {
          text-align: right;
        }
      }
    }
  }

  .step-2 &,
  .step-3 & {
    text-align: center;
    line-height: 105%;

    & .mt {
      display: inline-block;
    }

    @media only screen and (min-width: 441px) {
      font-size: ${desVw.mini(64)};
      letter-spacing: ${desVw.mini(-1.28)};

      & .mt {
        margin-top: ${desVw.mini(30)};
      }
    }

    @media only screen and (max-width: 440px) {
      font-size: ${mobVw.mini(39.134)};
      letter-spacing: ${mobVw.mini(-0.783)};
      font-weight: 400;

      & .mt {
        margin-top: ${mobVw.mini(28)};
      }
    }
  }

  .step-3 & {
    @media only screen and (max-width: 440px) {
      padding: 0 ${mobVw.mini(17)};

      & > span {
        width: 100%;

        &:nth-of-type(1) {
          margin-bottom: ${mobVw.mini(59)};
          text-align: left;
        }
        &:nth-of-type(2) {
          text-align: center;
          font-size: ${mobVw.mini(63.851)};
          letter-spacing: ${mobVw.mini(-1.916)};
          line-height: 80%;

          &::after {
            content: '>>';
            font-size: ${mobVw.mini(96.323)};
            letter-spacing: ${mobVw.mini(-28.897)};
            color: var(--color-violet);
            line-height: 20%;
            transform: translateY(${mobVw.mini(13)});
            display: inline-block;
            font-weight: 500;
          }
        }
      }
    }
  }

  .step-4 & {
    @media only screen and (min-width: 441px) {
      margin-bottom: ${desVw.mini(38)};
      font-size: ${desVw.mini(64)};
      letter-spacing: ${desVw.mini(-1.28)};
    }

    @media only screen and (max-width: 440px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      line-height: 0.85;

      font-size: ${mobVw.mini(36)};
      letter-spacing: ${mobVw.mini(-1.08)};
      margin-bottom: ${mobVw.mini(32)};
    }

    & > span {
      @media only screen and (min-width: 441px) {
        width: 100%;

        &:nth-of-type(2) {
          padding-left: ${desVw.mini(145)};
          margin-top: ${desVw.mini(-10)};
        }
      }

      @media only screen and (max-width: 440px) {
        &:nth-of-type(1) {
          margin-right: ${mobVw.mini(8)};
        }
        &:nth-of-type(2) {
        }
      }
    }
  }

  & span {
    & .violet {
      color: var(--color-violet);
    }
    & .white {
      color: var(--color-white);
    }
    & .italic {
      font-style: italic;
    }
    & .bold {
      font-weight: 500;
    }
    & .desktop {
      @media only screen and (max-width: 440px) {
        display: none;
      }
    }

    & br {
      @media only screen and (min-width: 441px) {
        &.mobile {
          display: none;
        }
      }

      @media only screen and (max-width: 440px) {
        &.desktop {
          display: none;
        }
      }
    }
  }
`;
