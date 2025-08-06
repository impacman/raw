import styled from 'styled-components';

export const ListCom = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--color-white);

  @media only screen and (min-width: 992px) {
    padding: 11.66vw 9.18vw;
  }

  @media only screen and (max-width: 991px) {
    padding: 16.9vw 9.3vw;
  }
`;

export const El = styled.ul`
  width: 100%;

  @media only screen and (min-width: 992px) {
    font-size: var(--fz-252-des);
  }

  @media only screen and (max-width: 991px) {
    font-size: var(--fz-90-mob);
  }
`;

export const Item = styled.li`
  color: ${({ mod }) => (mod ? 'var(--color-violet)' : 'var(--color-black)')};

  &:not(:last-of-type) {
    margin-bottom: 2vh;
  }

  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ mod }) => (mod ? 'transparetn' : 'var(--color-white)')};
    transition: transform 1.3s ease 0s;
    transform-origin: top center;
  }

  &.is-inview::after {
    transform: scaleY(0);
  }
`;
