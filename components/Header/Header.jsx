/** @format */

import { useState, useEffect } from 'react';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { HeaderCom, Text, Promo } from './styled';

import Logo from '../Logo';
import OpenNavigation from '../OpenNavigation';

const AddLogo = ({ dark, mobile, logo: { hide, hideDesktop, colorViolet } }) =>
  hide || (hideDesktop && !mobile) ? null : <Logo dark={!!dark} violet={colorViolet} />;

const Navigation = ({ dark, mobile, navigation: { hide, lightBody, colorInvert, responsive } }) =>
  (responsive || (mobile && !hide)) && <OpenNavigation color={lightBody ? 'violet' : 'black'} dark={dark} colorInvert={colorInvert} />;

const HeaderText = ({ children, text: { dmUs, promo } }) => {
  const Tag = dmUs ? Text : promo ? Promo : 'div';

  return <Tag>{children}</Tag>;
};

const Header = ({
  children,
  dark,
  minMobile,
  logo = { hide: false, hideDesktop: false, colorViolet: false },
  navigation = { hide: false, lightBody: false, colorInvert: false, responsive: false },
  text = { dmUs: false, promo: false },
}) => {
  const { isMobile } = useMatchMedia();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <HeaderCom $styledMinMobile={minMobile && minMobile}>
      <AddLogo dark={dark} mobile={isMobile} logo={logo} />
      <Navigation dark={dark} mobile={isMobile} navigation={navigation} />
      {children && <HeaderText text={text}>{children}</HeaderText>}
    </HeaderCom>
  );
};

export default Header;
