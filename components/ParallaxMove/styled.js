import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ParallaxMoveCom = styled.div`
  position: relative;
  width: 100vw;
  /* overflow: hidden; */
`;

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;

  & span,
  & div {
    flex: 0 0 auto;
  }
`;
