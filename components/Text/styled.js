import styled from 'styled-components';

const TextCom = styled.span`
  font-family: var(--font-poppins);
  line-height: 1;
  text-transform: uppercase;
  font-weight: 100;
`;

export const TextBold = styled(TextCom)`
  font-family: var(--font-podkova);

  @media only screen and (min-width: 1367px) {
    font-size: var(--fz-60-des);
  }

  @media only screen and (max-width: 1366px) {
    font-size: calc(var(--fz-60-des) / 1.1);
  }

  @media only screen and (max-width: 991px) {
    font-size: 2vw;
    line-height: 1.2;
    font-weight: 300;
    font-family: var(--font-poppins);
  }

  @media only screen and (max-width: 575px) {
    font-size: 2.93vw;
    line-height: 1;
  }

  @media only screen and (max-width: 991px) and (max-height: 440px) {
    font-size: 1.4vw;
  }
`;

export const TextLight = styled(TextCom)`
  @media only screen and (min-width: 1367px) {
    font-size: var(--fz-50-des);
  }

  @media only screen and (max-width: 1366px) {
    font-size: calc(var(--fz-50-des) / 1.1);
  }

  @media only screen and (max-width: 991px) {
    font-size: 2vw;
    line-height: 1.2;
    font-weight: 300;
  }

  @media only screen and (max-width: 575px) {
    font-size: 2.93vw;
    line-height: 1;
  }

  @media only screen and (max-width: 991px) and (max-height: 440px) {
    font-size: 1.2vw;
  }
`;
