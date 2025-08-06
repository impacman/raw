import styled from 'styled-components';

export const PencilCom = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0);
  z-index: 8999;
`;

const PencilEl = styled.polyline`
  stroke-dasharray: 0;
  stroke-width: 0.3;
  stroke-linecap: round;
  fill: none;
  transition: all 0.3s ease 0s;
`;

export const PencilLight = styled(PencilEl)`
  stroke: var(--color-white);
`;

export const PencilDark = styled(PencilEl)`
  stroke: var(--color-black);
`;
