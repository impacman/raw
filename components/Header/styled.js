/** @format */

import styled from "styled-components";
import { mobVw, mobVh } from "@/context/convertPxToVw";

export const HeaderCom = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  font-family: var(--font-poppins);

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 441px) {
    height: calc(var(--height-l) + 0.06rem);
  }

  @media only screen and (min-width: 992px) {
    width: auto;
    height: calc(var(--height-xl) + 0.06rem);
  }

  @media only screen and (max-width: 991px) {
    width: 100%;
  }

  @media only screen and (max-width: 440px) {
    height: ${({ $styledMinMobile }) => ($styledMinMobile ? "calc(var(--height-xxs) + 0.06rem)" : "calc(var(--height-xs) + 0.06rem)")};
  }
`;

export const Text = styled.div`
  @media only screen and (max-width: 991px) {
    display: none;
  }

  @media only screen and (min-width: 992px) {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
    padding-right: var(--side-dimensions);

    font-weight: 200;
    font-size: 1.2vw;
    text-transform: uppercase;
    text-align: right;
    color: var(--color-white);

    & a {
      position: relative;
      transition: color 0.3s ease 0s;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0.2vw;
        width: 100%;
        height: 1px;
        background-color: var(--color-white);
        transition: background-color 0.3s ease 0s;
      }

      @media (hover: hover) {
        cursor: pointer;

        &:hover {
          color: var(--color-violet);

          &::after {
            background-color: var(--color-violet);
          }
        }
      }

      &:active {
        color: var(--color-violet);

        &::after {
          background-color: var(--color-violet);
        }
      }
    }
  }
`;

export const Promo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;

  font-family: var(--font-podkova);
  color: var(--color-black);
  font-weight: 400;
  line-height: 90%;
  text-transform: uppercase;

  @media only screen and (min-width: 441px) {
    transform: translateY(2%);
    font-size: ${mobVw.promo(16)};
    padding-left: ${mobVw.promo(13)};
  }

  @media only screen and (min-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    padding-left: 70vw;
    font-size: 28px;
  }

  @media only screen and (max-width: 991px) {
    width: 100%;
  }

  @media only screen and (max-width: 440px) {
    font-size: ${mobVw.promo(24)};
    padding-left: ${mobVw.promo(23)};
    transform: translateY(4%);
  }

  @media only screen and (max-width: 1024px) and (max-height: 540px) {
    font-size: ${mobVh.promo(30)};
    align-items: flex-end;

    & span {
      min-width: 150px;
    }
  }
`;
