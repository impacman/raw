import { BtnCom } from './styled';

const Btn = ({ data }) => (
  <BtnCom
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
  </BtnCom>
);

export default Btn;
