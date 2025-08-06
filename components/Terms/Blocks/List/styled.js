import styled from 'styled-components';

export const ListCom = styled.div`
  display: flex;
  flex-direction: column;
  order: ${({ styledOrder }) => styledOrder && styledOrder};

  @media only screen and (min-width: 992px) {
    margin-bottom: ${({ styledMb }) => (styledMb ? '1.79vw' : '0')};
  }

  @media only screen and (max-width: 991px) {
    margin-bottom: ${({ styledMb }) => (styledMb ? '2.253vw' : '0')};
  }

  @media only screen and (max-width: 575px) {
    margin-bottom: ${({ styledMb }) => (styledMb ? '2.753vw' : '0')};
  }
`;

export const Descr = styled.p`
  font-weight: ${({ styledBold }) => styledBold && 500};
  order: ${({ styledOrder }) => styledOrder && styledOrder};

  & b {
    font-weight: 500;
  }

  @media only screen and (min-width: 992px) {
    margin-top: ${({ styledMt }) => (styledMt ? '1.79vw' : '0')};
    margin-bottom: ${({ styledMb }) => (styledMb ? '1.79vw' : '0')};
  }

  @media only screen and (max-width: 991px) {
    margin-top: ${({ styledMt }) => (styledMt ? '2.253vw' : '0')};
    margin-bottom: ${({ styledMb }) => (styledMb ? '2.253vw' : '0')};
  }

  @media only screen and (max-width: 575px) {
    margin-top: ${({ styledMt }) => (styledMt ? '2.753vw' : '0')};
    margin-bottom: ${({ styledMb }) => (styledMb ? '2.753vw' : '0')};
  }
`;

export const Items = styled.ol`
  display: flex;
  flex-direction: column;
  order: ${({ styledOrder }) => styledOrder && styledOrder};
`;

export const Item = styled.li`
  display: flex;
`;
