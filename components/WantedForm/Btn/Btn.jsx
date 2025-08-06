import { BtnCom } from './styled';

import OK from '@/components/SVG/OK';

const Btn = ({ data, icon, step }) => (
  <BtnCom
    $styledStep={step}
    whileHover={{
      backgroundColor: 'var(--color-black-light)',
      cursor: 'pointer',
      transition: { duration: 0.2 },
    }}
    whileTap={{
      scale: 0.9,
      transition: { duration: 0.2 },
    }}
    type={data.type}
  >
    {data.text}
    {icon && <OK />}
  </BtnCom>
);

export default Btn;
