import styled from "styled-components";

export const TypeFormCom = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-violet);
  color: var(--color-black);
  margin: 0 auto;
  overflow: hidden;

  @media only screen and (min-width: 992px) {
    width: 72vw;
    height: 55.833vw;
  }

  @media only screen and (max-width: 991px) {
    width: 80vw;
    height: 70vw;
  }

  @media only screen and (max-width: 575px) {
    width: calc(100vw - 24px);
    height: 147.362vw;
  }
`;
