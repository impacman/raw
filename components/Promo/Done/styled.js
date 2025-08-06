/** @format */

import styled from "styled-components";
import { mobVw } from "@/context/convertPxToVw";

export const DoneCom = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  margin: 0 auto;

  @media only screen and (max-width: 440px) {
    width: ${mobVw.promo(128)};
  }

  @media only screen and (min-width: 441px) {
    width: 149px;
  }
`;
