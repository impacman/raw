import { useRef, useState } from 'react';
import { SmoothScrollProviderWithouDestroy } from '@/context/scroll';
import { CollapsibleCom, CollapsibleWrapper, Items, ParallaxText } from './styled';

import ParallaxMove from '../ParallaxMove';
import Item from './Item';
import ParallaxImages from '../ParallaxImages';

import Rights from '../Rights';
import NavigationBottom from '../NavigationBottom';

const Collapsible = ({ faq, parallaxScroll }) => {
  const refContainer = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggle = (id) => {
    if (isVisible === id) return setIsVisible(null);
    setIsVisible(id);
  };

  return (
    <SmoothScrollProviderWithouDestroy refContainer={refContainer}>
      <CollapsibleCom data-scroll-container ref={refContainer} data-triger="collapsible">
        <CollapsibleWrapper data-scroll-section>
          <ParallaxMove>
            {[1, 2, 3].map((el) => (
              <ParallaxText key={el}>{parallaxScroll.text}</ParallaxText>
            ))}
          </ParallaxMove>
          <Items>
            {faq.map(({ id, title, description }) => (
              <Item key={id} title={title} description={description} id={id} toggle={toggle} isVisible={isVisible} />
            ))}
          </Items>
          <ParallaxImages images={parallaxScroll.images} />
          <NavigationBottom posStatic />
        </CollapsibleWrapper>
      </CollapsibleCom>
      <Rights />
    </SmoothScrollProviderWithouDestroy>
  );
};

export default Collapsible;
