import { motion } from "framer-motion";
import styled from "styled-components";

export const BtnStart = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-black);
  color: var(--color-white);
  text-transform: uppercase;
  font-weight: 600;

  @media only screen and (min-width: 992px) {
    width: 37.5vw;
    height: 6.833vw;
    border-radius: 1.667vw;
    font-size: 1.703vw;
  }

  @media only screen and (max-width: 991px) {
    width: 37.538vw;
    height: 6.761vw;
    border-radius: 1.705vw;
    font-size: 1.705vw;
  }

  @media only screen and (max-width: 575px) {
    width: 100%;
    height: 17.117vw;
    border-radius: 4.266vw;
    font-size: 4.266vw;
  }
`;

export const BtnDefault = styled(motion.button)`
  display: flex;
  align-items: center;
  background-color: var(--color-black);
  color: var(--color-white);
  font-family: var(--font-podkova);
  text-transform: ${({ $styledStep }) => ($styledStep ? "uppercase" : "none")};

  @media only screen and (min-width: 992px) {
    border-radius: 0.8vw;
    padding: ${({ $styledStep }) =>
      $styledStep ? "0.5vw 0.85vw 0.55vw" : "0.5vw 2vw 0.7vw"};
    font-size: var(--fz-60-des);
  }

  @media only screen and (max-width: 991px) {
    border-radius: 1.5vw;
    padding: ${({ $styledStep }) =>
      $styledStep ? "1.2vw 2.5vw 1.3vw" : "1vw 4vw 1.5vw"};
    font-size: var(--fz-30-tab);
  }

  @media only screen and (max-width: 575px) {
    border-radius: 3vw;
    padding: ${({ $styledStep }) =>
      $styledStep ? "1.8vw 3.5vw 1.85vw" : "1.8vw 6.5vw 2.5vw"};
    font-size: var(--fz-43-mob);
  }
`;
