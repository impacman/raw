/** @format */

import styled from "styled-components";
import { mobVw } from "@/context/convertPxToVw";

export const InputCom = styled.div`
  border-style: solid;
  border-color: var(--color-violet);
  overflow: hidden;
  background-color: var(--color-transparent);

  .error & {
    border-color: var(--color-red);
  }

  @media only screen and (max-width: 440px) {
    height: ${mobVw.promo(64)};
    border-radius: ${mobVw.promo(16)};
    font-size: ${mobVw.promo(16)};
    border-width: ${mobVw.promo(2)};
    padding: ${mobVw.promo(10)} ${mobVw.promo(20)};
  }

  @media only screen and (min-width: 441px) {
    height: 85.5px;
    border-radius: 21.3px;
    font-size: 21.3px;
    border-width: 2.69px;
    padding: 13px 27px;
  }

  & input {
    width: 100%;
    height: 100%;
    font-family: inherit;
    font-size: inherit;
    color: var(--color-black);
    background-color: inherit;

    &::placeholder {
      color: inherit;
    }

    .error & {
      color: var(--color-red);
    }

    &:disabled {
      color: var(--color-dark-gray);
      background-color: rgba(0, 0, 0, 0.06);
      pointer-events: none;
    }
  }
`;
