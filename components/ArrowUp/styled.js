import styled from 'styled-components';

export const ArrowUpCom = styled.svg`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;
  height: auto;

  @media only screen and (min-width: 992px) {
    width: 2.41vw;
    right: var(--side-dimensions);
  }

  @media only screen and (max-width: 991px) {
  }
`;
