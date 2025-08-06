/** @format */

import styled from "styled-components";
import { mobVw } from "@/context/convertPxToVw";

export const BtnCom = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-violet);

  font-family: inherit;
  color: var(--color-white);
  font-weight: 500;
  line-height: 150%;
  overflow: hidden;

  & > div {
    transform: scale(6);
  }

  @media only screen and (max-width: 440px) {
    height: ${mobVw.promo(64)};
    border-radius: ${mobVw.promo(16)};
    font-size: ${mobVw.promo(16)};
  }

  @media only screen and (min-width: 441px) {
    height: 85.5px;
    border-radius: 21.3px;
    font-size: 21.3px;
    margin-top: 60px;
  }

  &:disabled {
    pointer-events: none;

    &:not(.sending) {
      color: var(--color-dark-gray);
      background-color: rgba(0, 0, 0, 0.06);
    }
  }
`;
