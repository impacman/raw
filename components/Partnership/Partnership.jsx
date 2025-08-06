import { useRef } from 'react';
import { SmoothScrollProviderWithouDestroy } from '@/context/scroll';
import { PartnershipCom } from './styled';

import Rights from '../Rights';
import NavigationBottom from '../NavigationBottom';

import Banner from '../Banner';
import About from '../About';
import PartnershipAmbassador from '../PartnershipAmbassador';

const Partnership = ({ data, demo }) => {
  const refContainer = useRef(null);
  const { banner, about, ambassador } = data;

  return (
    <SmoothScrollProviderWithouDestroy refContainer={refContainer}>
      <PartnershipCom data-scroll-container ref={refContainer}>
        <Banner banner={banner} />
        <About about={about} />
        <PartnershipAmbassador ambassador={ambassador} demo={demo} />
        <div data-scroll-section>
          <Rights />
          <NavigationBottom dark />
        </div>
      </PartnershipCom>
    </SmoothScrollProviderWithouDestroy>
  );
};

export default Partnership;
