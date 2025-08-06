import styled from 'styled-components';

export const Images = styled.div`
  position: relative;
  width: 41.02vw;
  background-color: var(--color-black);
  overflow: hidden;

  @media only screen and (min-width: 992px) {
    width: calc(100% / 2.5);
    height: 24.62vw;
  }

  @media only screen and (max-width: 991px) {
    width: calc(100% / 1.5);
    height: 45vw;
  }
`;
