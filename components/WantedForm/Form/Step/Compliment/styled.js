import styled from 'styled-components';

export const ComplimentCom = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--color-transparent);
  font-family: var(--font-poppins);
  color: var(--color-black);
  overflow: hidden;

  @media only screen and (min-width: 576px) {
    height: 14.41vw;
    font-size: var(--fz-50-des);
    margin-bottom: 3.27vw;
    border-width: 0.15vw;
  }

  @media only screen and (max-width: 575px) {
    height: 50.13vw;
    font-size: var(--fz-15-min-mob);
    border-width: 0.26vw;
  }
`;

export const Text = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: inherit;
  border-radius: inherit;
  background-color: inherit;
  color: inherit;
  border-style: solid;
  border-color: var(--color-orchid);
  transition-property: border-color, color;
  transition-timing-function: ease;
  transition-duration: 0.2s;
  resize: none;
  font-family: var(--font-poppins);
  line-height: 1.2;
  font-weight: 500;
  pointer-events: none;

  .isError & {
    color: var(--color-free-speech-red);
  }

  @media only screen and (min-width: 576px) {
    padding: 2.01vw 1.39vw;
    border-radius: 1.54vw;
  }

  @media only screen and (max-width: 575px) {
    padding: 3.2vw 14.39vw 4.26vw 4.26vw;
    border-radius: 4.26vw;
  }
`;

export const Btn = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: var(--color-transparent);
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  & svg {
    transform: scale(0.8);
  }

  @media only screen and (min-width: 576px) {
    width: 4vw;
    height: 4vw;
  }

  @media only screen and (max-width: 575px) {
    width: 10vw;
    height: 10vw;
  }

  @media (hover: hover) {
    cursor: pointer;
    transition-duration: 0.5s;

    &:hover {
      transform: rotate(180deg);
    }
  }

  &:active {
    transform: rotate(180deg);
  }
`;
