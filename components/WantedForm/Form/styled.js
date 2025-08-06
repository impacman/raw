import styled from 'styled-components';

export const FormCom = styled.form`
  position: relative;

  @media only screen and (min-width: 576px) {
    padding: 2vw 9.4vw;
    min-height: calc(44.15vw - (6vw * 2));
  }

  @media only screen and (max-width: 575px) {
    min-height: 78vh;
  }
`;
