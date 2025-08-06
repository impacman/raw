import Link from 'next/link';
import styled from 'styled-components';

export const LogoLinkCom = styled(Link)`
  width: auto;
  height: 100%;
  display: block;

  & svg {
    width: auto;
    height: 100%;
  }
`;

export const LogoNoLinkCom = styled.div`
  width: auto;
  height: 100%;
  display: block;

  & svg {
    width: auto;
    height: 100%;
  }
`;
