import { useState, useEffect } from 'react';
import { useAppContext } from '@/context/state';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { AnimationCom, Wrapper, ContentTop, ContentBottom } from './styled';

import Text from '../Text';
import NavigationBottom from '../NavigationBottom';
import EffectFade from '../EffectFade';

const Animation = ({ textsAnimation }) => {
  const { refAnimation } = useAppContext();
  const { isMobile } = useMatchMedia();
  const [mobile, setMobile] = useState(false);

  useEffect(() => setMobile(isMobile), [isMobile]);

  const { desktop } = textsAnimation;

  return (
    <AnimationCom data-animation-scroll>
      <Wrapper ref={refAnimation}>
        {desktop.map(({ id, rowsDesktop, rowsMobile, position, active }) => {
          const Position = position === 'top' ? ContentTop : ContentBottom;

          return (
            <Position key={id} className={active ? 'isActive' : null}>
              {!mobile
                ? rowsDesktop &&
                  rowsDesktop.map(({ id, items }) => (
                    <EffectFade key={id}>
                      {items.map(({ id, item, weight }) => (
                        <Text key={id} weight={weight}>
                          {item}
                        </Text>
                      ))}
                    </EffectFade>
                  ))
                : rowsMobile &&
                  rowsMobile.map(({ id, items, positionMobile }) => (
                    <EffectFade key={id} positionMobile={positionMobile}>
                      {items.map(({ id, item, weight }) => (
                        <Text key={id} weight={weight}>
                          {item}
                        </Text>
                      ))}
                    </EffectFade>
                  ))}
            </Position>
          );
        })}
        {!mobile && (
          <ContentBottom>
            <NavigationBottom mainPage />
          </ContentBottom>
        )}
      </Wrapper>
    </AnimationCom>
  );
};

export default Animation;
