import { DescrCom } from './styled';

const Descr = ({ children, weight, noMobile }) => (
  <DescrCom className={noMobile ? 'no-mobile' : null} styledWeight={weight} dangerouslySetInnerHTML={{ __html: children }} />
);

export default Descr;
