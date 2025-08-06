import Link from 'next/link';
import styled from 'styled-components';

export const NavigationCom = styled.nav`
  @media only screen and (min-width: 576px) {
    color: var(--color-black);
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    padding: 0 5.25vw;
    font-size: var(--fz-70-des);
  }
`;

export const Item = styled(Link)`
  @media only screen and (min-width: 576px) {
    position: relative;
    transition-property: color;
    transition-duration: 0.1s;
    transition-timing-function: ease;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, calc(-50% + 0.8vw));
      width: 100%;
      background-color: var(--color-black);
      transition-property: background-color;
      transition-duration: 0.1s;
      transition-timing-function: ease;
      height: 0.12vw;
    }

    &:first-of-type {
      align-self: flex-start;
      margin-left: 21.19vw;
    }

    &:last-of-type {
      align-self: flex-end;
    }

    @media (hover: hover) {
      transition-duration: 0.3s;

      &:after {
        transition-duration: 0.3s;
      }

      &:hover {
        color: var(--color-violet);

        &:after {
          background-color: var(--color-violet);
        }
      }
    }
  }
`;
