import {
  YouWayCom,
  ParallaxText,
  TextWrap,
  ImgBig,
  ImgMin,
  DescrWrap,
} from "./styled";

import ParallaxMove from "@/components/ParallaxMove";
import Picture from "@/components/Picture";
import Text from "../Text";
import Descr from "../Descr";

const YouWay = ({ triger, mobile, imgBig, imgMin }) => (
  <YouWayCom data-scroll-section data-triger={triger}>
    <ParallaxMove speed={mobile ? 15 : 40}>
      {[1, 2, 3, 4, 5].map((el) => (
        <ParallaxText key={el}>Why you want this //</ParallaxText>
      ))}
    </ParallaxMove>
    <Text Wrap={TextWrap}>
      <span>Zero followers?</span>
      <span>Zero problem</span>
    </Text>
    <Descr Wrap={DescrWrap}>
      <span>we don't count your</span>
      <span>followers, we count</span>
      <span>on your vibe</span>
    </Descr>
    <ImgBig data-scroll data-scroll-repeat>
      <Picture path={imgBig.path} src={imgBig.src} alt={imgBig.alt} />
    </ImgBig>
    <ImgMin data-scroll data-scroll-repeat>
      <Picture path={imgMin.path} src={imgMin.src} alt={imgMin.alt} />
    </ImgMin>
  </YouWayCom>
);

export default YouWay;
