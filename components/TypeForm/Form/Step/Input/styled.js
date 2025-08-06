import styled from "styled-components";

export const InputText = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--color-transparent);
  border-bottom: 1px solid var(--color-black);
  transition-property: border-color, color;
  transition-timing-function: ease;
  transition-duration: 0.2s;
  font-family: var(--font-poppins);
  border-radius: 0;

  &.isError {
    border-color: var(--color-red);
    color: var(--color-red);
  }

  @media only screen and (min-width: 992px) {
    height: 3.86vw;
    font-size: var(--fz-70-des);
    margin-bottom: 0.74vw;
  }

  @media only screen and (max-width: 991px) {
    height: 6.5vw;
    font-size: var(--fz-35-tab);
    margin-bottom: 1.2vw;
  }

  @media only screen and (max-width: 575px) {
    height: 12vw;
    font-size: var(--fz-37-mob);
    margin-bottom: 4vw;
  }
`;

export const InputTextEl = styled.input`
  width: inherit;
  height: inherit;
  font-size: inherit;
  border-radius: inherit;
  background-color: inherit;
  color: inherit;

  &::placeholder {
    color: inherit;
    opacity: 0.6;
    font-family: inherit;
  }
`;

export const InputRadio = styled.div`
  background-color: rgba(0, 0, 0, 0.15);
  border-style: solid;
  border-color: var(--color-black);
  transition: border-color 0.3s ease 0s;

  &.isError {
    border-color: var(--color-red);
  }

  @media only screen and (min-width: 992px) {
    width: 21.99vw;
    font-size: var(--fz-70-des);
    margin: 0 0.74vw 0.74vw;
    border-radius: 0.3vw;
    border-width: 0.06vw;
  }

  @media only screen and (max-width: 991px) {
    width: 44vw;
    font-size: var(--fz-35-tab);
    margin: 0 1.2vw 1.2vw;
    border-radius: 1vw;
    border-width: 0.15vw;
  }

  @media only screen and (max-width: 575px) {
    width: 100%;
    font-size: var(--fz-37-mob);
    margin: 0 0 3vw;
    border-radius: 1.5vw;
    border-width: 0.3vw;

    &:last-of-type {
      margin-bottom: 4vw;
    }
  }
`;

export const InputRadioEl = styled.input`
  display: none;

  &:checked + label {
    background-color: var(--color-snuff);
  }
`;

export const InputRadioLabel = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: inherit;
  background-color: var(--color-transparent);
  transition: background-color 0.3s ease 0s;

  @media only screen and (min-width: 992px) {
    padding: 0.4vw 0.667vw;
  }

  @media only screen and (max-width: 991px) {
    padding: 1.3vw 1.3vw;
  }

  @media only screen and (max-width: 575px) {
    padding: 2vw 2.059vw;
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background-color: var(--color-violet);
    }
  }
`;

export const InputRadioLabelLetter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: var(--color-black);
  background-color: var(--color-black-lighter);

  @media only screen and (min-width: 992px) {
    width: 1.917vw;
    height: 1.917vw;
    font-size: 1.228vw;
    margin-right: 0.667vw;
    border-width: 0.06vw;
    border-radius: 0.317vw;
  }

  @media only screen and (max-width: 991px) {
    width: 3.5vw;
    height: 3.5vw;
    font-size: 2.5vw;
    margin-right: 1.2vw;
    border-width: 0.15vw;
    border-radius: 0.5vw;
  }

  @media only screen and (max-width: 575px) {
    width: 6.306vw;
    height: 6.306vw;
    font-size: 4.118vw;
    margin-right: 2.059vw;
    border-width: 0.3vw;
    border-radius: 1.067vw;
  }
`;

export const Err = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(90%);
  color: inherit;

  @media only screen and (min-width: 992px) {
    font-size: var(--fz-30-des);
    bottom: -0.74vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: var(--fz-26-tab);
    bottom: -1.2vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-20-mob);
    bottom: -4vw;
  }
`;
