import { isMobile } from 'react-device-detect';
import { SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper';
import { DescrSlideCom, DescrGrid, DescrWrap } from './styled';

import Descr from '@/components/Descr';

const DescrSlide = ({ description }) => {
  const speed = isMobile ? 700 : 1500;

  return (
    <DescrSlideCom speed={speed} modules={[Mousewheel, Navigation]} mousewheel navigation>
      {description.map(({ id, title, texts }) => (
        <SwiperSlide key={id}>
          <DescrGrid>
            <DescrWrap>
              <Descr>{title}</Descr>
            </DescrWrap>
            <DescrWrap>
              {texts.map(({ id, text, noMobile }) => (
                <Descr weight={100} key={id} noMobile={noMobile}>
                  {text}
                </Descr>
              ))}
            </DescrWrap>
          </DescrGrid>
        </SwiperSlide>
      ))}
    </DescrSlideCom>
  );
};

export default DescrSlide;
