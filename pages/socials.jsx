import Head from 'next/head';

import Wrapper from '@/components/Wrapper';
import Header from '@/components/Header';
import Lines from '@/components/Lines/index,';
import Navigation from '@/components/Navigation';
import NavigationBottom from '@/components/NavigationBottom';
import Rights from '@/components/Rights';
import Pencil from '@/components/Pencil';
import Socials from '@/components/Socials';

const SocialsPage = () => (
  <>
    <Head>
      <title>Get RAW - Date 100% real people</title>
      <meta name="description" content="Find new love, not catfish" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Head>
    <Wrapper>
      <Header />
      <Lines onlyMobile />
      <Navigation />
      <NavigationBottom />
      <Rights />
      <Socials />
      <Pencil />
    </Wrapper>
  </>
);

export default SocialsPage;
