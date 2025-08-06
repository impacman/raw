import { useState, useEffect } from 'react';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { DescrCom, WrapText, Text } from './styled';

const Descr = ({ descr }) => {
  const [mobile, setMobile] = useState(false);

  const { isMinMobile } = useMatchMedia();

  useEffect(() => setMobile(isMinMobile), [isMinMobile]);

  return (
    <DescrCom data-scroll-section>
      {descr.map(({ id, texts, transform, noMobile }) => {
        if (noMobile && mobile) return null;
        else
          return (
            <WrapText key={id} styledTransform={transform}>
              {texts.map(({ id, text, big }) => (
                <Text key={id} className={big ? 'isBig' : false} dangerouslySetInnerHTML={{ __html: text }} />
              ))}
            </WrapText>
          );
      })}
    </DescrCom>
  );
};

export default Descr;
