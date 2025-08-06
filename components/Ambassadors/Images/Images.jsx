import { ImagesCom, LogoWrap, ImgBig, ImgMin } from "./styled";

import Picture from "@/components/Picture";
import Logo from "../Logo";

const Images = ({ triger, imgBig, imgMin }) => (
  <ImagesCom data-scroll-section data-triger={triger}>
    <LogoWrap>
      <Logo />
    </LogoWrap>
    <ImgBig data-scroll data-scroll-repeat>
      <Picture path={imgBig.path} src={imgBig.src} alt={imgBig.alt} />
    </ImgBig>
    <ImgMin data-scroll data-scroll-repeat>
      <Picture path={imgMin.path} src={imgMin.src} alt={imgMin.alt} />
    </ImgMin>
  </ImagesCom>
);

export default Images;
