import { motion } from "framer-motion";
import styled from "styled-components";

export const CloseCom = styled(motion.button)`
  position: fixed;
  background-color: var(--color-transparent);
  z-index: 999999999;
  display: flex;
  transition: opacity 0.05s ease 0s;

  @media only screen and (min-width: 576px) {
    top: 2vw;
    right: 2vw;
    width: 3.5vw;
    height: 3.5vw;
  }

  @media only screen and (min-width: 992px) {
    width: 3vw;
    height: 3vw;
  }

  @media only screen and (max-width: 575px) {
    top: 4vw;
    right: 3.5vw;
    width: 8vw;
    height: 8vw;
  }

  & svg {
    width: 100%;
    height: 100%;
  }
`;
