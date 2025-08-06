import Link from 'next/link';
import styled from 'styled-components';

export const NotificationCom = styled(Link)`
  position: fixed;
  z-index: 999999;
  background-color: var(--color-transparent);
  overflow: hidden;

  @media only screen and (min-width: 576px) {
    top: 0;
    left: 50%;
    transform: translateX(calc(-50% + 9.59vw));
  }

  @media only screen and (min-width: 992px) {
    width: 30.29vw;
    height: 9.52vw;
  }

  @media only screen and (max-width: 991px) {
    width: 52.97vw;
    height: 16.75vw;
  }

  @media only screen and (max-width: 575px) {
    top: 36vw;
    right: 0;
    width: 22.93vw;
    height: 32.26vw;
  }
`;
