/** @format */

import styled from "styled-components";
import { mobVw } from "@/context/convertPxToVw";

export const DescrCom = styled.p`
  font-weight: 300;
  line-height: 150%;

  & span {
    font-weight: 600;
  }

  .error &.input {
    color: var(--color-red);
  }

  @media only screen and (max-width: 440px) {
    font-size: ${mobVw.promo(16)};
  }

  @media only screen and (min-width: 441px) {
    font-size: 21.3px;
  }
`;
