import styled from "styled-components";
import { mobVw } from "@/context/convertPxToVw";

export const ImagesCom = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--color-white);

  @media only screen and (min-width: 576px) {
    height: 19.5vw;
  }

  @media only screen and (max-width: 575px) {
    height: ${mobVw.ambassadors(322)};
    z-index: 1;
  }
`;

export const LogoWrap = styled.div`
  position: absolute;
  z-index: 99;

  @media only screen and (min-width: 576px) {
    left: 4.333vw;
    bottom: 0;
  }

  @media only screen and (max-width: 575px) {
    top: ${mobVw.ambassadors(14)};
    right: ${mobVw.ambassadors(137)};
  }
`;

export const ImgBig = styled.div`
  position: absolute;
  z-index: 1;
  overflow: hidden;

  @media only screen and (min-width: 576px) {
    top: 0;
    right: 0;
    width: 14.417vw;
    height: 14.083vw;
  }

  @media only screen and (max-width: 575px) {
    top: ${mobVw.ambassadors(167)};
    left: 0;
    width: ${mobVw.ambassadors(317)};
    height: ${mobVw.ambassadors(309)};
  }
`;

export const ImgMin = styled.div`
  position: absolute;
  z-index: 2;
  overflow: hidden;
  border-style: solid;
  border-color: var(--color-white);

  @media only screen and (min-width: 576px) {
    top: 10.167vw;
    right: 11.917vw;
    width: 4.833vw;
    height: 6.667vw;
    border-radius: 0.75vw;
    border-width: 0.05vw;
  }

  @media only screen and (max-width: 575px) {
    top: ${mobVw.ambassadors(411)};
    left: ${mobVw.ambassadors(264)};
    width: ${mobVw.ambassadors(95)};
    height: ${mobVw.ambassadors(129)};
    border-radius: ${mobVw.ambassadors(10.56)};
    border-width: ${mobVw.ambassadors(1)};
  }
`;
