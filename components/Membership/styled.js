import styled from 'styled-components';

export const MembershipCom = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100%;
  background-color: var(--color-black);
  overflow: hidden;
`;

export const Footer = styled.div`
  display: flex;

  color: var(--color-white);
  font-family: var(--font-poppins);
  text-transform: uppercase;
  font-weight: 200;

  @media only screen and (min-width: 576px) {
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (min-width: 992px) {
    padding: 14.56vw 3.09vw 2.09vw;
    font-size: var(--fz-40-des);
  }

  @media only screen and (max-width: 991px) {
    padding: 12vw 3vw 2.5vw;
    font-size: var(--fz-20-tab);
  }

  @media only screen and (max-width: 575px) {
    padding: 18vw 5vw 4.5vw;
    font-size: 2.53vw;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }

  & a {
    position: relative;
    transition: color 0.3s ease 0s;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 1px;
      background-color: var(--color-white);
      transition: background-color 0.3s ease 0s;

      @media only screen and (min-width: 576px) {
        transform: translateY(calc(-50% + 0.65vw));
      }

      @media only screen and (max-width: 575px) {
        transform: translateY(calc(-50% + 1.2vw));
      }
    }

    @media (hover: hover) {
      cursor: pointer;

      &:hover {
        color: var(--color-violet);

        &::after {
          background-color: var(--color-violet);
        }
      }
    }

    &:active {
      color: var(--color-violet);

      &::after {
        background-color: var(--color-violet);
      }
    }
  }
`;

export const Text = styled.p`
  color: inherit;
  font-family: inherit;
  text-transform: inherit;
  font-weight: inherit;

  @media only screen and (max-width: 575px) {
    margin-bottom: 2.2vw;
  }
`;

export const BtnWrap = styled.div`
  position: fixed;
  z-index: 2;

  @media only screen and (min-width: 992px) {
    right: 12.5vw;
    bottom: 12.31vw;
  }

  @media only screen and (max-width: 991px) {
    right: 10vw;
    bottom: 50%;
    transform: translateY(0%);
    transition: all 1s ease 0s;

    &.isTransform {
      transform: translateY(-22vw);
      bottom: 0;
    }
  }

  @media only screen and (max-width: 575px) {
    right: 14vw;
    transform: translateY(-30%);

    &.isTransform {
      transform: translateY(-32vw);
    }
  }

  @media only screen and (max-width: 330px) {
    transform: translateY(-10%);
  }
`;
