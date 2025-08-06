import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

export const LinesCom = styled.svg`
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 768px) {
    transform: scale(0.5);
  }

  @media only screen and (max-width: 767px) {
    transform: scale(0.9);
  }
`;

export const Path = styled.path`
  stroke-dashoffset: 10450;
  stroke-dasharray: 10450;
  animation: ${loading} 3s infinite 0s alternate;
  transition: stroke 0.3s ease 0s;
`;
