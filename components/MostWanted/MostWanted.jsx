import { useRef, useState, useEffect } from 'react';
import { SmoothScrollProviderWithouDestroy } from '@/context/scroll';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { MostWantedCom, WrapImg } from './styled';

import Bg from '../Bg';
import Navigation from './Navigation';
import Title from './Title';
import Descr from './Descr';
import OpenForm from './OpenForm';
import ScrollTo from '../ScrollTo';
import WantedForm from '../WantedForm';

const MostWanted = ({ data }) => {
  const refContainer = useRef(null);
  const [mobile, setMobile] = useState(false);

  const { navigation, title, descr, openMobileForm, img, stepsDesktop, stepsMobile, compliments } = data;
  const { isMinMobile } = useMatchMedia();

  useEffect(() => setMobile(isMinMobile), [isMinMobile]);

  return (
    <SmoothScrollProviderWithouDestroy refContainer={refContainer}>
      <MostWantedCom data-scroll-container ref={refContainer}>
        <WrapImg data-scroll-section>
          <Bg img={{ path: 'bg', src: 'mostwanted', alt: 'RAW MostWanted Bg' }} />
        </WrapImg>
        {!mobile && <Navigation navigation={navigation} />}
        <Title title={title} />
        <Descr descr={descr} />
        {mobile && <OpenForm openMobileForm={openMobileForm} />}
        {mobile && <ScrollTo id={'wanted-form'} />}
        <WantedForm img={img} steps={!mobile ? stepsDesktop : stepsMobile} compliments={compliments} />
      </MostWantedCom>
    </SmoothScrollProviderWithouDestroy>
  );
};

export default MostWanted;
