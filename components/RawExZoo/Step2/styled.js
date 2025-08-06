import styled from 'styled-components';

export const Step2Com = styled.div`
    background-color: var(--color-violet);
    height: 100vh;
    position: relative;
`;

export const Content = styled.form`
    position: absolute;
    z-index: 1;
    top: 43%;
    left: 50%;
    transform: translateX(-50%);
    width: 327px;
`;

export const Input = styled.input`
    border-radius: 16px;
    border: 2px solid rgba(255, 255, 255, 0.20);
    padding: 20px;
    color: var(--color-white);
    font-family: var(--font-poppins);
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    background: none;
    width: 100%;
    ::placeholder {
        color: var(--color-white);
        opacity: 1;
    }
    ::-ms-input-placeholder {
        color: var(--color-white);
    }
`;

export const Button = styled.button`
    border-radius: 50%;
    background-color: var(--color-white);
    width: 100px;
    height: 100px;
    color: var(--color-black);
    font-family: var(--font-poppins);
    font-size: 35px;
    font-weight: 600;
    line-height: 70px;
    letter-spacing: -0.347px;
    position: absolute;
    right: 31px;
    top: 28px;
    > div {
        line-height: 0;
    }
`;
