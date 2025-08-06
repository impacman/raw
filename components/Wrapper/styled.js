import styled from 'styled-components';

export const WrapperCom = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100%;
  font-family: var(--font-podkova), var(--font-default);
  background-color: ${({ styledDark }) => (styledDark ? 'var(--color-black)' : 'var(--color-transparent)')};
  overflow: hidden !important;
`;
