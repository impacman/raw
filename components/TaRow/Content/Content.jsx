import { useAppContext } from '@/context/state';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { ContentCom, Animation, Top, Logo, Descr } from './styled';
import { vhd, vwm } from '@/context/pxConvert';

import Icons from '../Icons';
import Card from '../Card';
import Prediction from '../Prediction';

const Content = ({ loadingState, main, card, pacman, link }) => {
  const { isAnimatingTaRaw } = useAppContext();
  const { isMinMobile } = useMatchMedia();
  const { title, descr, tap } = main;

  const animationVariants = {
    play: {
      scale: 0.9,
      opacity: 0,
      transition: { duration: 0.4, delay: 2, ease: 'easeIn' },
    },
    descr: {
      y: [!isMinMobile ? '-50%' : '0%', '0%'],
      scale: [!isMinMobile ? 1.6 : 1.9, 1],
      top: [!isMinMobile ? '50vh' : '49%', !isMinMobile ? vhd(104) : '0%'],
      transition: { duration: 0.5, ease: 'easeInOut' },
      paddingTop: ['0vw', isMinMobile ? vwm(53.9) : '0vw'],
    },
    logo: {
      y: ['-50%', '0%'],
      opacity: [0, 1],
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <ContentCom>
      <Animation animate={isAnimatingTaRaw && 'play'} variants={animationVariants}>
        <Icons loadingState={loadingState} />
        <Top>
          <Logo animate={loadingState && 'logo'} variants={animationVariants}>
            {title}
          </Logo>
          <Descr animate={loadingState && 'descr'} variants={animationVariants}>
            {descr}
          </Descr>
        </Top>
      </Animation>
      <Card loadingState={loadingState} tap={tap} pacman={pacman} />
      <Prediction loadingState={loadingState} card={card} link={link} />
    </ContentCom>
  );
};

export default Content;
