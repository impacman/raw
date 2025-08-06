import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ItemCom = styled(motion.div)`
  width: 100%;
  height: auto;
  font-family: var(--font-poppins);

  &:not(:last-of-type) {
    border-bottom: 0.05vw solid var(--color-white);
  }

  @media only screen and (min-width: 992px) {
    padding: 0 8.91vw;
  }

  @media only screen and (max-width: 991px) {
    padding: 0 8vw;
  }
`;

export const Title = styled.h2`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 300;

  @media only screen and (min-width: 576px) {
    font-size: var(--fz-108-des);

    & svg {
      flex: 0 0 4.207vw;
      width: 4.207vw;
      height: 4.207vw;
      margin-left: 4vw;
    }
  }

  @media only screen and (min-width: 992px) {
    padding: 2vw 0;
  }

  @media only screen and (max-width: 991px) {
    padding: 4vw 0;
  }

  @media only screen and (max-width: 575px) {
    padding: 6vw 0;
    font-size: var(--fz-28-mob);
    line-height: 1.1;

    & svg {
      flex: 0 0 5vw;
      width: 5vw;
      height: 5vw;
      margin-left: 4vw;
    }
  }
`;

export const Description = styled(motion.div)`
  width: 100%;
  overflow: hidden;
`;

export const Text = styled.p`
  font-weight: 100;
  line-height: 1.25;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;

  & a {
    font-weight: 300;
    text-decoration: underline;
  }

  & svg {
    fill: var(--color-violet);
  }

  @media only screen and (min-width: 992px) {
    padding-bottom: 4.08vw;
    font-size: var(--fz-30-des);

    & span {
      &:not(:last-of-type) {
        margin-bottom: 1vw;
      }
    }

    & svg {
      width: 1vw;
      height: 1vw;
    }
  }

  @media only screen and (max-width: 991px) {
    padding-bottom: 6vw;
    font-size: var(--fz-20-tab);

    & span {
      &:not(:last-of-type) {
        margin-bottom: 1.5vw;
      }
    }

    & svg {
      width: 1.5vw;
      height: 1.5vw;
    }
  }

  @media only screen and (max-width: 575px) {
    padding: 0 0 12vw 3.5vw;
    line-height: 1.4;
    font-size: var(--fz-19-mob);
    text-transform: none;

    & span {
      &:not(:last-of-type) {
        margin-bottom: 3vw;
      }
    }

    & svg {
      width: 3vw;
      height: 3vw;
    }
  }
`;
