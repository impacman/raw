import { useState, useEffect } from 'react';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { BannerCom, TitleWrap, BtnWrap, ImgWrap } from './styled';

import Title from '@/components/Title';
import Btn from '@/components/Btn';
import Picture from '@/components/Picture';

const Banner = ({ banner }) => {
  const { isMobile } = useMatchMedia();

  const [mobile, setMobile] = useState(false);
  useEffect(() => setMobile(isMobile), [isMobile]);

  return (
    <BannerCom data-scroll-section data-triger="banner">
      <TitleWrap data-scroll data-scroll-speed="1" data-scroll-delay="0.05">
        <Title>{banner.title}</Title>
      </TitleWrap>
      <BtnWrap>
        <Btn type={'link'} href={'ambassadors'}>
          Tap <br /> to join
        </Btn>
      </BtnWrap>
      <ImgWrap>
        <Picture path={banner.img.path} src={banner.img.src} alt={banner.img.alt} />
      </ImgWrap>
    </BannerCom>
  );
};

export default Banner;
