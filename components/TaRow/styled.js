import styled from 'styled-components';

export const TaRowCom = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  background-color: inherit;
  z-index: 99;
  pointer-events: none;

  &.active {
    pointer-events: auto;
  }

  @media only screen and (min-width: 576px) {
  }

  @media only screen and (max-width: 575px) {
    display: flex;
    align-items: center;
  }
`;
