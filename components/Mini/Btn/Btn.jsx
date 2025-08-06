/** @format */

import { BtnCom, Wrap } from './styled';

const Btn = ({}) => (
  <BtnCom>
    <Wrap
      whileHover={{
        cursor: 'pointer',
        scale: 0.98,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <a href={'https://get.raw.app/FNko/Prizedrop'}>Get RAW and WIN</a>
    </Wrap>
  </BtnCom>
);

export default Btn;
