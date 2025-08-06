import styled from 'styled-components';

export const InputText = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--color-transparent);
  font-family: var(--font-poppins);
  color: var(--color-black);

  @media only screen and (min-width: 576px) {
    height: 4.64vw;
    font-size: var(--fz-50-des);
    margin-bottom: 1.98vw;
    border-width: 0.15vw;
    border-radius: 1.29vw;
  }

  @media only screen and (max-width: 575px) {
    height: 17.06vw;
    font-size: var(--fz-15-min-mob);
    margin-bottom: 4vw;
    border-width: 0.26vw;
    border-radius: 4.26vw;
  }
`;

export const InputTextEl = styled.input`
  width: inherit;
  height: inherit;
  font-size: inherit;
  border-radius: inherit;
  background-color: inherit;
  color: inherit;
  border-style: solid;
  border-color: var(--color-black);
  transition-property: border-color, color;
  transition-timing-function: ease;
  transition-duration: 0.2s;
  font-family: var(--font-poppins);
  border-radius: inherit;

  .isError & {
    color: var(--color-free-speech-red);
    border-color: var(--color-free-speech-red);
  }

  &::placeholder {
    color: var(--color-pink-swan);
    font-family: inherit;
  }

  @media only screen and (min-width: 576px) {
    padding: 0 1.48vw;
  }

  @media only screen and (max-width: 575px) {
    padding: 0 6.4vw;
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
    transform: translate(1.1vw, calc(-100% - 0.3vw));
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-12-min-mob);
    transform: translateY(calc(-100% - 1vw));
  }
`;
