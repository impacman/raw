import styled from 'styled-components';

export const Web2AppCom = styled.div`
  position: relative;
  font-family: Helvetica;
  background-color: var(--color-white);

  @media only screen and (min-width: 576px) {
    width: 100%;
    margin: 0 auto;
    padding: 62px 18px calc(32px * 4);
  }

  @media only screen and (min-width: 768px) {
    width: 777px;
  }

  @media only screen and (max-width: 575px) {
    width: 100%;
    min-height: 1px;
    height: 100vh;
  }
`;

export const Img = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;

  & img {
    transform: scale(1.015);
  }
`;

export const ImgMini = styled.div`
  position: absolute;
  z-index: 2;
  overflow: hidden;
  border-style: solid;
  border-color: var(--color-black);

  @media only screen and (min-width: 576px) {
    top: 61px;
    left: 23px;
    width: 216px;
    height: 288px;
    border-radius: 37px;
    border-width: 1px;
  }

  @media only screen and (max-width: 575px) {
    top: 7.851vw;
    left: 2.96vw;
    width: 27.799vw;
    height: 37.066vw;
    border-radius: 4.762vw;
    border-width: 0.129vw;
  }

  & img {
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;

  @media only screen and (max-width: 575px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 7.979vw 2.317vw 4.118vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const Btn = styled.a`
  color: var(--color-white);
  background-color: var(--color-violet);
  font-weight: 500;
  line-height: 49.728px;
  font-family: var(--font-poppins);

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 576px) {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    width: calc(777px - 150px * 2);
    height: 100px;
    border-radius: 34px;
    font-size: 26px;
    bottom: 10px;
  }

  @media only screen and (max-width: 575px) {
    width: 100%;
    height: 17.117vw;
    border-radius: 4.266vw;
    font-size: 4.266vw;
  }
`;

export const LogoWrap = styled.div`
  margin-left: auto;

  @media only screen and (min-width: 576px) {
    width: 193px;
    height: 58px;
    margin-bottom: 622px;
  }

  @media only screen and (max-width: 575px) {
    position: absolute;
    top: 7.979vw;
    right: 02.317vw;
    width: 24.839vw;
    height: 7.465vw;
  }
`;

export const Title = styled.h1`
  font-family: var(--font-poppins);
  font-weight: 500;
  line-height: 83%;
  text-transform: lowercase;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 576px) {
    font-size: 120px;
    letter-spacing: -4.8px;
    margin-bottom: 118px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 15.444vw;
    letter-spacing: -0.618vw;
    margin-bottom: 15.187vw;
  }
`;

export const Descr = styled.p`
  font-family: var(--font-poppins);
  font-weight: 500;
  line-height: 83%;
  margin-left: auto;

  display: flex;
  justify-content: flex-end;

  @media only screen and (min-width: 576px) {
    font-size: 120px;
    letter-spacing: -4.8px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 15.444vw;
    letter-spacing: -0.618vw;
    margin-bottom: 3.118vw;
  }
`;
