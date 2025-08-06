import styled from 'styled-components';

export const Step5Com = styled.div`
    background: url(/images/rawexzoo/step5-bg.png) var(--color-black) no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;
    
    h1 {
        color: var(--color-white);
        text-align: right;
        font-family: var(--font-poppins);
        font-size: 48px;
        font-weight: 700;
        line-height: 40px;
        text-transform: uppercase;
        margin-right: 5.97%;
    }
    .second-text {
        margin-left: 8.21%;
    }

    p {
        color: var(--color-white);
        font-family: var(--font-poppins);
        font-size: 20px;
        font-weight: 600;
        line-height: 25px;
        letter-spacing: -0.8px;
        text-transform: uppercase;
        margin-top: 1.46%;
        margin-bottom: -10px;
        position: relative;
        z-index: 1;
    }
    .text-list {
        padding-left: 30px;
        margin-top: 32px;
        li {
            color: var(--color-white);
            font-family: var(--font-poppins);
            font-size: 20px;
            font-weight: 600;
            line-height: 24px;
            letter-spacing: -0.8px;
            text-transform: uppercase;
            position: relative;
            &:before {
                content: '•';
                position: absolute;
                left: -20px;
                top: 0;
                font-size: 20px;
            }
            @media only screen and (max-height: 750px) {
                font-size: 18px;
            }
        }
    }
    .icons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 16px;
        gap: 12px;
        li {
            background: var(--color-white);
            width: 56px;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }
    }
    .wrapper {
        width: 100%;
    }
    .share {
        display: flex;
        gap: 10px;
    }
    button {
        background: none;
    }
`;

export const Avatar = styled.div`
    width: 270px;
    float: right;
    clear: both;
  img {
      width: 340px;
      height: 340px;
      @media only screen and (max-height: 750px) {
          width: 285px;
          height: 285px;
      }
  }
  p {
      color: var(--font-poppins);
      font-family: var(--font-poppins);
      font-size: 100px;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1;
      position: relative;
      bottom: 10px;
      width: max-content;
      margin: -100px auto 0;
  }
`;

export const Content = styled.div`
  padding: 0 7.20%;
  p {
      clear: both;
  }
`;

export const Link = styled.button`
    color: var(--color-violet);
    text-align: center;
    font-family: var(--font-poppins);
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.8px;
    text-transform: uppercase;
    background: none;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 16px;
`;

export const Share = styled.div`
    background: url(/images/rawexzoo/step5-bg.png) var(--color-black) no-repeat;
    background-size: cover;
    position: absolute;
    width: 402px;
    height: 800px;
    top: 0;
    left: 0;
    z-index: -1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .logo {
        position: absolute;
        bottom: 63px;
        right: 37px;
        width: 50px;
    }
`;
