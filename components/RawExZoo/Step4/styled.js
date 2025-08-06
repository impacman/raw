import styled from 'styled-components';

export const Step4Com = styled.div`
    background: url("/images/rawexzoo/step4-bg.jpg") no-repeat;
    background-size: cover;
    height: 100vh;
    position: relative;   
    .wrapper {
        width: 120%;
        height: 100%;
        position: absolute;
        left: -10%;
    }
`;

export const Avatar = styled.div`
  position: relative;
  &.center-image {
      position: absolute;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      img {
          width: 100%;
      }
      p {
          color: var(--color-white);
          text-align: center;
          font-family: var(--font-poppins);
          font-size: 40px;
          font-weight: 700;
          line-height: 40px;
          text-transform: uppercase;
          margin-top: -65px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
      }
  }
  &.image {
      position: absolute;
      img {
          width: 100%;
      }
      p {
          color: var(--color-white);
          text-align: center;
          font-family: var(--font-poppins);
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          line-height: 0;
      }
  }
  &.img0 {
      width: 60px;
      height: 60px;
      transform: rotate(45deg);
      left: 70%;
      top: -3%;
  }
  &.img1 {
      width: 60px;
      height: 60px;
      transform: rotate(-75deg);
      left: 14.43%;
      top: 3.32%;
  }
  &.img2 {
      width: 60px;
      height: 60px;
      transform: rotate(-45deg);
      left: 40.80%;
      top: 6.90%;
  }
  &.img3 {
      width: 48px;
      height: 48px;
      left: 90.55%;
      top: 14.99%;
  }
    &.img4 {
        width: 56px;
        height: 56px;
        left: 4.98%;
        top: 21.35%;
    }
    &.img5 {
        width: 48px;
        height: 48px;
        left: 66.17%;
        top: 22.41%;
    }
    &.img6 {
        width: 48px;
        height: 48px;
        transform: rotate(30deg);
        left: 6.22%;
        top: 41.38%;
    }
    &.img7 {
        width: 48px;
        height: 48px;
        transform: rotate(75deg);
        left: 89.30%;
        bottom: 49.47%;
    }
    &.img8 {
        width: 48px;
        height: 48px;
        left: -6%;
        bottom: 32.76%;
    }
    &.img9 {
        width: 96px;
        height: 96px;
        left: 72.89%;
        bottom: 25.99%;
    }
    &.img10 {
        width: 48px;
        height: 48px;
        left: 48.51%;
        bottom: 23.61%;
    }
    &.img11 {
        width: 96px;
        height: 96px;
        left: 9.45%;
        bottom: 11.01%;
    }
    &.img12 {
        width: 48px;
        height: 48px;
        left: 75.37%;
        bottom: 5.31%;
    }
`;
