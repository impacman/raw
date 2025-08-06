import styled from 'styled-components';

export const FormCom = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 576px) {
    padding-top: 10vw;
  }
`;

export const BtnWrap = styled.div`
  align-self: flex-end;

  @media only screen and (min-width: 576px) {
    transform: translate(-10.5vw, -7.5vw);
  }

  @media only screen and (max-width: 575px) {
    transform: translate(-10.5vw);
  }
`;
