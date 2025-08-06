import Link from 'next/link';
import styled from 'styled-components';

export const BtnCom = styled.button`
  border-radius: 50%;
  background-color: ${({ $styledDark }) => ($styledDark ? 'var(--color-black)' : 'var(--color-violet)')};

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 400;
  line-height: 1.25;
  text-transform: uppercase;
  color: ${({ $styledDark }) => ($styledDark ? 'var(--color-white)' : 'var(--color-black)')};

  font-family: var(--font-podkova);

  position: relative;
  z-index: 1;

  .isSending &::after {
    transform: translate(-50%, -50%) scale(1.01);
  }

  & span {
    position: relative;
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ $styledDark }) => ($styledDark ? 'var(--color-violet)' : 'var(--color-white)')};
    z-index: 1;

    @media only screen and (min-width: 576px) {
      transition: transform 0.5s ease 0s;
    }

    @media only screen and (max-width: 575px) {
      transition: transform 0.1s ease 0s;
    }
  }

  @media only screen and (min-width: 992px) {
    width: 11vw;
    height: 11vw;
    font-size: 1.8vw;
  }

  @media only screen and (max-width: 991px) {
    width: 24vw;
    height: 24vw;
    font-size: 3.5vw;
  }

  @media only screen and (max-width: 575px) {
    width: 28.5vw;
    height: 28.5vw;
    font-size: 4.5vw;
  }

  @media (hover: hover) {
    cursor: pointer;

    &:hover::after {
      transform: translate(-50%, -50%) scale(1.01);
    }
  }

  &:active::after {
    transform: translate(-50%, -50%) scale(1.01);
  }
`;

export const LinkCom = styled(Link)`
  border-radius: 50%;
  background-color: var(--color-violet);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-weight: 400;
  line-height: 1.25;
  text-transform: uppercase;
  color: var(--color-white);
  font-family: var(--font-podkova);

  position: relative;
  z-index: 1;

  & span {
    position: relative;
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(--color-black);
    z-index: 1;

    @media only screen and (min-width: 576px) {
      transition: transform 0.5s ease 0s;
    }

    @media only screen and (max-width: 575px) {
      transition: transform 0.1s ease 0s;
    }
  }

  @media only screen and (min-width: 992px) {
    width: 11vw;
    height: 11vw;
    font-size: var(--fz-60-des);
  }

  @media only screen and (max-width: 991px) {
    width: 24vw;
    height: 24vw;
    font-size: var(--fz-35-tab);
  }

  @media only screen and (max-width: 575px) {
    width: 28.5vw;
    height: 28.5vw;
    font-size: var(--fz-28-mob);
  }

  @media (hover: hover) {
    cursor: pointer;

    &:hover::after {
      transform: translate(-50%, -50%) scale(1.01);
    }
  }

  &:active::after {
    transform: translate(-50%, -50%) scale(1.01);
  }
`;

export const AdaptiveLink = styled.a`
  border-radius: 50%;
  background-color: var(--color-violet);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-weight: 400;
  line-height: 1.25;
  text-transform: uppercase;
  font-family: var(--font-podkova);
  color: ${({ $styledDark }) => ($styledDark ? 'var(--color-black)' : 'var(--color-white)')};

  position: relative;
  z-index: 1;

  & span {
    position: relative;
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ $styledDark }) => ($styledDark ? 'var(--color-white)' : 'var(--color-black)')};
    z-index: 1;

    @media only screen and (min-width: 576px) {
      transition: transform 0.5s ease 0s;
    }

    @media only screen and (max-width: 575px) {
      transition: transform 0.1s ease 0s;
    }
  }

  @media only screen and (min-width: 992px) {
    width: 11vw;
    height: 11vw;
    font-size: var(--fz-60-des);
  }

  @media only screen and (max-width: 991px) {
    width: 24vw;
    height: 24vw;
    font-size: var(--fz-35-tab);
  }

  @media only screen and (max-width: 575px) {
    width: 28.5vw;
    height: 28.5vw;
    font-size: var(--fz-28-mob);
  }

  @media (hover: hover) {
    cursor: pointer;

    &:hover::after {
      transform: translate(-50%, -50%) scale(1.01);
    }
  }

  &:active::after {
    transform: translate(-50%, -50%) scale(1.01);
  }
`;
