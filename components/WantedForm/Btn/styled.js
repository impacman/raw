import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BtnCom = styled(motion.button)`
  display: flex;
  align-items: center;
  background-color: var(--color-black);
  color: var(--color-white);
  font-family: var(--font-podkova);
  text-transform: ${({ $styledStep }) => ($styledStep ? 'uppercase' : 'none')};

  @media only screen and (min-width: 576px) {
    border-radius: 0.8vw;
    padding: ${({ $styledStep }) => ($styledStep ? '0.5vw 0.85vw 0.55vw' : '0.5vw 2vw 0.7vw')};
    font-size: var(--fz-60-des);
  }

  @media only screen and (max-width: 575px) {
    border-radius: 3vw;
    padding: ${({ $styledStep }) => ($styledStep ? '1.8vw 3.5vw 1.85vw' : '1.8vw 6.5vw 2.5vw')};
    font-size: var(--fz-43-mob);
  }
`;
