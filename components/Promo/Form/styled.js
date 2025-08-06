/** @format */

import styled from "styled-components";
import { mobVw } from "@/context/convertPxToVw";

export const FormCom = styled.form`
  min-height: 100%;
  color: var(--color-black);
  font-family: var(--font-poppins);

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 440px) {
    width: 100%;
    padding: ${mobVw.promo(230)} ${mobVw.promo(37)} ${mobVw.promo(85)};
    justify-content: space-between;
  }

  @media only screen and (min-width: 441px) {
    max-width: 520px;
    margin: 0 auto;
    padding: 113px 40px 13vh;
    justify-content: flex-end;
  }

  @media only screen and (min-width: 1023px) and (max-width: 1199px) {
    padding-bottom: 80px;
  }
`;

const FormBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 440px) {
    margin-bottom: ${mobVw.promo(24)};
  }

  @media only screen and (min-width: 441px) {
    margin-bottom: 32px;
  }
`;

export const FormHead = styled(FormBlock)`
  @media only screen and (max-width: 440px) {
    grid-gap: ${mobVw.promo(12)};
  }

  @media only screen and (min-width: 441px) {
    grid-gap: 16px;
  }
`;

export const FormBody = styled(FormBlock)`
  @media only screen and (max-width: 440px) {
    grid-gap: ${mobVw.promo(24)};
    flex: 1 1 auto;
  }

  @media only screen and (min-width: 441px) {
    grid-gap: 32px;
  }
`;
