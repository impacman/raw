import styled from 'styled-components';

export const OpenFormCom = styled.a`
  @media only screen and (max-width: 575px) {
    width: 100%;
    height: 17.06vw;
    left: 0;
    border-radius: 4.26vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-family: var(--font-poppins);
    font-size: var(--fz-15-min-mob);
    font-weight: 600;
    background-color: var(--color-violet);
    color: var(--color-white);

    transition: background-color 0.1s ease 0s;

    &:active {
      background-color: var(--color-mauve);
    }
  }
`;
