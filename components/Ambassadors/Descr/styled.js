import styled from "styled-components";
import { mobVw } from "@/context/convertPxToVw";

export const DescrCom = styled.div`
  color: var(--color-black);
  font-family: var(--font-poppins);
  text-transform: uppercase;
  font-weight: 300;

  & p {
    display: flex;
    flex-direction: column;
  }

  & span {
    line-height: 1.1;
  }

  @media only screen and (min-width: 576px) {
    font-size: 1.667vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: ${mobVw.ambassadors(20)};
  }
`;
