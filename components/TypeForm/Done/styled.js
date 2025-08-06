import styled from "styled-components";

export const DoneCom = styled.div`
  position: fixed;
  z-index: 9999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-violet);
  color: var(--color-black);
  border-radius: inherit;
  padding: 2vw 9vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 992px) {
    font-size: var(--fz-60-des);
    line-height: 1.24;
    padding: 2vw 14vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: var(--fz-26-tab);
    line-height: 1.34;
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-37-mob);
  }
`;

export const Text = styled.p`
  &:not(:last-of-type) {
    @media only screen and (min-width: 992px) {
      margin-bottom: 2vw;
    }
    @media only screen and (max-width: 991px) {
      margin-bottom: 3vw;
    }
    @media only screen and (max-width: 575px) {
      margin-bottom: 7vw;
    }
  }

  & a {
    text-decoration: underline;
    transition: color 0.1s ease 0s;
    @media (hover: hover) {
      cursor: pointer;
      transition: color 0.3s ease 0s;
      &:hover {
        color: var(--color-white);
      }
    }
    &:active {
      color: var(--color-white);
    }
  }
`;
