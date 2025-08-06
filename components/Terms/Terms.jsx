import { useRef } from 'react';
import { SmoothScrollProviderWithouDestroy } from '@/context/scroll';
import { TermsCom, TermsTitle, WrapLogo } from './styled';

import Descr from './Descr';
import Blocks from './Blocks';

import Rights from '../Rights';
import NavigationBottom from '../NavigationBottom';
import LogoSvg from '../SVG/Logo';

const Terms = ({ data, logo, noNav, noRights }) => {
  const refContainer = useRef(null);
  const { theme, numbering, title, description, blocks } = data;

  return (
    <>
      {logo && (
        <WrapLogo>
          <LogoSvg color={'white'} />
        </WrapLogo>
      )}
      <SmoothScrollProviderWithouDestroy refContainer={refContainer}>
        <TermsCom data-scroll-container styledTheme={theme} ref={refContainer} data-triger="terms">
          {title && (
            <TermsTitle styledTheme={theme}>
              <h1>{title}</h1>
            </TermsTitle>
          )}
          {description && <Descr description={description} theme={theme} />}
          {blocks && <Blocks blocks={blocks} numbering={numbering} theme={theme} />}
          {!noNav && <NavigationBottom dark={theme === 'white' && true} posStatic />}
        </TermsCom>
        {!noRights && <Rights dark={theme === 'light' && true} />}
      </SmoothScrollProviderWithouDestroy>
    </>
  );
};

export default Terms;
