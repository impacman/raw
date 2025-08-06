import styled from 'styled-components';

export const DescrCom = styled.div`
  font-family: var(--font-poppins);
  font-weight: 600;
  line-height: 1.4;

  color: ${({ styledTheme }) => styledTheme === 'violet' && 'var(--color-black)'};
  color: ${({ styledTheme }) => styledTheme === 'white' && 'var(--color-black)'};
  color: ${({ styledTheme }) => styledTheme === 'black' && 'var(--color-white)'};

  @media only screen and (min-width: 992px) {
    font-size: 1.237vw;
    margin-bottom: 1.856vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: 1.7vw;
    margin-bottom: 2.319vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: 3.8vw;
  }
`;

export const Text = styled.p`
  font-weight: ${({ bold }) => (bold ? 500 : 300)};
  display: ${({ inline }) => inline && 'inline'};

  &:not(:last-of-type) {
    @media only screen and (min-width: 992px) {
      margin-bottom: ${({ inline }) => (inline ? '0vw' : '1.79vw')};
    }

    @media only screen and (max-width: 991px) {
      margin-bottom: ${({ inline }) => (inline ? '0vw' : '2.253vw')};
    }

    @media only screen and (max-width: 575px) {
      margin-bottom: ${({ inline }) => (inline ? '0vw' : '2.753vw')};
    }
  }
`;
