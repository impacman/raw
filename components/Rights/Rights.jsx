import { useState, useEffect } from 'react';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { RightsCom } from './styled';

const Rights = ({ dark, desktop }) => {
  const { isMobile } = useMatchMedia();
  const [onlyDesktop, setOnlyDesktop] = useState(false);

  useEffect(() => (desktop && isMobile ? setOnlyDesktop(true) : setOnlyDesktop(false)));

  return !onlyDesktop ? <RightsCom styledDark={dark}>RAW - All rights reserved</RightsCom> : null;
};

export default Rights;
