import styled from "styled-components";
import { mobVw } from "@/context/convertPxToVw";

export const GridCom = styled.div`
  @media only screen and (min-width: 576px) {
    width: 48.333vw;
    margin-left: ${({ $styledLeft }) => ($styledLeft ? "4.333vw" : "42.833vw")};
  }

  @media only screen and (max-width: 575px) {
    padding-right: ${mobVw.ambassadors(0)};
  }
`;

export const Wrap = styled.div`
  width: 100%;
  display: grid;

  @media only screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 5vw;
    grid-gap: 3.333vw 4.5vw;
  }

  @media only screen and (max-width: 575px) {
    width: ${({ $styledColsMob }) =>
      $styledColsMob ? mobVw.ambassadors(585) : "auto"};
    grid-template-columns: ${({ $styledColsMob }) =>
      $styledColsMob ? `repeat(${$styledColsMob}, 1fr)` : "1fr"};
    margin-top: ${mobVw.ambassadors(66)};
    grid-gap: ${mobVw.ambassadors(50)};
  }
`;
