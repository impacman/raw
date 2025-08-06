import styled from 'styled-components';

const ImgMinStyled = () => {
  return `
    z-index: 2;
    border-style: solid;

    @media only screen and (min-width: 992px) {
      width: 6.96vw;
      height: 9.49vw;
      transform: translate(1.18vw, 1.18vw);
      border-radius: 1vw;
      border-width: 0.078vw;
    }

    @media only screen and (max-width: 991px) {
      width: 18.3vw;
      height: 25.5vw;
      transform: translate(2.5vw, 2.5vw);
      border-radius: 3vw;
      border-width: 0.261vw;
    }

    @media only screen and (max-width: 575px) {
      width: 21.91vw;
      height: 30vw;
      transform: translate(3vw, 3vw);
      border-radius: 3vw;
    }

    @media only screen and (max-width: 991px) and (max-height: 440px) {
      width: 14vw;
      height: 20vw;
      transform: translate(2vw, 2vw);
      border-radius: 2vw;
    }
  `;
};

const ImgBigStyled = () => {
  return `
    width: 100%;
    height: 100%;
    border-radius: inherit;
    z-index: 1;
  `;
};

export const ShortCom = styled.div`
  position: relative;
  height: 100%;
  background-color: inherit;

  @media only screen and (min-width: 992px) {
    width: var(--width-l);
    padding: 1.24vw;
  }

  @media only screen and (min-width: 1200px) {
    width: var(--width-xl);
    padding: 1.54vw;
  }

  @media only screen and (max-width: 991px) {
    width: var(--width-s);
    padding: calc(var(--height-l) + 2.45vw) 2.45vw;
  }

  @media only screen and (max-width: 440px) {
    width: var(--width-xs);
    padding: calc(var(--height-xs) + 3.75vw) 3.73vw;
  }

  @media only screen and (max-width: 991px) and (max-height: 440px) {
    padding: calc(var(--height-l) + 2vw) 2vw;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--color-violet);

  @media only screen and (min-width: 992px) {
    border-radius: 1.42vw;
  }

  @media only screen and (max-width: 991px) {
    border-radius: 4.26vw;
  }

  @media only screen and (max-width: 991px) and (max-height: 440px) {
    border-radius: 3vw;
  }
`;

const Images = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-transparent);
  overflow: hidden;
  transition: all 0.5s ease 0s;

  & img {
    transform: scale(1.01);
    object-position: top left;
  }
`;

export const ImgBig = styled(Images)`
  &:not(.isMin) {
    ${ImgBigStyled()}
    border-color: var(--color-transparent);
  }

  &.isMin {
    ${ImgMinStyled()}
    border-color: var(--color-black);
  }
`;

export const ImgMin = styled(Images)`
  &:not(.isBig) {
    ${ImgMinStyled()}
    border-color: var(--color-black);
  }

  &.isBig {
    ${ImgBigStyled()}
    border-color: var(--color-transparent);
  }
`;
