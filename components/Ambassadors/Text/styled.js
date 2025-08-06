import styled from "styled-components";

export const TextCom = styled.div`
  color: var(--color-violet);
  font-family: var(--font-poppins);
  text-transform: uppercase;
  font-weight: 200;
  line-height: 0.85;

  & p {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 576px) {
    font-size: 5.333vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: 7.979vw;
  }
`;
