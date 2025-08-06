/** @format */

import styled from "styled-components";
import { mobVw } from "@/context/convertPxToVw";

export const TitleCom = styled.div`
  font-family: var(--font-podkova);
  font-weight: 700;
  line-height: 100%;

  @media only screen and (max-width: 440px) {
    font-size: ${mobVw.promo(32)};
  }

  @media only screen and (min-width: 441px) {
    font-size: 42.6px;
  }
`;
