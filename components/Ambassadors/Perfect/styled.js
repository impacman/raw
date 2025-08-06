import styled from "styled-components";
import { mobVw } from "@/context/convertPxToVw";

export const PerfectCom = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--color-white);

  @media only screen and (min-width: 576px) {
    padding: 7.833vw 0 20.417vw;
  }

  @media only screen and (max-width: 575px) {
    padding: 0 0 ${mobVw.ambassadors(110)} ${mobVw.ambassadors(387)};
  }
`;

export const Img = styled.div`
  position: absolute;
  z-index: 4;
  overflow: hidden;

  @media only screen and (min-width: 576px) {
    right: 19.583vw;
    bottom: 4.167vw;
    width: 23.167vw;
    height: 33.167vw;
  }

  @media only screen and (max-width: 575px) {
    display: none;
  }
`;
