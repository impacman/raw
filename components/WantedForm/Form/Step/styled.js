import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StepCom = styled(motion.div)`
  position: relative;

  @media only screen and (min-width: 576px) {
    height: 28.15vw;
  }

  @media only screen and (max-width: 575px) {
    height: 101.86vw;
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: flex-start;
  color: var(--color-black);

  @media only screen and (min-width: 576px) {
    line-height: 1.2;
    font-size: var(--fz-60-des);
    margin: 0 0 3.27vw -1.61vw;
  }

  @media only screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    font-size: var(--fz-31-min-mob);
    font-weight: 800;
    margin-bottom: 3.2vw;
  }
`;

export const SupLabel = styled.div`
  @media only screen and (max-width: 575px) {
    color: var(--color-black);
    font-size: var(--fz-15-min-mob);
    font-family: var(--font-poppins);
    font-weight: 300;
    line-height: 1.35;
    height: 25.6vw;
    margin-bottom: 2.66vw;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 576px) {
    line-height: 1.8;
    font-size: var(--fz-40-des);

    & svg {
      width: 0.6vw;
    }
  }

  @media only screen and (max-width: 575px) {
    align-self: center;
    margin-bottom: 5.6vw;
    font-size: var(--fz-15-min-mob);
    font-weight: 400;

    & svg {
      display: none;
    }
  }
`;

export const WrapBtn = styled.div`
  position: absolute;
  bottom: 0;

  @media only screen and (min-width: 576px) {
    left: 50%;
    transform: translateX(-50%);
  }

  @media only screen and (max-width: 575px) {
    height: 17.06vw;
    left: 0;
    width: 100%;

    & button {
      width: 100%;
      height: 100%;
      border-radius: 4.26vw;
      justify-content: center;
      text-transform: capitalize;
      font-family: var(--font-poppins);
      font-size: var(--fz-15-min-mob);

      & svg {
        display: none;
      }
    }
  }
`;

export const Descr = styled.p`
  font-family: var(--font-poppins);
  color: var(--color-black);
  line-height: 1.2;

  @media only screen and (min-width: 576px) {
    font-size: var(--fz-40-des);
    font-weight: 100;
    margin-bottom: 1vw;
  }

  @media only screen and (max-width: 575px) {
    position: absolute;
    bottom: 20.53vw;
    left: 0;
    font-size: var(--fz-11-min-mob);
    font-weight: 300;
  }
`;

export const DescrLink = styled(Link)`
  font-family: var(--font-poppins);
  color: var(--color-black);
  line-height: 1.2;

  & span {
    text-decoration: underline;
  }

  @media only screen and (min-width: 576px) {
    font-size: var(--fz-40-des);
    font-weight: 100;
    margin-bottom: 1vw;

    &.isAbsolute {
      position: absolute;
      bottom: -0.5vw;
      left: 0;
      font-size: var(--fz-30-des);
      font-weight: 200;
    }
  }

  @media only screen and (max-width: 575px) {
    position: absolute;
    bottom: 20.53vw;
    left: 0;
    font-size: var(--fz-11-min-mob);
    font-weight: 300;
  }
`;
