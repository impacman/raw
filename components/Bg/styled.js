import styled from 'styled-components';

export const BgCom = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: opacity 0.7s ease 0s;

  &.fixed {
    position: fixed;
  }

  &:not(.fixed) {
    position: absolute;
  }
`;
