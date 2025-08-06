import Head from "next/head";

export const getStaticProps = async () => {
  const {} = await import("/data/TemplateName.json");

  return {
    props: {
      data: {},
    },
  };
};

const TemplateName = ({ data }) => (
  <>
    <Head>
      <title>TemplateName</title>
      <meta name="description" content="TemplateName" />
    </Head>
    <main></main>
  </>
);

export default TemplateName;
