import { TitleCom } from './styled';

const Title = ({ children }) => <TitleCom dangerouslySetInnerHTML={{ __html: children }} />;

export default Title;
