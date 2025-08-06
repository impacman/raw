/** @format */

import { useEffect, useState } from 'react';
import { BtnNoMove, BtnMove, Wrap } from './styled';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { mobVw } from '@/context/convertPxToVw';

const Btn = ({ moveScroll = false }) => {
  const { isMinMobile } = useMatchMedia();
  const [mobile, setMobile] = useState(false);
  useEffect(() => setMobile(isMinMobile), [isMinMobile]);

  const settings = {
    col: 3,
    position: 28,
  };

  const active = mobile && moveScroll;
  const BtnCom = !moveScroll ? BtnNoMove : BtnMove;

  return (
    <BtnCom
      data-selfie-challenge-btn={active ? true : null}
      $styledColBtns={settings.col}
      $styledTopPosition={mobVw.selfiechallenge(settings.position)}
      data-col-btns={settings.col}
      data-top-position={settings.position}
    >
      <Wrap
        whileHover={{
          cursor: 'pointer',
          scale: 0.98,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <a href={'https://get.raw.app/FNko/selfiechallenge'}>Get RAW and WIN $$$</a>
      </Wrap>
    </BtnCom>
  );
};

export default Btn;
