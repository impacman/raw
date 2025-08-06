import styled from 'styled-components';

export const SvgCom = styled.svg`
  position: absolute;
  width: 16.9%;
  height: auto;

  * {
    fill: var(--color-white);
  }

  &:nth-of-type(1) {
    top: 0;
    left: 0;
  }

  &:nth-of-type(2) {
    top: 0;
    right: 0;
    transform: rotate(90deg);
  }

  &:nth-of-type(3) {
    bottom: 0;
    left: 0;
    transform: rotate(-90deg);
  }

  &:nth-of-type(4) {
    bottom: 0;
    right: 0;
    transform: rotate(180deg);
  }
`;
