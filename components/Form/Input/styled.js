import { vOneScreen } from '@/context/pxConvert';
import styled from 'styled-components';

export const Inputs = {
  wrap: {
    default: styled.div`
      display: flex;
      flex-direction: column;
      font-family: var(--font-poppins);
      font-weight: 200;
      font-size: 1.5vw;
      line-height: 1.5;
      text-transform: uppercase;
      color: var(--color-white);

      @media only screen and (min-width: 992px) {
        font-size: 1.237vw;
        margin-bottom: 0.309vw;
      }

      @media only screen and (max-width: 991px) {
      }

      @media only screen and (max-width: 575px) {
        font-size: 3.576vw;
        margin-bottom: 1.022vw;
      }
    `,
    oneScreen: styled.div`
      display: flex;
      flex-direction: column;
      font-family: var(--font-poppins);
      line-height: 1.5;
      text-transform: capitalize;
      color: var(--color-black);
      font-size: ${vOneScreen(75.041)};
    `,
  },
  el: {
    default: styled.input`
      width: 100%;
      outline: none;
      background-color: var(--color-transparent);
      font-family: inherit;
      font-weight: inherit;
      font-size: inherit;
      line-height: 1;
      color: inherit;
      border-style: solid;
      border-color: var(--color-violet);

      .isError & {
        border-color: var(--color-red);
      }

      &::placeholder {
        opacity: 0.6;
      }

      @media only screen and (min-width: 992px) {
        height: 3.248vw;
        border-width: 0.093vw;
        border-radius: 0.619vw;
        padding: 0 0.99vw;
      }

      @media only screen and (max-width: 991px) {
      }

      @media only screen and (max-width: 575px) {
        height: 9.195vw;
        padding: 0 3.065vw;
        border-width: 0.255vw;
        border-radius: 1.916vw;
      }
    `,
    oneScreen: styled.input`
      width: 100%;
      outline: none;
      background-color: var(--color-transparent);
      font-family: inherit;
      font-weight: inherit;
      font-size: inherit;
      line-height: 1;
      color: inherit;
      border: ${vOneScreen(5.92)} solid var(--color-black);
      height: ${vOneScreen(168)};
      border-radius: ${vOneScreen(40)};
      padding: 0 ${vOneScreen(44)};

      .isError & {
        border-color: var(--color-red);
      }

      &::placeholder {
        color: #c7c7c7;
      }
    `,
  },
};

export const Labels = {
  default: styled.label`
    position: relative;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    text-transform: inherit;
    color: inherit;
    transition: color 0.2s ease 0s;

    .isError & {
      color: var(--color-transparent);
    }

    & p {
      @media only screen and (min-width: 992px) {
        line-height: 188%;
      }

      @media only screen and (max-width: 991px) {
        line-height: 1.3;
      }

      @media only screen and (max-width: 575px) {
        line-height: 6.386vw;
      }
    }
  `,
  oneScreen: styled.label`
    position: relative;
    font-family: inherit;
    font-size: ${vOneScreen(43.227)};
    font-weight: 300;
    line-height: 98.75%;
    text-transform: lowercase;
    color: inherit;
    transition: color 0.2s ease 0s;
    margin-left: ${vOneScreen(913)};
    margin-right: ${vOneScreen(-151)};
    height: ${vOneScreen(118)};

    .isError & {
      color: var(--color-transparent);
    }
  `,
};

export const Messages = {
  wrap: {
    default: styled.div`
      width: 100%;
      overflow: hidden;
      background-color: var(--color-transparent);
      font-family: inherit;
      font-weight: inherit;
      font-size: inherit;
      color: inherit;
      border-style: solid;
      border-color: var(--color-violet);

      .isError & {
        border-color: var(--color-red);
      }

      @media only screen and (min-width: 992px) {
        height: 11.754vw;
        border-radius: 0.619vw;
        border-width: 0.093vw;
      }

      @media only screen and (max-width: 991px) {
      }

      @media only screen and (max-width: 575px) {
        height: 27.331vw;
        border-radius: 1.916vw;
        border-width: 0.255vw;
      }
    `,
    oneScreen: styled.div`
      width: ${vOneScreen(1188)};
      height: ${vOneScreen(260)};
      overflow: hidden;
      background-color: var(--color-transparent);
      font-family: inherit;
      font-weight: inherit;
      font-size: inherit;
      color: var(--color-violet);
      border: ${vOneScreen(4.66)} solid var(--color-white);
      border-radius: ${vOneScreen(33.54)};
      margin-left: ${vOneScreen(368)};

      .isError & {
        border-color: var(--color-red);
      }
    `,
  },
  el: {
    default: styled.textarea`
      width: calc(100% + 20vw);
      height: 100%;
      outline: none;
      resize: none;
      background-color: var(--color-transparent);
      font-family: inherit;
      font-weight: inherit;
      font-size: inherit;
      line-height: 1.35;
      color: inherit;

      &::placeholder {
        opacity: 0.6;
      }

      @media only screen and (min-width: 992px) {
        line-height: 1.48;
        padding: 0.773vw calc(20vw + 0.99vw) 0.773vw 0.99vw;
      }

      @media only screen and (max-width: 991px) {
      }

      @media only screen and (max-width: 575px) {
        padding: 2.171vw 2.427vw;
      }
    `,
    oneScreen: styled.textarea`
      width: calc(100% + ${vOneScreen(60)});
      height: 100%;
      outline: none;
      resize: none;
      background-color: var(--color-transparent);
      font-family: inherit;
      font-size: inherit;
      line-height: 1.35;
      color: inherit;
      font-size: ${vOneScreen(58)};
      font-weight: 200;
      color: var(--color-violet);
      padding: ${vOneScreen(43)} ${vOneScreen(120)} ${vOneScreen(43)} ${vOneScreen(60)};

      &::placeholder {
        color: #c7c7c7;
      }
    `,
  },
};

export const Errors = {
  default: styled.span`
    color: var(--color-red);
    opacity: 0;
    transition: opacity 0.2s ease 0s;

    @media only screen and (min-width: 992px) {
      line-height: 188%;
    }

    @media only screen and (max-width: 991px) {
      line-height: 1.3;
    }

    @media only screen and (max-width: 575px) {
      line-height: 4.215vw;
      margin-bottom: 1.022vw;
      display: inline-block;
    }

    .isError & {
      opacity: 1;
    }
  `,
  oneScreen: styled.p`
    color: var(--color-red);
    opacity: 0;
    transition: opacity 0.2s ease 0s;

    .isError & {
      opacity: 1;
    }
  `,
};
