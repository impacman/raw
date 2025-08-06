import { useState, useEffect } from 'react';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { LinesCom, LineHorizontal, LineVertical } from './styled';

const Render = () => (
  <LinesCom>
    <LineHorizontal />
    <LineVertical />
  </LinesCom>
);

const Lines = ({ onlyMobile }) => {
  const { isMobile } = useMatchMedia();
  const [mobile, setMobile] = useState(false);

  useEffect(() => setMobile(isMobile), [isMobile]);

  if (onlyMobile) {
    return mobile && <Render />;
  } else {
    return <Render />;
  }
};

export default Lines;
