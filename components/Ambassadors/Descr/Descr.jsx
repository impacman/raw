import { DescrCom } from "./styled";

const Descr = ({ children, Wrap }) => (
  <DescrCom>
    <Wrap>{children}</Wrap>
  </DescrCom>
);

export default Descr;
