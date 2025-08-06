import Head from 'next/head';

import Wrapper from '@/components/Wrapper';
import Shorts from '@/components/Shorts';
import Animation from '@/components/Animation';
import Header from '@/components/Header';
import Lines from '@/components/Lines/Lines';
import Focus from '@/components/Focus';
import Navigation from '@/components/Navigation';
import Rights from '@/components/Rights';
import Pencil from '@/components/Pencil';
import Notification from '@/components/Notification';

export const getStaticProps = async () => {
  const { textsAnimation, notification } = await import('/data/home.json');

  return {
    props: {
      textsAnimation,
      notification,
    },
  };
};

const HomePage = ({ textsAnimation, notification }) => (
  <>
    <Head>
      <title>Get RAW - Date 100% real people</title>
      <meta name="description" content="Find new love, not catfish" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Head>
    <Wrapper>
      <Header />
      <Navigation rights />
      <Lines />
      <Pencil />
      <Shorts />
      <Animation textsAnimation={textsAnimation} />
      <Focus />
      <Rights desktop />
    </Wrapper>
  </>
);

export default HomePage;
