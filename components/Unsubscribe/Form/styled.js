import styled from 'styled-components';

export const FormCom = styled.form`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 576px) {
    width: 42.48vw;
  }

  @media only screen and (max-width: 575px) {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h1`
  color: var(--color-black);
  font-family: var(--font-poppins);
  font-weight: 200;
  line-height: 1.4;

  @media only screen and (min-width: 576px) {
    margin-bottom: 2.16vw;
    font-size: var(--fz-46-des);
  }

  @media only screen and (max-width: 575px) {
    margin-bottom: 10vw;
    font-size: var(--fz-15-min-mob);
  }
`;

export const Done = styled.div`
  color: var(--color-black);
  font-family: var(--font-poppins);
  font-weight: 200;
  line-height: 1.4;
  text-align: center;

  @media only screen and (min-width: 576px) {
    margin-bottom: 2.16vw;
    font-size: var(--fz-46-des);
  }

  @media only screen and (max-width: 575px) {
    margin-bottom: 10vw;
    font-size: var(--fz-15-min-mob);
  }
`;
