import Head from 'next/head';

import Wrapper from '@/components/Wrapper';
import Pencil from '@/components/Pencil';
import Ghosting from '@/components/Ghosting';

export const getStaticProps = async () => {
  const { data } = await import('/data/ghosting-form.json');

  return {
    props: { data },
  };
};

const HeRawPage = ({ data }) => (
  <>
    <Head>
      <title>Get RAW - Date 100% real people</title>
      <meta name="description" content="Find new love, not catfish" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Head>
    <Wrapper>
      <Pencil />
      <Ghosting data={data} />
    </Wrapper>
  </>
);

export default HeRawPage;
