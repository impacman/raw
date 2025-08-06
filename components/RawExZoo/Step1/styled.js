import styled from 'styled-components';

export const Step1Com = styled.div`
    background-color: var(--color-violet);
    height: 100vh;
    .img1 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
    .img2 {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
    }
`;

export const Content = styled.div`
    max-width: 327px;
    height: 100vh;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: center;
    h1 {
        width: 100%;
        margin: 0 auto 24px;
        font-family: var(--font-poppins);
        color: var(--color-white);
        font-size: 50px;
        font-style: normal;
        font-weight: 800;
        line-height: 42px;
        letter-spacing: -2px;
        text-transform: uppercase;
        position: relative;
    }

    .img6 {
        position: absolute;
        top: 0;
        right: 16px;
        width: 48px;
        height: 48px;
    }
    .img7 {
        margin: 60px 0 0;
        height: 52%;
    }
`;

export const Bottom = styled.div`
    position: absolute;
    top: 63%;
    width: 100%;
`;

export const Btn = styled.button`
    font-family: var(--font-podkova);
    width: 100%;
    height: 60px;
    margin: 0 auto 30px;
    background-color: var(--color-white);
    border-radius: 8px;
    font-weight: 800;
    font-size: 24px;
    line-height: 28px;
    text-transform: none;
    color: var(--color-black);
    display: flex;
    align-items: center;
    justify-content: center;
`;
