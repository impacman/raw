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

  return (
    <>
      <Head>
        <title>Get RAW - Date 100% real people</title>
        <meta name="description" content="Find new love, not catfish" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Wrapper>
        <TaRow loadingState={loading} main={main} card={card} pacman={pacman} link={'https://get.raw.app/FNko/tarawgg'} />
        <Bg animation loadingState={loadingState} img={bg} position={'fixed'} />
      </Wrapper>
    </>
  );
};

export default HomePage;
