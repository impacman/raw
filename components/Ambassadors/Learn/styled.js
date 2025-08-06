import styled from "styled-components";
import { mobVw } from "@/context/convertPxToVw";

export const LearnCom = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--color-white);

  @media only screen and (min-width: 576px) {
    padding: 9.583vw 0 4vw;
  }

  @media only screen and (max-width: 575px) {
    padding: 0 0 0 ${mobVw.ambassadors(43)};
  }
`;

export const Img = styled.div`
  overflow: hidden;

  @media only screen and (min-width: 576px) {
    position: absolute;
    z-index: 4;
    top: 0;
    left: -1.917vw;
    width: 39.833vw;
    height: 43.167vw;
  }

  @media only screen and (max-width: 575px) {
    position: relative;
    width: ${mobVw.ambassadors(582)};
    height: ${mobVw.ambassadors(426)};
    margin: 0 0 ${mobVw.ambassadors(81)} auto;
  }
`;
