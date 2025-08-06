import styled from 'styled-components';

export const GetRawCom = styled.div`
  position: relative;
  font-family: Helvetica;

  @media only screen and (min-width: 768px) {
    width: 500px;
    margin: 0 auto;
    padding: 50px 0;
  }

  @media only screen and (max-width: 767px) {
    padding: 7.436vw 6.154vw;
    color: var(--color-black);
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
  display: block;
  padding-bottom: 39.5%;

  @media only screen and (min-width: 768px) {
    width: 100%;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 9.231vw;
  }
`;

export const Line = styled.div`
  width: 100%;
  background-color: #ededed;

  @media only screen and (min-width: 768px) {
    height: 2px;
    margin-bottom: 26px;
  }

  @media only screen and (max-width: 767px) {
    height: 0.513vw;
    margin-bottom: 4.359vw;
  }
`;

export const Title = styled.h2`
  color: #1d1d1f;
  font-weight: bold;

  @media only screen and (min-width: 768px) {
    font-size: 25px;
    margin-bottom: 26px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 4.615vw;
    line-height: 133.333%;
    margin-bottom: 3.333vw;
  }
`;

export const SupTitle = styled.span`
  color: #636366;
  font-weight: lighter;
  display: block;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    margin: -16px 0 16px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 3.077vw;
    line-height: 150%;
    letter-spacing: -0.017vw;
    margin: -3vw 0 3.59vw;
  }
`;

export const Descr = styled.p`
  color: #1d1d1f;
  font-weight: lighter;

  & a {
    color: #0070c9;
  }

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
  }

  @media only screen and (max-width: 767px) {
    font-size: 3.077vw;
    line-height: 141.66%;
  }
`;

export const DescrWrap = styled.div`
  position: relative;
  font-weight: lighter;
  overflow: hidden;

  &.more {
    height: auto;
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: 16px;
    height: 80px;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 767px) {
    padding-bottom: 7.436vw;
    height: 21vw;
  }
`;

export const DescrMore = styled.div`
  position: absolute;
  color: #0070c9;
  text-align: right;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    right: 2px;
    bottom: 0;
  }

  @media only screen and (max-width: 767px) {
    position: absolute;
    right: 0.4vw;
    bottom: 4vw;
    width: 100%;
    font-size: 2.821vw;
  }
`;

export const Section = styled.div`
  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 5.897vw;
  }
`;

export const PrivacyImg = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 192%;

  @media only screen and (min-width: 768px) {
    margin: 20px 0 40px;
  }

  @media only screen and (max-width: 767px) {
    margin: 2.821vw 0 5.128vw;
  }
`;

export const ReviewsImg = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 20%;

  @media only screen and (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 3.846vw;
  }
`;

export const Scroll = styled.div`
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap;

  @media only screen and (min-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  @media only screen and (max-width: 767px) {
    width: 100vw;
    margin: 0 -6.154vw 6.667vw;
    padding: 0 6.154vw 4vw;
  }
`;

export const ScreenItem = styled.div`
  position: relative;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    min-width: 44%;
    aspect-ratio: 1/2.2;
    border-radius: 16px;

    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }

  @media only screen and (max-width: 767px) {
    min-width: 41.538vw;
    height: 89.9vw;
    border-radius: 2.741vw;

    &:not(:last-of-type) {
      margin-right: 2.564vw;
    }
  }
`;

export const ReviewsItem = styled.div`
  position: relative;
  background-color: #f8f8f8;
  font-weight: lighter;
  overflow: hidden;

  &.more {
    height: auto;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: inherit;
    z-index: 99;
  }

  @media only screen and (min-width: 768px) {
    min-width: 90%;
    height: 210px;
    border-radius: 20px;
    padding: 20px;

    &:not(:last-of-type) {
      margin-right: 10px;
    }

    &::after {
      height: 20px;
    }
  }

  @media only screen and (max-width: 767px) {
    min-width: 87.692vw;
    height: 34.615vw;
    border-radius: 2.564vw;
    padding: 3.077vw 3.846vw;

    &:not(:last-of-type) {
      margin-right: 2.564vw;
    }

    &::after {
      height: 3vw;
    }
  }
`;

export const ReviewsItemName = styled.div`
  position: relative;
  color: #636366;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 3.077vw;
    line-height: 133.333%;
    margin-bottom: 2.821vw;
  }
`;

export const ReviewsItemTitle = styled.h3`
  color: #1d1d1f;
  font-weight: bold;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  @media only screen and (max-width: 767px) {
    font-size: 2.821vw;
    line-height: 154.545%;
  }
`;

export const ReviewsItemDescr = styled.p`
  color: #1d1d1f;
  font-weight: lighter;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  @media only screen and (max-width: 767px) {
    font-size: 2.821vw;
    line-height: 154.545%;
  }
`;

export const ReviewsItemMore = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  color: #0070c9;
  text-align: right;
  background: linear-gradient(270deg, #f8f8f8 72.73%, rgba(248, 248, 248, 0) 100%);

  .more & {
    background: none;
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    padding: 0 20px 20px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 2.821vw;
    padding: 3.7vw 4.615vw;
  }
`;

export const Stars = styled.div`
  display: flex;

  @media only screen and (min-width: 768px) {
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 2.821vw;
  }
`;

export const Star = styled.div`
  aspect-ratio: 1/1;

  & svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 768px) {
    width: 26px;
  }

  @media only screen and (max-width: 767px) {
    width: 5.128vw;
  }
`;
