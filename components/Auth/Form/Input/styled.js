import styled from 'styled-components';

export const InputCom = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-poppins);
  font-weight: 200;
  font-size: 1.5vw;
  line-height: 1.5;
  text-transform: uppercase;
  color: var(--color-black);

  @media only screen and (min-width: 576px) {
    padding: 0 10.5vw;
  }

  @media only screen and (min-width: 992px) {
    font-size: var(--fz-50-des);
    margin-bottom: 2vw;
  }

  @media only screen and (max-width: 991px) {
    font-size: var(--fz-26-tab);
    margin-bottom: 4vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-28-mob);
    margin-bottom: 8vw;
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
    background-color: var(--color-black);
    transition: background-color 0.2s ease 0s;
  }

  .isError & {
    color: var(--color-red);

    &::after {
      background-color: var(--color-red);
    }
  }
`;
