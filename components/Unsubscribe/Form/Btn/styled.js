import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BtnCom = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  background-color: var(--color-black);
  color: var(--color-white);
  font-family: var(--font-podkova);
  text-transform: ${({ $styledStep }) => ($styledStep ? 'uppercase' : 'none')};

  @media only screen and (min-width: 576px) {
    height: 4.64vw;
    border-radius: 1.29vw;
    padding: 0 1.54vw;
    font-size: var(--fz-60-des);
  }

  @media only screen and (max-width: 575px) {
    width: 100%;
    height: 17.06vw;
    border-radius: 4.26vw;
    font-size: var(--fz-15-min-mob);
    padding: 0 2vw;
  }
`;
