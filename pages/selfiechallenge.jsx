import Head from 'next/head';

import Wrapper from '@/components/Wrapper';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Pencil from '@/components/Pencil';
import SelfieChallenge from '@/components/SelfieChallenge';

const HeRawPage = ({}) => (
  <>
    <Head>
      <title>Get RAW - Date 100% real people</title>
      <meta name="description" content="Find new love, not catfish" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Head>
    <Wrapper>
      <Header
        logo={{
          hide: true,
        }}
        navigation={{
          colorInvert: true,
          responsive: true,
        }}
      />
      <Navigation selfiechallenge />
      <Pencil dark />
      <SelfieChallenge />
    </Wrapper>
  </>
);

export default HeRawPage;
