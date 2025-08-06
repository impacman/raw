import styled from "styled-components";

export const StepCom = styled.div`
  width: 100%;
  background-color: inherit;
  color: var(--color-black);
  border-radius: inherit;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 991px) {
    padding: 47.059vw 0 11.765vw;
  }

  @media only screen and (max-width: 991px) and (max-height: 440px) {
    padding: 6vw 0;
  }

  @media only screen and (min-width: 992px) {
    padding: 13vw 0 3vw;
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 576px) {
    line-height: 1.5;
  }

  @media only screen and (min-width: 992px) {
    font-size: var(--fz-60-des);
    margin: 0 0 0.5vw -1.61vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: var(--fz-30-tab);
    margin: 0 0 0.5vw -2vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-37-mob);
    margin: 0 0 4vw -5vw;
    line-height: 1.1;
  }
`;
