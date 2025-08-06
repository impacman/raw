import { StartCom, Title, Img, WrapBtn, Btn } from "./styled";

import Picture from "@/components/Picture";

const Start = ({ triger, img }) => (
  <StartCom data-scroll-section data-triger={triger}>
    <Title>
      <span>
        Everyone else <br />
        got viral, <br />
        but not you? <br />—
      </span>
      <span>
        Join RAW <br />
        Creator Internship
      </span>
    </Title>
    <Img data-scroll data-scroll-repeat>
      <Picture path={img.path} src={img.src} alt={img.alt} />
    </Img>
    {/* <WrapBtn>
      <Btn
        href="#type-form"
        data-scroll-to
        whileHover={{
          backgroundColor: "var(--color-mauve)",
          cursor: "pointer",
          transition: { duration: 0.2 },
        }}
        whileTap={{
          scale: 0.9,
          transition: { duration: 0.2 },
        }}
      >
        Apply for free
      </Btn>
    </WrapBtn> */}
  </StartCom>
);

export default Start;
