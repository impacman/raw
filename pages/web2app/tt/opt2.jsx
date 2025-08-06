import { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

import Wrapper from '@/components/Wrapper';
import Web2App from '@/components/Web2App';

const GetRawPage = () => {
  const [pixel, setPixel] = useState(false);
  const [cookie, setCookie] = useState([]);
  const [oneLink, setOneLink] = useState('');

  const createLink = () => {
    const oneLinkURL = 'https://rawapp.onelink.me/tv5V';
    const mediaSource = { keys: ['utm_source'], defaultValue: 'any_source' };
    const campaign = { keys: ['utm_campaign'], defaultValue: 'any_campaign' };
    const adSet = { keys: ['utm_adset'], defaultValue: 'any_adset' };
    const ad = { keys: ['utm_ad'], defaultValue: 'any_ad' };
    const channel = { keys: ['utm_channel'], defaultValue: 'any_channel' };
    const custom_ss_ui = { paramKey: 'af_ss_ui', defaultValue: 'true' };

    const result = window.AF_SMART_SCRIPT.generateOneLinkURL({
      oneLinkURL: oneLinkURL,
      afParameters: {
        mediaSource: mediaSource,
        campaign: campaign,
        adSet: adSet,
        ad: ad,
        channel: channel,
        afCustom: [custom_ss_ui],
      },
    });

    return result.clickURL;
  };

  const getCookieValue = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const getURLParameter = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  };

  useEffect(() => {
    if (!cookie.length) return;
    const links = document.querySelectorAll('a');
    const url = new URL(oneLink);
    const ttclid = getURLParameter('ttclid');

    if (ttclid) url.searchParams.append('af_sub1', ttclid);
    url.searchParams.append('af_sub2', cookie[0]);

    links.forEach((link) => (link.href = url.toString()));

    setTimeout(() => (window.location.href = url.toString()), 3000);
  }, [cookie]);

  return (
    <>
      <Head>
        <title>Get RAW - Date 100% real people</title>
        <meta name="description" content="Find new love, not catfish" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Script
        src="/scripts/ttpixel.js"
        onReady={() => {
          setPixel(true);
        }}
      />
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1096239424897902&ev=PageView&noscript=1" />
      </noscript>
      {pixel && (
        <Script
          src="/scripts/smartscript.js"
          onReady={() => {
            setOneLink(createLink());

            const checkCookies = () => {
              clearInterval(cookieCheckInterval);
              setCookie([getCookieValue('_ttp')]);
            };

            const cookieCheckInterval = setInterval(checkCookies, 500);
          }}
        />
      )}
      <Wrapper>
        <Web2App />
      </Wrapper>
    </>
  );
};

export default GetRawPage;
