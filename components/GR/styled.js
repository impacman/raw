import styled from 'styled-components';

export const GetRawCom = styled.div`
  position: relative;
  font-family: Helvetica;

  @media only screen and (min-width: 768px) {
    width: 777px;
    margin: 0 auto;
    padding: 32px 32px calc(32px * 4);
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 4.118vw 4.118vw calc(4.118vw * 6);
  }
`;

export const Btn = styled.a`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  color: var(--color-white);
  background-color: var(--color-violet);
  font-weight: 500;
  line-height: 49.728px;
  font-family: var(--font-poppins);

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    width: calc(777px - 150px * 2);
    height: 100px;
    border-radius: 34px;
    font-size: 26px;
    bottom: 10px;
  }

  @media only screen and (max-width: 767px) {
    width: calc(100% - 4.118vw * 2);
    height: 17.117vw;
    bottom: 2.574vw;
    border-radius: 4.266vw;
    font-size: 4.266vw;
  }
`;

export const MainTitle = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
`;

export const MainImg = styled.a`
  position: relative;
  width: 100%;
  display: block;
  padding-bottom: 30.5%;

  @media only screen and (min-width: 768px) {
    margin-bottom: 38px;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 4.89vw;
  }
`;

export const Line = styled.div`
  width: 100%;
  background-color: #c6c6c8;

  @media only screen and (min-width: 768px) {
    height: 1px;
    margin: 34px 0;
  }

  @media only screen and (max-width: 767px) {
    height: 0.129vw;
    margin: 4.376vw 0;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media only screen and (min-width: 768px) {
    padding: 0 30px;
  }

  @media only screen and (max-width: 767px) {
    padding: 0 3.86vw;
  }
`;

export const InfoItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-of-type)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: #c6c6c8;

    @media only screen and (min-width: 768px) {
      width: 1px;
      height: 69px;
    }

    @media only screen and (max-width: 767px) {
      width: 0.13vw;
      height: 8.88vw;
    }
  }

  &:nth-of-type(1) svg {
    @media only screen and (min-width: 768px) {
      width: 129px;
      height: 26px;
      margin-top: -5px;
    }

    @media only screen and (max-width: 767px) {
      width: 16.6vw;
      height: 3.35vw;
      margin-top: -0.64vw;
    }
  }

  &:nth-of-type(3) svg {
    @media only screen and (min-width: 768px) {
      width: 45px;
      height: 47px;
      margin-bottom: 9px;
    }

    @media only screen and (max-width: 767px) {
      width: 5.79vw;
      height: 6.05vw;
      margin-bottom: 1.16vw;
    }
  }
`;

export const InfoItemId = styled.span`
  color: #b1b1b4;
  text-transform: uppercase;
  line-height: 103%;

  @media only screen and (min-width: 768px) {
    margin-bottom: 17px;
    font-size: 20px;
    font-weight: 500;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 2.19vw;
    font-size: 2.57vw;
    font-weight: 500;
  }
`;

export const InfoItemTitle = styled.span`
  color: #8e8e92;
  line-height: 103%;
  font-weight: 500;

  @media only screen and (min-width: 768px) {
    margin-bottom: 14px;
    font-size: 40px;
    letter-spacing: -0.8px;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 1.8vw;
    font-size: 5.15vw;
    letter-spacing: -0.1vw;
  }
`;

export const InfoItemDescr = styled.span`
  color: #8e8e92;
  line-height: 103%;
  text-transform: capitalize;

  @media only screen and (min-width: 768px) {
    font-size: 22.7px;
    font-weight: 500;
    letter-spacing: 0.227px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 2.92vw;
    font-weight: 500;
    letter-spacing: 0.03vw;
  }
`;

export const Descr = styled.p`
  color: #000;
  font-weight: 300;
  line-height: 132.576%;

  @media only screen and (min-width: 768px) {
    font-size: 27px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 3.47vw;
  }
`;

export const Screen = styled.div`
  position: relative;

  @media only screen and (min-width: 768px) {
    width: calc(100% + 32px);
    padding-bottom: 130.2%;
    margin: 0 -32px 0 0;
  }

  @media only screen and (max-width: 767px) {
    width: calc(100% + 4.12vw);
    padding-bottom: 130.2%;
    margin: 0 -4.12vw 0 0;
  }
`;

export const More = styled.div`
  width: 100%;
  color: #0879fa;
  font-weight: 300;
  line-height: 137.618%;
  text-align: right;

  @media only screen and (min-width: 768px) {
    font-size: 28px;
    margin-top: -40px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 3.6vw;
    margin-top: -5.15vw;
  }
`;

export const Reviews = styled.div``;

export const Title = styled.div`
  color: #000;
  font-weight: 600;
  line-height: 103%;

  @media only screen and (min-width: 768px) {
    font-size: 39.162px;
    letter-spacing: -1.566px;
    margin-bottom: 9px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 5.04vw;
    letter-spacing: -0.2vw;
    margin-bottom: 1.16vw;
  }
`;

export const ReviewsImg = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 19.5%;
`;

export const ReviewsItems = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
`;

export const ReviewsItem = styled.div`
  position: relative;
  background-color: #f2f2f6;
  color: #000;
  height: auto;
  flex: 0 0 90%;

  @media only screen and (min-width: 768px) {
    border-radius: 13px;
    padding: 26px 56px 43px 34px;
    margin-right: 19px;
  }

  @media only screen and (max-width: 767px) {
    border-radius: 1.67vw;
    padding: 3.35vw 7.21vw 5.53vw 4.38vw;
    margin-right: 2.45vw;
  }
`;

export const ReviewsItemTitle = styled.h3`
  font-weight: 500;
  line-height: 137.618%;

  @media only screen and (min-width: 768px) {
    font-size: 33px;
    margin-bottom: 7px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 4.25vw;
    margin-bottom: 0.9vw;
  }
`;

export const ReviewsItemDescr = styled.p`
  font-weight: 300;
  line-height: 132.6%;

  @media only screen and (min-width: 768px) {
    font-size: 27px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 3.47vw;
  }
`;

export const ReviewsItemDate = styled.div`
  position: absolute;
  text-align: right;
  color: #85858a;
  font-weight: 300;
  line-height: 1.1;

  @media only screen and (min-width: 768px) {
    top: 35px;
    right: 27px;
    font-size: 28px;
  }

  @media only screen and (max-width: 767px) {
    top: 4.5vw;
    right: 3.47vw;
    font-size: 3.6vw;
  }
`;

export const ReviewsStars = styled.div`
  @media only screen and (min-width: 768px) {
    margin: 0 0 22px -6px;
  }

  @media only screen and (max-width: 767px) {
    margin: 0 0 2.83vw -0.77vw;
  }

  & svg {
    @media only screen and (min-width: 768px) {
      width: 130px;
      height: 26px;
    }

    @media only screen and (max-width: 767px) {
      width: 16.73vw;
      height: 3.35vw;
    }
  }
`;

export const Link = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
z-index: 2;
`