import styled from 'styled-components';

export const DescrCom = styled.div`
  width: 100%;
  color: var(--color-black);
  font-family: var(--font-poppins);

  @media only screen and (min-width: 576px) {
    padding-left: 35.08vw;
    margin-bottom: 3.27vw;
    font-size: var(--fz-46-des);
    font-weight: 200;
    line-height: 1.3;
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-14-min-mob);
    padding: 0 3.73vw;
    margin-bottom: 10.93vw;
    font-weight: 300;
    line-height: 1.8;
  }
`;

export const WrapText = styled.div`
  @media only screen and (min-width: 576px) {
    &:not(:last-of-type) {
      margin-bottom: 3.09vw;
    }

    transform: translateX(${({ styledTransform }) => (styledTransform ? 'calc(-35.08vw + 8.97vw)' : 0)});
  }

  @media only screen and (max-width: 575px) {
    &:not(:last-of-type) {
      margin-bottom: 9.33vw;
    }

    &:last-of-type {
      text-align: right;
    }
  }
`;

export const Text = styled.p`
  @media only screen and (min-width: 576px) {
    &:not(:last-of-type) {
      margin-bottom: 2.66vw;
    }
  }

  @media only screen and (max-width: 575px) {
    &:not(:last-of-type) {
      margin-bottom: 9.33vw;
    }
  }

  &.isBig {
    font-family: var(--font-podkova);
    text-transform: uppercase;
    font-weight: 700;

    @media only screen and (min-width: 576px) {
      font-size: var(--fz-70-des);
    }
  }
`;
