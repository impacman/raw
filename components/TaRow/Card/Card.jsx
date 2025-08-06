import { useRef, useEffect } from 'react';
import { useAppContext } from '@/context/state';
import { CardCom, Wrapper, Content, Img, Pacman, Descr } from './styled';

import Picture from '@/components/Picture';
import Glass from '@/components/SVG/TaRaw/Glass';

const Card = ({ loadingState, tap, pacman }) => {
  const { isAnimatingTaRaw, closeEyes } = useAppContext();

  const refCard = useRef(null);
  const refPacman = useRef(null);

  useEffect(() => {
    !isAnimatingTaRaw && loadingState && setTimeout(() => refCard.current.classList.add('active'), 600);

    isAnimatingTaRaw && refCard.current.classList.remove('active');
  }, [loadingState, isAnimatingTaRaw]);

  useEffect(() => {
    if (closeEyes) {
      refPacman.current.play();

      return;
    }

    !closeEyes && setTimeout(() => refPacman.current.pause(), 500);
  }, [closeEyes]);

  const animationVariants = {
    play: {
      opacity: [0, 1],
      transition: { duration: 0.5, delay: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <CardCom ref={refCard} animate={loadingState && 'play'} variants={animationVariants}>
      <Wrapper>
        <Content>
          <Img>
            <Picture path={'taraw'} src={'taraw'} alt={'TaRaw'} />
            <Glass />
            <Pacman lottieRef={refPacman} animationData={pacman} />
          </Img>
          {tap && (
            <Descr>
              {tap.map((el) => (
                <span key={el}>{el}</span>
              ))}
            </Descr>
          )}
        </Content>
      </Wrapper>
    </CardCom>
  );
};

export default Card;
