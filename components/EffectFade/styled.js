import Link from 'next/link';
import styled from 'styled-components';

const stylesEls = () => `overflow: hidden;`;

const stylesTransform = () => `
  transform: translateY(-105%);
  transform-origin: top;

  .isAnim & {
    transition: transform 0.7s ease 0s;
  }

  .isActive & {
    transform: none;
    transition: transform 0.7s ease 0.7s;
  }
`;

export const BlockEL = styled.div`
  ${stylesEls()}

  &.fixed {
    position: fixed;
    width: 100vw;
    text-align: right;
    overflow: hidden;

    &--bottom-right {
      right: 0;
      bottom: 0;
      transform: rotate(90deg) translate(-72.5vw, -43.2vw);
    }

    &--top-left {
      top: 0;
      left: 0;
      transform: rotate(-90deg) translate(-71.5vw, -43.5vw);
    }
  }
`;

export const LinkEl = styled(Link)`
  ${stylesEls()}
`;

export const TransformBlock = styled.div`
  ${stylesTransform()}
`;

export const TransformInlineBlock = styled.span`
  ${stylesTransform()}
`;
