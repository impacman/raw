import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeartCom = styled(motion.svg)``;

export const Bg = styled.path`
  transition: all 0.6s ease 0.2s;
  fill: transparent;

  &.active {
    fill: #6a73f6;
  }
`;
