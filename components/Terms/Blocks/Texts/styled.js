import styled from 'styled-components';

export const TextsCom = styled.div`
  flex-direction: column;
  order: ${({ styledOrder }) => styledOrder && styledOrder};
`;

export const Text = styled.p`
  margin: ${({ styledMt }) => (styledMt ? '1.79vw' : '0')} 0 ${({ styledMb }) => (styledMb ? '1.79vw' : '0')};
  font-weight: ${({ bold }) => bold && 500};
  display: ${({ styledInline }) => styledInline && 'inline'};
`;

export const Tablet = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  overflow-x: auto;

  @media only screen and (max-width: 768px) {
    width: 100vw;
    margin: 0 -10vw;
    padding: 2vw 10vw 4vw;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-left: 0.5px solid ${({ styledTheme }) => (styledTheme === 'black' ? 'var(--color-white)' : 'var(--color-black)')};
  border-top: 0.5px solid ${({ styledTheme }) => (styledTheme === 'black' ? 'var(--color-white)' : 'var(--color-black)')};
  border-bottom: 0.5px solid ${({ styledTheme }) => (styledTheme === 'black' ? 'var(--color-white)' : 'var(--color-black)')};

  &:not(:last-of-type) {
    border-bottom: none;
  }

  @media only screen and (max-width: 768px) {
    width: 200vw;
  }
`;

export const Col = styled.div`
  word-wrap: break-word;
  border-right: 0.5px solid ${({ styledTheme }) => (styledTheme === 'black' ? 'var(--color-white)' : 'var(--color-black)')};

  @media only screen and (min-width: 767px) {
    padding: 0.5vw;
  }

  @media only screen and (max-width: 768px) {
    padding: 1vw 1.5vw;
  }
`;
