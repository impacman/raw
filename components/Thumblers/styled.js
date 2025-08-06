import styled from 'styled-components';

export const ThumblersCom = styled.div`
  position: fixed;
  top: 50%;
  right: 3.15vw;
  transform: translateY(-50%);
  width: 1.42vw;
  height: 10.02vw;
  z-index: 259;

  & .swiper {
    width: 100%;
    height: 100%;
  }

  & .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    overflow: hidden;

    & span {
      width: 100%;
      height: 4px;
      background-color: var(--color-white);

      &:first-of-type {
        transform: translateY(-2px);
      }

      &:last-of-type {
        transform: translateY(2px);
      }
    }
  }

  @media only screen and (max-width: 991px) {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
`;
