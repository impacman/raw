import Banner from './Banner';
import List from './List';
import Download from './Download';

const PartnershipAmbassador = ({ ambassador, demo }) => {
  const { banner, list, download } = ambassador;

  return (
    <>
      <Banner banner={banner} />
      <List list={list} />
      <Download data={download} demo={demo} />
    </>
  );
};

export default PartnershipAmbassador;
