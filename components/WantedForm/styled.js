import styled from 'styled-components';

export const WantedFormCom = styled.div`
  position: relative;

  @media only screen and (min-width: 576px) {
    padding: 6vw 0;
    overflow: hidden;
  }

  @media only screen and (max-width: 575px) {
    margin: 10vw -6.4vw 0;
    padding: 22vw 6.4vw 0;
  }
`;

export const WrapPicture = styled.div`
  @media only screen and (max-width: 575px) {
    position: absolute;
    top: -2vw;
    left: 0;
    width: 100%;
    padding-bottom: 208%;
    pointer-events: none;
  }
`;
