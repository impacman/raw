import { DealCom, ImgBig, ParallaxText } from "./styled";

import ParallaxMove from "@/components/ParallaxMove";
import Picture from "@/components/Picture";

const Deal = ({ triger, img, mobile }) => (
  <DealCom data-scroll-section data-triger={triger}>
    <ParallaxMove speed={mobile ? 15 : 40}>
      {[1, 2, 3, 4, 5].map((el) => (
        <ParallaxText key={el}>Here's the deal //</ParallaxText>
      ))}
    </ParallaxMove>
    <ImgBig data-scroll data-scroll-repeat>
      <Picture path={img.path} src={img.src} alt={img.alt} />
    </ImgBig>
  </DealCom>
);

export default Deal;
