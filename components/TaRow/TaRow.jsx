import { useRef, useEffect } from 'react';
import { useAppContext } from '@/context/state';
import { TaRowCom } from './styled';

import Content from './Content';

const TaRow = ({ loadingState, main, card, pacman }) => {
  const { setIsAnimatingTaRaw, setIsRotateTaRaw, setCloseEyes } = useAppContext();

  const refTaRaw = useRef(null);

  const activeAnimation = () => {
    setCloseEyes(true);

    setTimeout(() => {
      setIsRotateTaRaw(false);
      setIsAnimatingTaRaw(true);
    }, 1000);
  };

  const handleClick = ({ target }) => {
    const reload = target.hasAttribute('data-reload');

    if (!reload) {
      activeAnimation();
      return;
    }

    localStorage.setItem('reload', 'active');
    window.location.reload();
  };

  useEffect(() => {
    if (!loadingState) return;

    setTimeout(() => {
      refTaRaw.current.classList.add('active');

      const reload = localStorage.getItem('reload');

      if (reload === 'active') {
        activeAnimation();
        localStorage.setItem('reload', '');
      }
    }, 700);
  }, [loadingState]);

  return (
    <TaRowCom ref={refTaRaw} onClick={handleClick}>
      <Content loadingState={loadingState} main={main} card={card} pacman={pacman} />
    </TaRowCom>
  );
};

export default TaRow;
