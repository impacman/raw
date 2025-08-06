import styled from 'styled-components';

export const LoadingCom = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999999999;
  border-radius: inherit;
  pointer-events: none;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transition: all 0.5s ease 0s;

  &.isLoading {
    opacity: 1;
    pointer-events: auto;
  }
`;
