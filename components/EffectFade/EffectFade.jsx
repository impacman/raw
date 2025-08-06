import { BlockEL, LinkEl, TransformBlock, TransformInlineBlock } from './styled';

const EffectFade = ({ children, link, href, positionMobile }) => {
  if (!link) {
    return (
      <BlockEL className={positionMobile ? `fixed fixed--${positionMobile}` : null}>
        <TransformBlock>{children}</TransformBlock>
      </BlockEL>
    );
  } else {
    return (
      <LinkEl href={href} passHref>
        <TransformInlineBlock data-link-name={children}>{children}</TransformInlineBlock>
      </LinkEl>
    );
  }
};

export default EffectFade;
