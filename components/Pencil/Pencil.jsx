import { useState, useEffect } from 'react';
import { PencilCom, PencilLight, PencilDark } from './styled';
import { isMobile } from 'react-device-detect';

const Pencil = ({ dark }) => {
  const [cursorCoordinates, setCursorCoordinates] = useState([]);

  useEffect(() => {
    if (isMobile) return;

    document.addEventListener('mousemove', (evt) => {
      setCursorCoordinates([...cursorCoordinates, `${evt.clientX},${evt.clientY}`]);
    });

    cursorCoordinates.length >= 80 && cursorCoordinates.shift();
  }, [isMobile, cursorCoordinates]);

  useEffect(() => {
    const pencilList = document.querySelector('[data-pencil-list]');

    if (!pencilList) return;

    pencilList.addEventListener('mouseover', () => (document.querySelector('[data-pencil] polyline').style.stroke = 'var(--color-black)'));

    return () =>
      pencilList.addEventListener('mouseleave', () => (document.querySelector('[data-pencil] polyline').style.stroke = 'var(--color-white)'));
  }, []);

  const Pencil = dark ? PencilDark : PencilLight;

  return (
    <PencilCom data-pencil>
      <Pencil points={`${cursorCoordinates.join(' ')}`} />
    </PencilCom>
  );
};

export default Pencil;
