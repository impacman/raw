import styled from 'styled-components';

export const InputText = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--color-transparent);
  font-family: var(--font-poppins);
  color: var(--color-black);

  display: ${({ styledPhone }) => (styledPhone ? 'grid' : 'block')};
  grid-template-columns: ${({ styledPhone }) => (styledPhone ? 'auto 1fr' : '1fr')};

  @media only screen and (min-width: 576px) {
    height: 5.56vw;
    font-size: var(--fz-50-des);
    margin-bottom: 3.27vw;
    border-width: 0.15vw;
    grid-gap: ${({ styledPhone }) => (styledPhone ? '2.38vw' : '0')};
  }

  @media only screen and (max-width: 575px) {
    height: 17.06vw;
    font-size: var(--fz-15-min-mob);
    margin-bottom: 17.86vw;
    border-width: 0.26vw;
    grid-gap: ${({ styledPhone }) => (styledPhone ? '2.13vw' : '0')};
  }
`;

export const InputTexWrap = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background-color: inherit;
  color: inherit;
`;

export const InputTextEl = styled.input`
  width: inherit;
  height: inherit;
  font-size: inherit;
  border-radius: inherit;
  background-color: inherit;
  color: inherit;
  border-style: solid;
  border-color: var(--color-orchid);
  transition-property: border-color, color;
  transition-timing-function: ease;
  transition-duration: 0.2s;
  font-family: var(--font-poppins);

  .isError & {
    color: var(--color-free-speech-red);
  }

  &::placeholder {
    color: inherit;
    opacity: 0.6;
    font-family: inherit;
  }

  @media only screen and (min-width: 576px) {
    padding: 0 1.98vw 0 ${({ styledPhone }) => (styledPhone ? '5.5vw' : '1.98vw')};
    border-radius: 1.54vw;
  }

  @media only screen and (max-width: 575px) {
    padding: 0 6.4vw 0 ${({ styledPhone }) => (styledPhone ? '15vw' : '6.4vw')};
    border-radius: 4.26vw;
  }
`;

export const Err = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  color: inherit;
  display: block;
  z-index: 2;

  .isError & {
    color: var(--color-free-speech-red);
  }

  @media only screen and (min-width: 576px) {
    font-size: var(--fz-30-des);
    transform: translate(1.1vw, calc(-100% - 0.61vw));
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-12-min-mob);
    transform: translateY(calc(-100% - 2.4vw));
  }
`;

export const Label = styled.span`
  @media only screen and (min-width: 576px) {
    position: absolute;
    top: 0;
    left: 0;
    color: inherit;
    font-family: var(--font-poppins);
    font-weight: 200;
    z-index: 1;
    font-size: var(--fz-30-des);
    transform: translate(1.1vw, calc(-100% - 0.61vw));

    .isError & {
      color: var(--color-free-speech-red);
    }
  }
`;
