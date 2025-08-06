import { useEffect } from 'react';
import Head from 'next/head';

import Wrapper from '@/components/Wrapper';
import GetRaw from '@/components/GetRaw';

export const getStaticProps = async () => {
  const { title, img, screenshots, descr, newVersoin, reviews, privacy } = await import('/data/getraw.json');

  return {
    props: {
      data: {
        title,
        img,
        screenshots,
        descr,
        newVersoin,
        reviews,
        privacy,
      },
    },
  };
};

const GetRawPage = ({ data }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `!function(e){if(!window.pintrk){window.pintrk = function () {
      window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
        n=window.pintrk;n.queue=[],n.version="3.0";var
        t=document.createElement("script");t.async=!0,t.src=e;var
        r=document.getElementsByTagName("script")[0];
        r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
      pintrk('load', '2613205992686', {em: '<user_email_address>'});
      pintrk('page');`;

    const noscript = document.createElement('noscript');
    noscript.src = 'https://ct.pinterest.com/v3/?event=init&tid=2613205992686&pd[em]=<hashed_email_address>&noscript=1';

    const img = document.createElement('img');
    img.width = 1;
    img.height = 1;
    img.style.display = 'none';
    img.alt = '';

    noscript.appendChild(img);

    document.head.appendChild(script);
    document.head.appendChild(noscript);
  }, []);

  return (
    <>
      <Head>
        <title>Get RAW - Date 100% real people</title>
        <meta name="description" content="Find new love, not catfish" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Wrapper>
        <GetRaw data={data} pint link={'https://get.raw.app/tocf/W2APINTEREST'} />
      </Wrapper>
    </>
  );
};

export default GetRawPage;
