import styled from 'styled-components';

export const FormCom = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  transition: opacity 0.3s ease 0s;

  @media only screen and (min-width: 992px) {
    margin-bottom: 4vw;
  }

  @media only screen and (max-width: 991px) {
    margin: 14vw 0 24vw;
  }

  @media only screen and (max-width: 440px) {
    margin: 10vw 0 28vw;
  }
`;

export const BtnWrap = styled.div`
  position: absolute;
  display: ${({ styledHidden }) => (styledHidden ? 'none' : 'block')};
  pointer-events: ${({ styledHidden }) => (styledHidden ? 'none' : 'auto')};
  width: ${({ styledHidden }) => (styledHidden ? '0' : 'auto')};
  height: ${({ styledHidden }) => (styledHidden ? '0' : 'auto')};
  overflow: ${({ styledHidden }) => (styledHidden ? 'hidden' : 'visible')};

  @media only screen and (min-width: 992px) {
    right: 12.5vw;
    bottom: -3vw;
  }

  @media only screen and (max-width: 991px) {
    right: 5vw;
    bottom: -20vw;
  }

  @media only screen and (max-width: 575px) {
    right: 6vw;
    bottom: -14vw;
  }
`;

export const Error = styled.div`
  position: absolute;
  top: 0;
  color: var(--color-red);
  text-transform: uppercase;
  font-family: var(--font-poppins);
  font-weight: 200;

  @media only screen and (min-width: 992px) {
    right: var(--side-dimensions);
    transform: translateY(-4vw);
    font-size: 1vw;
  }

  @media only screen and (max-width: 991px) {
    top: -6vw;
    right: 3vw;
    font-size: 2vw;
  }

  @media only screen and (max-width: 575px) {
    top: -6vw;
    right: 5vw;
    font-size: 3vw;
  }
`;
