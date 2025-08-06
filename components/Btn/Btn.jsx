import { useAppContext } from '@/context/state';
import { BtnCom, LinkCom, AdaptiveLink } from './styled';

const Btn = ({ type, href, dark, children }) => {
  const { counterClicks } = useAppContext();

  if (type === 'link') {
    return (
      <LinkCom href={href} passHref>
        <span>{children}</span>
      </LinkCom>
    );
  } else if (type === 'adaptive-scroll') {
    return (
      <AdaptiveLink href={!counterClicks ? `#${href}` : null} $styledDark={dark} data-scroll-to={!counterClicks ? true : null}>
        <span>{children}</span>
      </AdaptiveLink>
    );
  } else {
    return (
      <BtnCom type={type} $styledDark={dark}>
        <span>{children}</span>
      </BtnCom>
    );
  }
};

export default Btn;
