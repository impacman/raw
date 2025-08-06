import Head from 'next/head';

import Wrapper from '@/components/Wrapper';
import Auth from '@/components/Auth';

export const getStaticProps = async () => {
  const { form } = await import('/data/login.json');

  return {
    props: { form },
  };
};

const DownloadPage = ({ form }) => (
  <>
    <Head>
      <title>Get RAW - Date 100% real people</title>
      <meta name="description" content="Find new love, not catfish" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Head>
    <Wrapper>
      <Auth form={form} />
    </Wrapper>
  </>
);

export default DownloadPage;
