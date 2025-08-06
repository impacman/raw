import styled from "styled-components";
import { mobVw } from "@/context/convertPxToVw";

export const LogoCom = styled.div`
  position: relative;
  background-color: var(--color-violet);

  @media only screen and (min-width: 576px) {
    width: 5vw;
    height: 5vw;
    border-radius: 1.084vw;
  }

  @media only screen and (max-width: 575px) {
    width: ${mobVw.ambassadors(60)};
    height: ${mobVw.ambassadors(60)};
    border-radius: ${mobVw.ambassadors(13)};
  }
`;

export const Heart = styled.svg`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-51.5%, -42.5%);
  width: 100%;
  height: 100%;
`;

export const RAW = styled.svg`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
`;
