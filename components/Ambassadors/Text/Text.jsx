import { TextCom } from "./styled";

const Text = ({ children, Wrap }) => (
  <TextCom>
    <Wrap>{children}</Wrap>
  </TextCom>
);

export default Text;
