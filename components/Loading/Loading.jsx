import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LoadingCom } from './styled';

import Lines from '../SVG/Lines';

const Loading = ({ sending, mobile, dark }) => {
  const { asPath, events } = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== asPath && setLoading(true);
    const handleComplete = (url) => url !== asPath && setTimeout(() => setLoading(false), 2500);

    events.on('routeChangeStart', handleStart);
    events.on('routeChangeComplete', handleComplete);
    events.on('routeChangeError', handleComplete);

    return () => {
      events.off('routeChangeStart', handleComplete);
      events.off('routeChangeComplete', handleComplete);
      events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <LoadingCom className={`${loading ? 'isLoading' : ''} ${sending ? 'isSending' : ''}  ${mobile ? 'isMobile' : ''}`} styledDark={dark}>
      {loading && <Lines color={'white'} />}
    </LoadingCom>
  );
};

export default Loading;
