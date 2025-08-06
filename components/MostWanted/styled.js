import styled from 'styled-components';

export const MostWantedCom = styled.div`
  position: relative;
  background-color: var(--color-transparent);

  @media only screen and (min-width: 576px) {
    padding: 4.73vw 15.16vw 6vw;
  }

  @media only screen and (max-width: 575px) {
    padding: 16vw 6.4vw 12.26vw;
  }
`;

export const WrapImg = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  z-index: -1;

  @media only screen and (min-width: 576px) {
    top: 0;
    height: 100vh;
  }

  @media only screen and (max-width: 575px) {
    top: -2%;
    padding-bottom: 188%;
  }
`;
