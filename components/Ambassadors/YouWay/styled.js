import styled from "styled-components";

export const YouWayCom = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--color-white);

  @media only screen and (min-width: 576px) {
    padding: 8.667vw 0 5vw;
  }

  @media only screen and (max-width: 575px) {
    padding: 7.465vw 0 0;
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
    font-size: 7.979vw;
    margin-bottom: 25.097vw;
  }
`;

export const TextWrap = styled.p`
  @media only screen and (min-width: 576px) {
    padding-left: 25vw;
  }

  @media only screen and (max-width: 575px) {
    padding-left: 25.997vw;
  }
`;

export const DescrWrap = styled.p`
  @media only screen and (min-width: 576px) {
    margin-top: 17.25vw;
    padding-left: 42.833vw;
  }

  @media only screen and (max-width: 575px) {
    margin-top: 17.632vw;
    padding-left: 49.936vw;
  }
`;

export const ImgBig = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  overflow: hidden;

  @media only screen and (min-width: 576px) {
    top: 10vw;
    width: 18vw;
    height: 21.417vw;
  }

  @media only screen and (max-width: 575px) {
    top: 10vw;
    width: 18.533vw;
    height: 21.879vw;
  }
`;

export const ImgMin = styled.div`
  position: absolute;
  z-index: 2;
  overflow: hidden;
  border-style: solid;
  border-color: var(--color-white);

  @media only screen and (min-width: 576px) {
    top: 6.333vw;
    left: 0.833vw;
    width: 6.833vw;
    height: 9.333vw;
    border-radius: 0.75vw;
    border-width: 0.05vw;
  }

  @media only screen and (max-width: 575px) {
    top: 6vw;
    left: 0.772vw;
    width: 7.079vw;
    height: 9.653vw;
    border-radius: 0.788vw;
    border-width: 0.129vw;
  }
`;
