import styled from "styled-components";
import { mobVw } from "@/context/convertPxToVw";

export const GetPaidCom = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--color-white);

  @media only screen and (min-width: 576px) {
    height: 46.75vw;
    padding: 11.833vw 0 0;
  }

  @media only screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    padding: ${mobVw.ambassadors(65)} 0 ${mobVw.ambassadors(150)};
  }
`;

export const LogoWrap = styled.div`
  position: absolute;
  z-index: 99;

  @media only screen and (min-width: 576px) {
    top: -2.5vw;
    right: 6vw;
  }

  @media only screen and (max-width: 575px) {
    top: ${mobVw.ambassadors(35)};
    right: ${mobVw.ambassadors(116)};
  }
`;

export const TextWrap = styled.p`
  @media only screen and (min-width: 576px) {
    padding-left: 4.25vw;
    margin: 0 0 5.333vw;
  }

  @media only screen and (max-width: 575px) {
    padding-left: ${mobVw.ambassadors(43)};
    margin: 0 0 ${mobVw.ambassadors(114)};
  }
`;

export const DescrWrap = styled.p`
  @media only screen and (min-width: 576px) {
    padding-left: 4.75vw;
    margin-bottom: 4.083vw;
  }

  @media only screen and (max-width: 575px) {
    padding-left: ${mobVw.ambassadors(44)};
    margin-bottom: ${mobVw.ambassadors(49)};
  }
`;

export const DescrWrap2 = styled.p`
  @media only screen and (min-width: 576px) {
    padding-left: 14.25vw;
  }

  @media only screen and (max-width: 575px) {
    padding-left: ${mobVw.ambassadors(204)};
  }
`;

export const Img = styled.div`
  overflow: hidden;

  @media only screen and (min-width: 576px) {
    position: absolute;
    z-index: 4;
    top: 0;
    right: 0;
    height: 100%;
    width: 57.167vw;
  }

  @media only screen and (max-width: 575px) {
    order: -1;
    margin: 0 0 ${mobVw.ambassadors(130)} auto;
    position: relative;
    width: ${mobVw.ambassadors(574)};
    height: ${mobVw.ambassadors(561)};
  }
`;
