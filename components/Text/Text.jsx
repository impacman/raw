import { TextBold, TextLight } from './styled';

const Text = ({ children, weight }) => {
  const Text = weight === 'bold' ? TextBold : TextLight;

  return <Text dangerouslySetInnerHTML={{ __html: children }} />;
};

export default Text;
