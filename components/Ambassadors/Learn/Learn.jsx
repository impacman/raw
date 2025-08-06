import { LearnCom, Img } from "./styled";

import Picture from "@/components/Picture";
import Grid from "../Grid";

const Learn = ({ triger, img }) => (
  <LearnCom data-scroll-section data-triger={triger}>
    <Img data-scroll data-scroll-repeat>
      <Picture path={img.path} src={img.src} alt={img.alt} />
    </Img>
    <Grid
      colsMob={2}
      title={["What you’ll", "learn"]}
      grid={[
        { id: 1, items: ["SPOT TRENDS BEFORE", "THEY'RE TRENDS"] },
        { id: 2, items: ["WRITE HOOKS THAT", "STOP THE SCROLL"] },
        {
          id: 3,
          items: ["FILM CONTENT THAT", "DOESN'T LOOK LIKE", "YOUR MOM MADE IT"],
        },
        { id: 4, items: ["GET PERSONAL FEEDBACK", "FROM ACTUAL PROS"] },
        { id: 5, items: ["BUILD A PORTFOLIO", "THAT GETS YOU HIRED"] },
      ]}
    />
  </LearnCom>
);

export default Learn;
