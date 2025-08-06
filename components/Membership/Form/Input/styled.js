import styled from 'styled-components';

export const InputCom = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-poppins);
  font-weight: 200;
  font-size: 1.5vw;
  line-height: 1.5;
  text-transform: uppercase;
  color: var(--color-white);

  @media only screen and (min-width: 576px) {
    padding: 0 16vw;
  }

  @media only screen and (min-width: 992px) {
    font-size: var(--fz-50-des);
    margin-bottom: 2vw;
    padding: 0 10.5vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: var(--fz-26-tab);
    margin-bottom: 4vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-28-mob);
    margin-bottom: 4vw;
    padding: 0 12vw;
  }
`;

export const InputEl = styled.input`
  width: 100%;
  outline: none;
  background-color: var(--color-transparent);
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: 1;
  text-transform: inherit;
  color: inherit;

  @media only screen and (min-width: 992px) {
    height: 3.25vw;
  }

  @media only screen and (max-width: 991px) {
    height: 5.94vw;
  }

  @media only screen and (max-width: 575px) {
    height: 10.39vw;
  }
`;

export const InputMessage = styled.textarea`
  width: 100%;
  height: auto;
  outline: none;
  resize: none;
  overflow: hidden;
  background-color: var(--color-transparent);
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: 1.35;
  text-transform: inherit;
  color: inherit;

  @media only screen and (min-width: 992px) {
    line-height: 1.48;
    padding-bottom: 0.5vw;
    padding-right: 14vw;
  }

  @media only screen and (max-width: 991px) {
    line-height: 1.32;
    padding-bottom: 1vw;
  }

  @media only screen and (max-width: 575px) {
    padding-bottom: 2vw;
  }
`;

export const Label = styled.label`
  position: relative;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: 1.55;
  text-transform: inherit;
  color: inherit;
  transition: color 0.2s ease 0s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 1px;
    background-color: var(--color-white);
    transition: background-color 0.2s ease 0s;
  }

  .isError & {
    color: var(--color-transparent);

    &::after {
      background-color: var(--color-red);
    }
  }
`;

export const Err = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: var(--color-red);
  opacity: 0;
  transition: opacity 0.2s ease 0s;

  .isError & {
    opacity: 1;
  }
`;
