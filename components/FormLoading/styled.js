import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FormLoadingCom = styled(motion.div)`
  position: ${({ $styledPosition }) => ($styledPosition ? $styledPosition : 'fixed')};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999999;
  background-color: ${({ $styledColor }) => ($styledColor ? `var(--color-${$styledColor})` : 'var(--color-black)')};
`;
