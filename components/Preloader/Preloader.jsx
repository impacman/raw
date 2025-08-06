import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PreloaderCom, WrapLogo } from './styled';
import { useRouter } from 'next/router';

import Lines from '../SVG/Lines';
import LogoSvg from '../SVG/Logo';
import LogoLoading from '../SVG/LogoLoading';

const Preloader = ({ loadingState, preloaderColor }) => {
  const [colors, setColors] = useState({});

  useEffect(() => {
    preloaderColor(true) && setColors(preloaderColor(true));
  }, [preloaderColor]);

  if (useRouter().pathname === '/preloader') {
    return (
      <PreloaderCom
        style={{
          backgroundColor: `var(--color-${preloaderColor()})`,
        }}
        className="preloader"
      >
        <Lines color={colors.lines} />
        <WrapLogo>
          <LogoSvg color={colors.logo} />
        </WrapLogo>
        <WrapLogo>
          <LogoLoading color={colors.loading} reverseAnimation />
        </WrapLogo>
      </PreloaderCom>
    );
  } else {
    return (
      <AnimatePresence initial={false}>
        {!loadingState && (
          <PreloaderCom
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 2.5,
            }}
            style={{
              backgroundColor: `var(--color-${preloaderColor()})`,
            }}
            className="preloader"
          >
            <Lines color={colors.lines} />
            <WrapLogo>
              <LogoSvg color={colors.logo} />
            </WrapLogo>
            <WrapLogo>
              <LogoLoading color={colors.loading} />
            </WrapLogo>
          </PreloaderCom>
        )}
      </AnimatePresence>
    );
  }
};

export default Preloader;
