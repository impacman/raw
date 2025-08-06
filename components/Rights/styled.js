import styled from 'styled-components';

export const RightsCom = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 7999;
  line-height: 1.2;
  text-transform: uppercase;
  color: ${({ styledDark }) => (styledDark ? 'var(--color-black)' : 'var(--color-white)')};
  opacity: 0.4;

  @media only screen and (min-width: 576px) {
    font-size: 0.64vw;
    bottom: 0.5vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: 2.64vw;
    bottom: 2vw;
  }
`;
