import styled from 'styled-components';

export const BlocksCom = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: var(--font-poppins);
  line-height: 1.4;
  font-weight: 300;

  color: ${({ styledTheme }) => styledTheme === 'violet' && 'var(--color-black)'};
  color: ${({ styledTheme }) => styledTheme === 'white' && 'var(--color-black)'};
  color: ${({ styledTheme }) => styledTheme === 'black' && 'var(--color-white)'};

  @media only screen and (min-width: 992px) {
    font-size: 1.237vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: 1.7vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: 3.8vw;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    @media only screen and (min-width: 992px) {
      margin-bottom: 1.856vw;
    }

    @media only screen and (max-width: 991px) {
      margin-bottom: 2.319vw;
    }

    @media only screen and (max-width: 575px) {
      margin-bottom: 2.819vw;
    }
  }
`;

export const Title = styled.h2`
  text-transform: ${({ styledTitle }) => (styledTitle ? 'uppercase' : 'none')};
  font-weight: ${({ styledTitle }) => (styledTitle ? '400' : '600')};
  display: flex;
  order: 1;

  @media only screen and (min-width: 992px) {
    font-size: ${({ styledTitle }) => (styledTitle ? '2.475vw' : '1.237vw')};
    margin-bottom: 1.856vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: ${({ styledTitle }) => (styledTitle ? '2.938vw' : '1.7vw')};
    margin-bottom: 2.319vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: 3.8vw;
    margin-bottom: 2.829vw;
  }
`;
