import styled from 'styled-components';

export const AboutCom = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100%;
  background-color: var(--color-black);
`;

export const Wrapper = styled.div`
  @media only screen and (min-width: 992px) {
    padding: 10.64vw 9.18vw 0;
  }

  @media only screen and (max-width: 991px) {
    padding: 11vw 9vw 0;

    display: flex;
    flex-direction: column;
  }
`;

export const TitleWrap = styled.div`
  color: var(--color-violet);
  line-height: 1.25;
  letter-spacing: 0.0148vw;

  @media only screen and (max-width: 991px) {
    font-size: ${({ styledTitle }) => (styledTitle ? '12.95vw' : 'var(--fz-118-mob)')};
  }
`;

export const TextProfile = styled.p`
  color: var(--color-white);
  font-weight: 400;
  line-height: 1.23;
  text-transform: uppercase;

  @media only screen and (min-width: 992px) {
    font-size: var(--fz-88-des);
    padding: 0.8vw 1.8vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: var(--fz-20-mob);
    padding: 1vw 2vw;

    & br {
      display: none;
    }
  }
`;
