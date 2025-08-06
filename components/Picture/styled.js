import styled from 'styled-components';

export const PictureCom = styled.picture`
  pointer-events: none;

  @media only screen and (max-width: 575px) {
    ${({ $styledNoMobile }) => ($styledNoMobile ? 'display: none;' : '')}
  }

  &.isMirror img {
    transform: scaleX(-1);
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
