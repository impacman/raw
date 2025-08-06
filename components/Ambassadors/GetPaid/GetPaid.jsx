import {
  GetPaidCom,
  LogoWrap,
  TextWrap,
  DescrWrap,
  DescrWrap2,
  Img,
} from "./styled";

import Text from "../Text";
import Descr from "../Descr";
import Picture from "@/components/Picture";
import Logo from "../Logo";

const GetPaid = ({ triger, img }) => (
  <GetPaidCom data-scroll-section data-triger={triger}>
    <LogoWrap>
      <Logo />
    </LogoWrap>
    <Text Wrap={TextWrap}>
      <span>Get paid</span>
      <span>to go</span>
      <span>viral</span>
    </Text>
    <Descr Wrap={DescrWrap}>
      <span>Hit 30k+&nbsp;&nbsp;&nbsp;&nbsp;views&nbsp;&nbsp;&nbsp;$30</span>
      <span>Hit 30k+&nbsp;&nbsp;&nbsp;&nbsp;views&nbsp;&nbsp;&nbsp;$50</span>
      <span>Hit 30k+&nbsp;&nbsp;&nbsp;&nbsp;views&nbsp;&nbsp;$100</span>
    </Descr>
    <Descr Wrap={DescrWrap2}>
      <span>{">>>"} Per video - yes, really</span>
    </Descr>
    <Img data-scroll data-scroll-repeat>
      <Picture path={img.path} src={img.src} alt={img.alt} />
    </Img>
  </GetPaidCom>
);

export default GetPaid;
