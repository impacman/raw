/** @format */

import styled from 'styled-components';
import { mobVw, desVw } from '@/context/convertPxToVw';

export const Fast = {
  ListCom: styled.div`
    position: relative;
    font-family: var(--font-poppins);
    text-transform: uppercase;

    @media only screen and (min-width: 441px) {
      width: ${desVw.mini(1100)};
      margin: ${desVw.mini(65)} auto 0;
      padding-left: ${desVw.mini(113)};
    }

    @media only screen and (max-width: 440px) {
      width: 100%;
      margin-top: ${mobVw.mini(135)};
      padding: 0 ${mobVw.mini(17)};
    }
  `,

  Title: styled.div`
    color: var(--color-violet);
    font-style: italic;
    line-height: 0.75;

    @media only screen and (min-width: 441px) {
      font-size: ${desVw.mini(30)};
      letter-spacing: ${desVw.mini(-0.9)};
      margin-bottom: ${desVw.mini(28)};
    }

    @media only screen and (max-width: 440px) {
      font-size: ${mobVw.mini(26.776)};
      letter-spacing: ${mobVw.mini(-0.803)};
      margin-bottom: ${mobVw.mini(24)};
    }
  `,

  Items: styled.ul`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 440px) {
      grid-gap: ${mobVw.mini(14.42)};
    }
  `,

  Item: styled.div`
    position: relative;
    width: 100%;
    display: grid;

    &:last-of-type {
      @media only screen and (min-width: 441px) {
        color: var(--color-violet);
      }
    }

    @media only screen and (min-width: 441px) {
      width: ${desVw.mini(380)};
      grid-template-columns: 1.5fr 0.5fr;
      font-size: ${desVw.mini(24)};
      letter-spacing: ${desVw.mini(-0.72)};
      line-height: 0.8;

      &:not(:last-of-type) {
        margin-bottom: ${desVw.mini(15)};
      }

      &:not(:nth-of-type(1), :nth-of-type(2)) {
        align-self: flex-end;
      }
    }

    @media only screen and (max-width: 440px) {
      width: 100%;
      grid-template-columns: 1.7fr 0.3fr;
      font-size: ${mobVw.mini(20.597)};
      letter-spacing: ${mobVw.mini(-0.618)};
    }
  `,

  Arrow: styled.div`
    @media only screen and (min-width: 441px) {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-220%, -50%);
      color: var(--color-violet);
      text-transform: uppercase;
      font-weight: 500;
      line-height: 0.6;
      font-size: ${desVw.mini(93.531)};
      letter-spacing: ${desVw.mini(-28.059)};

      & span {
        display: inline-block;
        opacity: 0;
        transition: all 0.7s ease 0.5s;

        &:nth-of-type(1) {
          transform: translateX(-120%);
        }

        &:nth-of-type(2) {
          transform: translateX(-200%);
        }
      }

      &.is-inview span {
        transform: none;
        opacity: 1;
      }
    }

    @media only screen and (max-width: 440px) {
      display: none;
    }
  `,
};

export const Win = {
  ListCom: styled.ul`
    width: 100%;
    color: var(--color-white);
    font-family: var(--font-poppins);
    display: grid;
    grid-template-columns: 1fr;

    @media only screen and (min-width: 441px) {
      grid-gap: ${desVw.mini(28)};
    }

    @media only screen and (max-width: 440px) {
      grid-gap: ${mobVw.mini(46)};
    }
  `,

  Item: styled.li`
    line-height: 140%;
    text-transform: uppercase;
    font-weight: 300;

    @media only screen and (min-width: 441px) {
      font-size: ${desVw.mini(28)};
      letter-spacing: ${desVw.mini(-0.84)};
    }

    @media only screen and (max-width: 440px) {
      font-size: ${mobVw.mini(20)};
      letter-spacing: ${mobVw.mini(-0.6)};
    }

    &:last-of-type {
      color: var(--color-violet);
      font-style: italic;

      @media only screen and (min-width: 441px) {
        margin-top: ${desVw.mini(18)};
      }

      @media only screen and (max-width: 440px) {
        margin-top: ${mobVw.mini(8)};
      }
    }
  `,

  Number: styled.span`
    color: var(--color-violet);
  `,
};
