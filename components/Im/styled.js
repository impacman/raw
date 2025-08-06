import styled from 'styled-components';

export const ImCom = styled.div`
  position: relative;
  background-color: var(--color-black);

  @media only screen and (min-width: 992px) {
    padding: 10.11vw 0 9.15vw;
  }

  @media only screen and (max-width: 991px) {
    padding: 10.93vw 0 13.33vw;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 992px) {
    width: 84.77vw;
    align-items: center;
  }

  @media only screen and (max-width: 991px) {
    width: 100%;
    align-items: flex-start;
    padding: 0 12.9vw;
  }
`;

export const Item = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (min-width: 992px) {
    &:nth-of-type(1) {
      margin-bottom: 5.41vw;
    }
    &:nth-of-type(2) {
      margin-bottom: 6.99vw;
    }
    &:nth-of-type(3),
    &:nth-of-type(4) {
      margin-bottom: 9.35vw;
    }

    &.row {
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-end;
      grid-gap: 7.4vw;
    }

    &.row-reverse {
      flex-direction: row-reverse;
      justify-content: flex-start;
      align-items: center;
      grid-gap: 7.4vw;
    }

    &.col {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      grid-gap: 1.85vw;
    }
  }

  @media only screen and (max-width: 991px) {
    flex-direction: column-reverse;

    &:nth-of-type(1) {
      margin-bottom: 10.93vw;
      grid-gap: 11.73vw;
    }
    &:nth-of-type(2) {
      margin-bottom: 16vw;
      grid-gap: 7.19vw;
    }
    &:nth-of-type(3) {
      margin-bottom: 10.93vw;
      grid-gap: 7.19vw;
    }
    &:nth-of-type(4) {
      margin-bottom: 10.93vw;
    }
    &:nth-of-type(5) {
      grid-gap: 10.93vw;
      flex-direction: column;
    }
  }
`;

export const WrappContent = styled.div`
  position: relative;
`;

export const Title = styled.h2`
  @media only screen and (min-width: 992px) {
    font-size: var(--fz-64-des);
    line-height: 1.6;

    &.transform-left {
      transform: translateX(-1.54vw);

      &-big {
        transform: translateX(-7.5vw);
      }
    }

    &.transform-right {
      transform: translateX(8.66vw);
    }
  }

  @media only screen and (max-width: 991px) {
    font-size: var(--fz-50-tab);
    line-height: 1;
    margin-bottom: 2vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-31-mob);
  }
`;

export const Descr = styled.p`
  font-family: var(--font-poppins);
  font-weight: 100;
  line-height: 1.25;

  @media only screen and (min-width: 992px) {
    font-size: var(--fz-35-des);

    &.big {
      font-size: var(--fz-40-des);
    }

    &.transform-left {
      transform: translateX(-7.5vw);
    }

    &.transform-right {
      transform: translateX(8.66vw);
    }
  }

  @media only screen and (max-width: 991px) {
    font-size: var(--fz-26-tab);

    & br {
      display: none;
    }
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-19-mob);
  }
`;

export const WrappImages = styled.div`
  position: relative;

  & img {
    border-radius: inherit;
    transform: scale(1.01);
  }
`;

export const ImgBig = styled.div`
  position: relative;
  background-color: var(--color-black);
  overflow: hidden;

  &.small {
    @media only screen and (min-width: 992px) {
      width: 32.48vw;
      height: 17.72vw;
    }

    @media only screen and (max-width: 991px) {
      width: 100%;
      height: 39.2vw;
    }
  }

  &.medium {
    @media only screen and (min-width: 992px) {
      width: 40vw;
      height: 21.28vw;
    }

    @media only screen and (max-width: 991px) {
      width: 90%;
      height: 46.66vw;
      margin-left: auto;
    }
  }

  &.big {
    @media only screen and (min-width: 992px) {
      width: 53.77vw;
      height: 47.95vw;
    }

    @media only screen and (max-width: 991px) {
      width: 100%;
      height: 39.46vw;
    }
  }
`;
