import styled from 'styled-components';

export const ContactFormCom = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 299;
  background-color: var(--color-transparent);
`;

export const ContactFormScroll = styled.div`
  position: relative;

  @media only screen and (min-width: 441px) {
    padding: calc((var(--height-l) * 2) - 14vw) 0;
  }

  @media only screen and (min-width: 992px) {
    padding: 11.599vw 0;
  }

  @media only screen and (max-width: 440px) {
    padding: calc((var(--height-xs) * 2) - 10vw) 6.4vw;
  }
`;

export const Text = styled.div`
  @media only screen and (min-width: 992px) {
    /* display: none; */
  }

  @media only screen and (max-width: 991px) {
    width: 100vw;
    padding: 0 5vw;
    font-weight: 200;
    font-size: 2.2vw;
    line-height: 1.2;
    text-transform: uppercase;
    color: var(--color-white);
    font-family: var(--font-poppins);

    & a {
      position: relative;
      transition: color 0.1s ease 0s;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0.2vw;
        width: 100%;
        height: 1px;
        background-color: var(--color-white);
        transition: background-color 0.1s ease 0s;
      }

      &:active {
        color: var(--color-violet);

        &::after {
          background-color: var(--color-violet);
        }
      }
    }
  }

  @media only screen and (max-width: 575px) {
    padding: 12.87vw 4.118vw;
    font-size: 3.732vw;
    margin: 0 -6.4vw;
  }
`;
