import { MovesCom, ImgBig, ImgMin } from "./styled";

import Picture from "@/components/Picture";
import Grid from "../Grid";

const Moves = ({ triger, imgBig, imgMin }) => (
  <MovesCom data-scroll-section data-triger={triger}>
    <ImgBig data-scroll data-scroll-repeat>
      <Picture path={imgBig.path} src={imgBig.src} alt={imgBig.alt} />
    </ImgBig>
    <ImgMin data-scroll data-scroll-repeat>
      <Picture path={imgMin.path} src={imgMin.src} alt={imgMin.alt} />
    </ImgMin>
    <Grid
      title={["Career", "moves"]}
      grid={[
        { id: 1, items: ["Totally free", "to join"] },
        {
          id: 2,
          items: ["Top creators get fast", "tracked to job interviews"],
        },
        {
          id: 3,
          items: [
            "Digital certificate",
            "+ recommendation",
            "letter from RAW's team",
          ],
        },
        {
          id: 4,
          items: ["No more “entry-level", "with 5 years experience” BS"],
        },
      ]}
    />
  </MovesCom>
);

export default Moves;
