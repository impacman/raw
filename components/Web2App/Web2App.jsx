import { useRef, useState, useEffect } from 'react';
import { SmoothScrollProviderWithouDestroy } from '@/context/scroll';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { Web2AppCom, Content, Btn, LogoWrap, Title, Descr, Img, ImgMini } from './styled';

import Logo from '../Logo';
import Picture from '../Picture';

const Web2App = ({}) => {
  const refContainer = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const { isMinMobile } = useMatchMedia();

  useEffect(() => {
    isMinMobile ? setIsMobile(true) : setIsMobile(false);
  }, [isMinMobile]);

  return (
    <>
      {!isMobile && <Btn href="#">GET RAW NOW</Btn>}
      <SmoothScrollProviderWithouDestroy refContainer={refContainer}>
        <Web2AppCom data-scroll-container ref={refContainer}>
          <ImgMini>
            <Picture path={'web2app'} src={'tt-mini'} alt={'RAW'} png />
          </ImgMini>
          <Img>
            <Picture path={'web2app'} src={'tt'} alt={'RAW'} png />
          </Img>
          <Content>
            <LogoWrap>
              <Logo noLink />
            </LogoWrap>
            <Title>
              <span>Find new</span>
              <span>match fast</span>
            </Title>
            <Descr>
              <span>on RAW</span>
            </Descr>
            {isMobile && <Btn href="#">GET RAW NOW</Btn>}
          </Content>
        </Web2AppCom>
      </SmoothScrollProviderWithouDestroy>
    </>
  );
};

export default Web2App;
