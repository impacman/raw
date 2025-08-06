import { WrapperCom } from './styled';

const Wrapper = ({ children, dark = false }) => <WrapperCom styledDark={dark}>{children}</WrapperCom>;

export default Wrapper;
