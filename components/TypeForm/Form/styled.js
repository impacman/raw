import { motion } from "framer-motion";
import styled from "styled-components";

export const FormCom = styled(motion.form)`
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-violet);
  border-radius: 0;
  overflow-x: hidden;
  overflow-y: auto;

  @media only screen and (max-width: 991px) {
    padding: 0 11.765vw;
  }

  @media only screen and (max-width: 991px) and (max-height: 440px) {
    padding: 0 10vw;
  }

  @media only screen and (min-width: 992px) {
    padding: 0 27.5vw;
  }
`;
