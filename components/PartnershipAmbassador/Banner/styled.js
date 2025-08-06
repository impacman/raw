import styled from 'styled-components';

export const BannerCom = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background-color: var(--color-black);
  z-index: 1;

  @media only screen and (min-width: 992px) {
    padding: 1vw 9.18vw;
    align-items: center;
    height: 82.5vh;
  }

  @media only screen and (max-width: 991px) {
    padding: 16vw 6vw;
    height: 120vw;
  }
`;

export const TitleWrap = styled.div`
  color: var(--color-white);
  letter-spacing: 0.0148vw;

  @media only screen and (min-width: 992px) {
    line-height: 0.84;

    & br:first-of-type {
      display: none;
    }
  }

  @media only screen and (max-width: 991px) {
    line-height: 1.16;
    font-size: var(--fz-90-mob);
  }

  @media only screen and (max-width: 575px) {
    line-height: 1.16;
    font-size: var(--fz-90-mob);
  }
`;

export const BtnWrap = styled.div`
  position: absolute;
  z-index: 9999;

  @media only screen and (min-width: 992px) {
    right: 12.89vw;
    bottom: 6.09vw;
  }

  @media only screen and (max-width: 991px) {
    right: 12vw;
    bottom: -6vw;
    z-index: 9;
  }
`;

export const ImgWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  background-color: var(--color-black);

  & img {
    opacity: 0.8;
  }
`;
