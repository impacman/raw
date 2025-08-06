import { Fragment, useEffect, useState, useMemo } from 'react';
import Head from 'next/head';
import Script from 'next/script';

import Wrapper from '@/components/Wrapper';
import GR from '@/components/GR';
import { useTouch } from '@/hooks/useTouch';

export const getStaticProps = async () => {
  const { title, img, info, descr, descr2, reviews } = await import('/data/gr.json');
  return { props: { data: { title, img, info, descr, descr2, reviews } } };
};

const GetRawPage = ({ data }) => {
  const [facebookPixelLoaded, setFacebookPixelLoaded] = useState(false);
  const [snapchatPixelLoaded, setSnapchatPixelLoaded] = useState(false);
  const [tiktokPixelLoaded, setTiktokPixelLoaded] = useState(false);
  const [pinterestPixelLoaded, setPinterestPixelLoaded] = useState(false);

  const allPixelsLoaded = facebookPixelLoaded && snapchatPixelLoaded && tiktokPixelLoaded && pinterestPixelLoaded;

  const [smartScriptLoaded, setSmartScriptLoaded] = useState(false);
  const [cookies, setCookies] = useState({});
  const [oneLink, setOneLink] = useState('#');

  const getURLParameter = (name) => {
    const value = new URLSearchParams(window.location.search).get(name) || '';
    return value;
  };

  const getCookieValue = (name) => {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    const value = match ? match[2] : '';
    return value;
  };

  const generateCommonRawW2A = () => {
    const systems = [
      { name: 'fb', clickId: { key: '_fbc', placement: 'cookie' }, clientId: { key: '_fbp', placement: 'cookie' } },
      { name: 'sc', clickId: { key: 'ScCid', placement: 'url' }, clientId: { key: '_scid', placement: 'cookie' } },
      { name: 'tt', clickId: { key: 'ttclid', placement: 'url' }, clientId: { key: '_ttp', placement: 'cookie' } },
      { name: 'pt', clickId: { key: 'epik', placement: 'url' }, clientId: {} },
    ];

    const result = systems
      .map(({ name, clickId, clientId }) => {
        const clickIdValue = {
          cookie: getCookieValue(clickId.key),
          url: getURLParameter(clickId.key),
        }[clickId.placement] || '';
        const clientIdValue = {
          cookie: getCookieValue(clientId.key),
          url: getURLParameter(clientId.key),
        }[clientId.placement] || '';

        return `${name}|${clickIdValue}|${clientIdValue}`;
      })
      .join(';');

    return result;
  };

  const createLink = () => {
    const oneLinkURL = 'https://rawapp.onelink.me/tv5V';
    const result = window.AF_SMART_SCRIPT.generateOneLinkURL({
      oneLinkURL,
      afParameters: {
        mediaSource: { keys: ['utm_source'], defaultValue: 'any_source' },
        campaign: { keys: ['utm_campaign'], defaultValue: 'any_campaign' },
        adSet: { keys: ['utm_adset'], defaultValue: 'any_adset' },
        ad: { keys: ['utm_ad'], defaultValue: 'any_ad' },
        channel: { keys: ['utm_channel'], defaultValue: 'any_channel' },
        afCustom: [{ paramKey: 'af_ss_ui', defaultValue: 'true' }],
        af_channel: 'common_w2a',
      },
    });

    let finalURL = new URL(result.clickURL);
    finalURL.searchParams.set('af_channel', 'common_w2a');
    finalURL.searchParams.append('common_raw_w2a', generateCommonRawW2A());

    return finalURL.toString();
  };

  useEffect(() => {
    if (!(allPixelsLoaded && smartScriptLoaded)) return;

    const checkCookies = () => {
      const cookiesData = {
        _fbc: getCookieValue('_fbc'),
        _fbp: getCookieValue('_fbp'),
        _ttp: getCookieValue('_ttp'),
        _scid: getCookieValue('_scid'),
      };

      if (Object.values(cookiesData).some(Boolean)) {
        setCookies(cookiesData);
      }

      if (Object.values(cookiesData).every(Boolean)) {
        clearInterval(cookieCheckInterval);
      }
    }

    const cookieCheckInterval = setInterval(checkCookies, 500);
    const cookieCheckTimeout = setTimeout(() => {
      clearInterval(cookieCheckInterval);
    }, 5000);

    checkCookies(); // Check cookies immediately

    return () => {
      clearInterval(cookieCheckInterval);
      clearTimeout(cookieCheckTimeout);
    }
  }, [allPixelsLoaded, smartScriptLoaded]);

  useEffect(() => {
    if (!(allPixelsLoaded && smartScriptLoaded && Object.keys(cookies).length)) return;

    const link = createLink();

    const linksNodes = document.querySelectorAll('a');
    linksNodes.forEach((linkNode) => (linkNode.href = link));

    useTouch();
  }, [cookies, oneLink]);

  const scripts = useMemo(() => [
    {
      enabled: true,
      key: 'fb',
      src: '/scripts/pixel.js',
      pixelImage: 'https://www.facebook.com/tr?id=1096239424897902&ev=PageView&noscript=1',
      onLoad: () => {
        setFacebookPixelLoaded(true);
      }
    },
    {
      enabled: true,
      key: 'sc',
      src: '/scripts/snappixel.js',
      onLoad: () => {
        snaptr('init', '42ac922f-2526-439b-a8ef-5852d0bae03e', { user_email: 'INSERT_USER_EMAIL' });
        snaptr('track', 'PAGE_VIEW');
        setSnapchatPixelLoaded(true);
      }
    },
    {
      enabled: true,
      key: 'tt',
      src: '/scripts/ttpixel.js',
      pixelImage: 'https://analytics.tiktok.com/i18n/pixel/events/listener_page?pixel_id=123456&noscript=1',
      onLoad: () => {
        setTiktokPixelLoaded(true);
      }
    },
    {
      enabled: true,
      key: 'pt',
      src: '/scripts/pintersetpixel.js',
      pixelImage: 'https://ct.pinterest.com/v3/?event=init&tid=2613205992686&pd[em]=<hashed_email_address>&noscript=1',
      onLoad: () => {
        setPinterestPixelLoaded(true);
      }
    },
  ], []);

  return (
    <>
      <Head>
        <title>Get RAW - Date 100% real people</title>
        <meta name="description" content="Find new love, not catfish" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>

      <Wrapper>
        <GR data={data} pint link={oneLink || '#'} />
      </Wrapper>

      {scripts.filter(script => script.enabled).map(script => (
        <Fragment key={script.key}>
          <Script
            src={script.src}
            onLoad={script.onLoad}
          />
          {script.pixelImage ? (
            <noscript>
              <img height="1" width="1" style={{display: 'none'}} src={script.pixelImage} />
            </noscript>
          ) : null}
        </Fragment>
      ))}

      {allPixelsLoaded && <Script src="/scripts/smartscript.js" onLoad={() => setSmartScriptLoaded(true)} />}
    </>
  );
};

export default GetRawPage;
