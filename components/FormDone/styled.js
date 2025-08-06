import { motion } from 'framer-motion';
import styled from 'styled-components';

const Done = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  color: var(--color-white);
  text-transform: uppercase;

  @media only screen and (min-width: 992px) {
    font-size: var(--fz-60-des);
  }

  @media only screen and (max-width: 991px) {
    font-size: var(--fz-26-tab);
  }

  @media only screen and (max-width: 575px) {
    font-size: var(--fz-18-mob);
  }
`;

export const DoneFixed = styled(Done)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  font-weight: 200;

  @media only screen and (min-width: 576px) {
    padding: 10vw 10.5vw;
  }

  @media only screen and (max-width: 575px) {
    padding: 0 12vw;
  }
`;

export const DoneNormal = styled(Done)`
  font-weight: 100;
  font-family: var(--font-poppins);
  line-height: 1.2;

  @media only screen and (min-width: 576px) {
    padding: 10vw 10.5vw 12vw;
  }

  @media only screen and (min-width: 992px) {
    padding: 4vw 10.5vw 6vw;
  }

  @media only screen and (max-width: 575px) {
    padding: 25vw 5vw 2vw;
  }
`;
