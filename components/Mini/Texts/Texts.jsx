import { TextsCom } from './styled';

const Texts = ({ data }) => {
  const { items } = data;

  return <TextsCom>{items && items.map(({ id, val }) => <span key={id} dangerouslySetInnerHTML={{ __html: val }} />)}</TextsCom>;
};

export default Texts;
