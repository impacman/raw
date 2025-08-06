import Head from 'next/head';
import { useState, useEffect } from 'react';

import Wrapper from '@/components/Wrapper';
import TaRow from '@/components/TaRow';
import Bg from '@/components/Bg';

export const getStaticProps = async () => {
  const { bg, title, descr, tap, btn, footnote, predictions, images } = await import('/data/taraw.json');
  const { pacman } = await import('/data/pacman.json');

  return {
    props: {
      bg,
      main: {
        title,
        descr,
        tap,
      },
      card: {
        btn,
        footnote,
        predictions,
        images,
      },
      pacman,
    },
  };
};

const HomePage = ({ loadingState, bg, main, card, pacman }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loadingState) return;

    setTimeout(() => setLoading(true), 1200);
  }, [loadingState]);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      !function (w, d, t) {
        w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};

        ttq.load('CN52BVJC77UC2DCHA3JG');
        ttq.page();
      }(window, document, 'ttq');`;

    document.head.appendChild(script);

    ttq.identify({
      email: '<hashed_email_address>', // string. The email of the customer if available. It must be hashed with SHA-256 on the client side.
      phone_number: '<hashed_phone_number>', // string. The phone number of the customer if available. It must be hashed with SHA-256 on the client side.
      external_id: '<hashed_extenal_id>', // string. A unique ID from the advertiser such as user or external cookie IDs. It must be hashed with SHA256 on the client side.
    });
    ttq.track('ViewContent', {
      value: '<content_value>', // number. Value of the order or items sold. Example: 100.
      currency: '<content_currency>', // string. The 4217 currency code. Example: "USD".
      contents: [
        {
          content_id: '<content_identifier>', // string. ID of the product. Example: "1077218".
          content_type: '<content_type>', // string. Either product or product_group.
          content_name: '<content_name>', // string. The name of the page or product. Example: "shirt".
        },
      ],
    });
    ttq.track('ClickButton', {
      value: '<content_value>', // number. Value of the order or items sold. Example: 100.
      currency: '<content_currency>', // string. The 4217 currency code. Example: "USD".
      contents: [
        {
          content_id: '<content_identifier>', // string. ID of the product. Example: "1077218".
          content_type: '<content_type>', // string. Either product or product_group.
          content_name: '<content_name>', // string. The name of the page or product. Example: "shirt".
        },
      ],
    });
    ttq.track('CompleteRegistration', {
      value: '<content_value>', // number. Value of the order or items sold. Example: 100.
      currency: '<content_currency>', // string. The 4217 currency code. Example: "USD".
      contents: [
        {
          content_id: '<content_identifier>', // string. ID of the product. Example: "1077218".
          content_type: '<content_type>', // string. Either product or product_group.
          content_name: '<content_name>', // string. The name of the page or product. Example: "shirt".
        },
      ],
    });
    ttq.track('Download', {
      value: '<content_value>', // number. Value of the order or items sold. Example: 100.
      currency: '<content_currency>', // string. The 4217 currency code. Example: "USD".
      contents: [
        {
          content_id: '<content_identifier>', // string. ID of the product. Example: "1077218".
          content_type: '<content_type>', // string. Either product or product_group.
          content_name: '<content_name>', // string. The name of the page or product. Example: "shirt".
        },
      ],
    });
  }, []);

  return (
    <>
      <Head>
        <title>Get RAW - Date 100% real people</title>
        <meta name="description" content="Find new love, not catfish" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Wrapper>
        <TaRow loadingState={loading} main={main} card={card} pacman={pacman} link={'https://get.raw.app/FNko/tarawtt'} />
        <Bg animation loadingState={loadingState} img={bg} position={'fixed'} />
      </Wrapper>
    </>
  );
};

export default HomePage;
