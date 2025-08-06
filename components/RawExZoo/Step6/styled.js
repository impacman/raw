import styled from 'styled-components';
import {motion} from "framer-motion";

export const Step6Com = styled.div`
    background: var(--color-black);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    p {
        color: var(--color-white);
        font-family: var(--font-poppins);
        font-size: 25px;
        font-weight: 600;
        line-height: normal;
        padding: 0 6.2% 0;
        display: flex;
        justify-content: center;
    }
    .second {
        flex-direction: row-reverse;
    }
    .wrapper-sliders {
        display: flex;
        flex-direction: column;
        gap: 18px;
        margin-top: 18px;
        width: 100vw;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px 0;
`;

export const Button = styled.button`
    background: none;
    border-radius: 8px;
    color: var(--color-white);
    font-family: var(--font-poppins);
    font-size: 24px;
    font-weight: 800;
    line-height: 28px;
    margin-top: 23px;
    width: 100%;
    max-width: 327px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Wrapper = styled(motion.div)`
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;

    & span,
    & div {
        flex: 0 0 auto;
    }

    img {
        border-radius: 11px;
        border: 1px solid var(--color-white);
        min-width: 112px;
        height: 160px;
        @media only screen and (max-height: 800px) {
            min-width: 82px;
            height: 110px;
        }
    }
`;
