import styled from 'styled-components';

export const TitleCom = styled.h1`
  display: flex;
  flex-direction: column;
  color: var(--color-black);
  line-height: 0.8;
  text-transform: uppercase;

  @media only screen and (min-width: 576px) {
    font-size: var(--fz-300-des);
    margin-bottom: 4.33vw;
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-59-min-mob);
    margin-bottom: 18.13vw;
    padding-left: 3.73vw;
  }

  & span {
    &:nth-of-type(2) {
      @media only screen and (min-width: 576px) {
        margin-left: 9.03vw;
      }

      @media only screen and (max-width: 575px) {
        margin-left: 14.13vw;
      }
    }

    &:nth-of-type(3) {
      color: var(--color-violet);
      font-weight: 600;

      @media only screen and (min-width: 576px) {
        font-size: var(--fz-70-des);
        margin: -0.8vw 0 0 35.36vw;
      }

      @media only screen and (max-width: 575px) {
        font-size: var(--fz-20-min-mob);
        margin-left: 46.66vw;
      }
    }
  }
`;
