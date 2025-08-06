import styled from "styled-components";
import { mobVw } from "@/context/convertPxToVw";

export const DealCom = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--color-white);

  @media only screen and (min-width: 576px) {
    padding: 28.333vw 0 9.167vw;
  }

  @media only screen and (max-width: 575px) {
    padding: ${mobVw.ambassadors(160)} 0 0;
  }
`;

export const ParallaxText = styled.div`
  font-family: var(--font-poppins);
  color: var(--color-black);
  line-height: 1.5;
  text-transform: uppercase;
  margin-left: 1.5vw;

  @media only screen and (min-width: 576px) {
    font-size: 5.417vw;
    margin-bottom: 4.167vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: ${mobVw.ambassadors(62)};
    margin-bottom: ${mobVw.ambassadors(156)};
  }
`;

export const ImgBig = styled.div`
  position: absolute;
  z-index: 1;
  overflow: hidden;

  @media only screen and (min-width: 576px) {
    right: 11.083vw;
    bottom: 7.25vw;
    width: 13.917vw;
    height: 23.083vw;
  }

  @media only screen and (max-width: 575px) {
    top: ${mobVw.ambassadors(21)};
    left: ${mobVw.ambassadors(45)};
    width: ${mobVw.ambassadors(135)};
    height: ${mobVw.ambassadors(224)};
  }
`;
