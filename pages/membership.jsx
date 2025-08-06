import Head from 'next/head';
import { useRedirect } from '@/hooks/useRedirect';

import Wrapper from '@/components/Wrapper';
import Pencil from '@/components/Pencil';
import Membership from '@/components/Membership';

export const getStaticProps = async () => {
  const { banner, about, dataForm, btn } = await import('/data/membership.json');

  return {
    props: {
      data: { banner, about, dataForm, btn },
    },
  };
};

const MembershipPage = ({ data }) => {
  useRedirect();

  return (
    <>
      <Head>
        <title>Get RAW - Date 100% real people</title>
        <meta name="description" content="Find new love, not catfish" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Wrapper dark>
        <Pencil />
        <Membership data={data} />
      </Wrapper>
    </>
  );
};

export default MembershipPage;
