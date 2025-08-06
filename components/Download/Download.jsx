import { useState, useEffect } from 'react';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { DownloadCom, QrCodeWrap, QrCode, WrapperEls, DownloadEl } from './styled';

import Picture from '../Picture';

const DownloadItems = [
  {
    id: 'ios',
    href: 'https://apps.apple.com/gb/app/raw-dating-match-real-people/id6449464256',
    name: 'Ios',
  },
  {
    id: 'android',
    href: 'https://play.google.com/store/apps/details?id=com.raw.app&pli=1',
    name: 'Android',
  },
];

const Download = () => {
  const { isMobile } = useMatchMedia();
  const [mobile, setMobile] = useState(false);
  const [qrCode, setQrCode] = useState('ios');

  useEffect(() => setMobile(isMobile), [isMobile]);

  return (
    <DownloadCom>
      {!mobile && (
        <QrCodeWrap>
          <Picture path={'download'} src={'qr'} alt={'App QRCode'} />
        </QrCodeWrap>
      )}
      <WrapperEls>
        {DownloadItems.map(({ id, href, name }) => (
          <DownloadEl key={id} href={href}>
            {mobile ? (
              <>{name}</>
            ) : (
              <>
                <span className="first">{name}</span>
                <span className="second">{name}</span>
              </>
            )}
          </DownloadEl>
        ))}
      </WrapperEls>
    </DownloadCom>
  );
};

export default Download;
