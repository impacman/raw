import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PreloaderCom = styled(motion.div)`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100% !important;
  z-index: 9999999999 !important;
  transform: none !important;

  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  background-color: var(--color-black);
  transition: background-color 0.3s ease 0s;
`;

export const WrapLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;

  @media only screen and (min-width: 576px) {
    width: 20vw;
  }

  @media only screen and (max-width: 575px) {
    width: 50vw;
  }
`;
