import styled from "styled-components";

export const TermsCom = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 299;
  overflow: hidden;
  z-index: 299;

  background-color: ${({ styledTheme }) =>
    styledTheme === "violet" && "var(--color-violet)"};
  background-color: ${({ styledTheme }) =>
    styledTheme === "white" && "var(--color-white)"};
  background-color: ${({ styledTheme }) =>
    styledTheme === "black" && "var(--color-black)"};

  @media only screen and (min-width: 441px) {
    padding: calc(var(--height-l) + 0.5vw) 10vw;
  }

  @media only screen and (min-width: 576px) {
    padding: calc(var(--height-xl) + 0.5vw) 10vw;
  }

  @media only screen and (max-width: 440px) {
    padding: calc(var(--height-xs) + 0.15rem) 10vw;
  }
`;

export const TermsTitle = styled.div`
  width: 100%;
  min-height: 25vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  text-align: center;

  background-color: ${({ styledTheme }) =>
    styledTheme === "violet" && "var(--color-black)"};
  background-color: ${({ styledTheme }) =>
    styledTheme === "white" && "var(--color-violet)"};
  background-color: ${({ styledTheme }) =>
    styledTheme === "black" && "var(--color-violet)"};

  color: ${({ styledTheme }) =>
    styledTheme === "violet" && "var(--color-white)"};
  color: ${({ styledTheme }) =>
    styledTheme === "white" && "var(--color-white)"};
  color: ${({ styledTheme }) =>
    styledTheme === "black" && "var(--color-black)"};

  @media only screen and (min-width: 992px) {
    font-size: 5.97vw;
    margin-bottom: 1.79vw;
    padding: 2vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: 6.9vw;
    margin: 1vw 0 4vw;
    padding: 4vw;
  }
`;

export const WrapLogo = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;

  & svg {
    width: auto;
    height: 100%;
  }

  @media only screen and (min-width: 441px) {
    height: calc(var(--height-l) + 0.06rem);
  }

  @media only screen and (min-width: 992px) {
    height: calc(var(--height-xl) + 0.06rem);
  }

  @media only screen and (max-width: 440px) {
    height: calc(var(--height-xs) + 0.06rem);
  }
`;
