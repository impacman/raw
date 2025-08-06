import styled from "styled-components";
import { mobVw } from "@/context/convertPxToVw";

export const MovesCom = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--color-white);

  @media only screen and (min-width: 576px) {
    padding: 16.25vw 0 0;
  }

  @media only screen and (max-width: 575px) {
    padding: ${mobVw.ambassadors(124)} 0 0 ${mobVw.ambassadors(389)};
  }
`;

export const ImgBig = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  overflow: hidden;

  @media only screen and (min-width: 576px) {
    bottom: 0;
    width: 25.417vw;
    height: 23.75vw;
  }

  @media only screen and (max-width: 575px) {
    top: 0;
    width: ${mobVw.ambassadors(280)};
    height: ${mobVw.ambassadors(261)};
  }
`;

export const ImgMin = styled.div`
  position: absolute;
  z-index: 2;
  overflow: hidden;
  border-style: solid;
  border-color: var(--color-white);

  @media only screen and (min-width: 576px) {
    left: 19.75vw;
    bottom: 20vw;
    width: 10vw;
    height: 7.333vw;
    border-radius: 0.75vw;
    border-width: 0.05vw;
  }

  @media only screen and (max-width: 575px) {
    left: ${mobVw.ambassadors(216)};
    top: ${mobVw.ambassadors(-38)};
    width: ${mobVw.ambassadors(110)};
    height: ${mobVw.ambassadors(80)};
    border-radius: ${mobVw.ambassadors(8)};
    border-width: ${mobVw.ambassadors(1)};
  }
`;
