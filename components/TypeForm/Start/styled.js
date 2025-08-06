import styled from "styled-components";

export const StartCom = styled.div`
  font-family: var(--font-poppins);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media only screen and (min-width: 992px) {
    padding: 1vw;
  }

  @media only screen and (max-width: 991px) {
    padding: 2vw;
  }

  @media only screen and (max-width: 575px) {
    padding: 6vw 0;
    width: 100%;
  }
`;

export const WrapLogo = styled.div`
  width: auto;

  @media only screen and (min-width: 992px) {
    height: 6.09vw;
    margin-bottom: 3.75vw;
  }

  @media only screen and (max-width: 991px) {
    height: 10vw;
    margin-bottom: 4vw;
  }

  @media only screen and (max-width: 575px) {
    height: 17.246vw;
    margin-bottom: 10.039vw;
  }
`;

export const Title = styled.h3`
  line-height: 1.5;
  text-transform: uppercase;

  @media only screen and (min-width: 992px) {
    font-size: 2.727vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: 2.73vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: 4.212vw;
  }
`;

export const Descr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.3;
  width: 100%;
  text-transform: uppercase;

  @media only screen and (min-width: 992px) {
    font-size: 1.667vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: 1.668vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: 2.574vw;
  }

  & a {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 5px;
      width: 100%;
      height: 2px;
      background-color: var(--color-black);
    }
  }

  & p {
    &:first-of-type {
      @media only screen and (min-width: 992px) {
        margin: -0.583vw 0 1vw;
      }

      @media only screen and (max-width: 991px) {
        margin: -0.6vw 0 1.009vw;
      }

      @media only screen and (max-width: 575px) {
        margin: 1.158vw 0 5.405vw;
      }
    }

    &:nth-of-type(2) {
      @media only screen and (min-width: 992px) {
        margin-top: 1.75vw;
      }

      @media only screen and (max-width: 991px) {
        margin-top: 1.751vw;
      }
    }

    &:not(:first-of-type) {
      font-weight: 200;

      @media only screen and (max-width: 575px) {
        display: none;
      }
    }
  }
`;
