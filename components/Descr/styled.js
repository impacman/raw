import styled from 'styled-components';

export const DescrCom = styled.p`
  font-family: var(--font-poppins);
  font-weight: ${({ styledWeight }) => (styledWeight ? styledWeight : 300)};
  line-height: 1.34;
  text-transform: uppercase;
  text-align: left;

  @media only screen and (min-width: 992px) {
    font-size: var(--fz-40-des);

    &:not(:last-of-type) {
      margin-bottom: 1.2vw;
    }
  }

  @media only screen and (max-width: 991px) {
    font-size: var(--fz-28-tab);

    &:not(:last-of-type) {
      margin-bottom: 2vw;
    }
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-21-mob);

    &:not(:last-of-type) {
      margin-bottom: 5vw;
    }

    &.no-mobile {
      display: none;
    }
  }
`;
