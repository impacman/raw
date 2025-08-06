import { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

import Wrapper from '@/components/Wrapper';
import GR from '@/components/GR';
import { useTouch } from '@/hooks/useTouch';

export const getStaticProps = async () => {
  const { title, img, info, descr, descr2, reviews } = await import('/data/gr.json');

  return {
    props: {
      data: { title, img, info, descr, descr2, reviews },
    },
  };
};

const GetRawPage = ({ data }) => {
  const [reddit, setReddit] = useState(false);
  const [cookieData, setCookieData] = useState({ af_sub1: '', af_sub2: '' });
  const [oneLink, setOneLink] = useState('');

  const getCookieValue = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return parts.length === 2 ? parts.pop()?.split(';').shift() : undefined;
  };

  const getURLParam = (param) => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param) || '';
    }
    return '';
  };

  const createLink = (af_sub1, af_sub2) => {
    if (!af_sub2) return ''; // Не создаем ссылку, если нет af_sub2

    const oneLinkURL = 'https://rawapp.onelink.me/tv5V';

    const result = window.AF_SMART_SCRIPT.generateOneLinkURL({
      oneLinkURL,
      afParameters: {
        mediaSource: { keys: ['utm_source'], defaultValue: 'any_source' },
        campaign: { keys: ['utm_campaign'], defaultValue: 'any_campaign' },
        adSet: { keys: ['utm_adset'], defaultValue: 'any_adset' },
        ad: { keys: ['utm_ad'], defaultValue: 'any_ad' },
        channel: { keys: ['utm_channel'], defaultValue: 'any_channel' },
        afCustom: [
          { paramKey: 'af_ss_ui', defaultValue: 'true' },
          { paramKey: 'af_sub1', defaultValue: af_sub1 },
          { paramKey: 'af_sub2', defaultValue: af_sub2 },
        ],
      },
    });

    return result.clickURL;
  };

  useEffect(() => {
    const rdt_cid = getURLParam('rdt_cid') || getCookieValue('rdt_cid') || 'unknown_rdt_cid';
    setCookieData((prev) => ({ ...prev, af_sub1: rdt_cid }));

    let attempts = 0;
    const interval = setInterval(() => {
      const rdt_uuid = getCookieValue('_rdt_uuid');
      if (rdt_uuid) {
        setCookieData((prev) => ({ ...prev, af_sub2: rdt_uuid }));
        clearInterval(interval);
      }
      if (++attempts > 10) clearInterval(interval);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (cookieData.af_sub1 && cookieData.af_sub2 && window.AF_SMART_SCRIPT) {
      const newLink = createLink(cookieData.af_sub1, cookieData.af_sub2);
      if (newLink) setOneLink(newLink);
    }
  }, [cookieData.af_sub1, cookieData.af_sub2]);

  useEffect(() => {
    if (!oneLink) return;

    const links = document.querySelectorAll('a');
    const url = new URL(oneLink);

    url.searchParams.append('af_sub1', cookieData.af_sub1);
    url.searchParams.append('af_sub2', cookieData.af_sub2);

    links.forEach((link) => (link.href = url.toString()));

    useTouch();
  }, [oneLink]);

  return (
    <>
      <Head>
        <title>Get RAW - Date 100% real people</title>
        <meta name="description" content="Find new love, not catfish" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Script src="/scripts/redit.js" onReady={() => setReddit(true)} />
      {reddit && (
        <Script
          src="/scripts/smartscript.js"
          onReady={() => {
            if (window.AF_SMART_SCRIPT && cookieData.af_sub2) {
              const newLink = createLink(cookieData.af_sub1, cookieData.af_sub2);
              if (newLink) setOneLink(newLink);
            }
          }}
        />
      )}
      <Wrapper>
        <GR data={data} pint link={oneLink || '#'} />
      </Wrapper>
    </>
  );
};

export default GetRawPage;
