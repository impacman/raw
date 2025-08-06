import styled from 'styled-components';

export const Step3Com = styled.div`
    background-color: var(--color-violet);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    h1 {
        color: var(--color-white);
        text-align: center;
        font-family: var(--font-poppins);
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
        text-transform: uppercase;
        margin-bottom: 16px;
    }
    .player {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        z-index: 1;
        background: var(--color-violet);
    }
`;

export const Img = styled.img`
    width: 230px;
    height: 230px;
`;

export const Avatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        color: var(--color-white);
        text-align: center;
        font-family: var(--font-poppins);
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
        text-transform: uppercase;
    }
    &.main-image {
        position: relative;
        z-index: -1;
        p {
            margin-top: -40px;
        }
    }
    &.sub-image {
        height: 230px;
        p {
            bottom: 27%;
            position: relative;
        }
    }
`;

export const Btn = styled.button`
    font-family: var(--font-podkova);
    width: 100%;
    height: 60px;
    margin-top: 24px;
    background-color: var(--color-black);
    border-radius: 8px;
    font-weight: 800;
    font-size: 24px;
    line-height: 28px;
    text-transform: none;
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 327px;
    bottom: 16%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;
