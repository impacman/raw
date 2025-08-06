import styled from 'styled-components';

export const UnsubscribeCom = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  @media only screen and (min-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 575px) {
    padding: 32vw 6.4vw 12.26vw;
  }
`;
