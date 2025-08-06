import { PerfectCom, Img } from "./styled";

import Picture from "@/components/Picture";
import Grid from "../Grid";

const Perfect = ({ triger, img }) => (
  <PerfectCom data-scroll-section data-triger={triger}>
    <Img data-scroll data-scroll-repeat>
      <Picture path={img.path} src={img.src} alt={img.alt} />
    </Img>
    <Grid
      left
      title={["Perfect", "for you if...."]}
      grid={[
        {
          id: 1,
          items: [
            "YOU'RE A STUDENT WHO",
            "NEEDS PORTFOLIO PIECES",
            "YESTERDAY",
          ],
        },
        {
          id: 2,
          items: [
            "YOU'RE SICK OF UNPAID",
            "INTERNSHIPS THAT TEACH",
            "YOU NOTHING",
          ],
        },
        {
          id: 3,
          items: [
            "YOU WANT TO CREATE",
            "CONTENT BUT DON'T",
            "KNOW WHERE TO START",
          ],
        },
        {
          id: 4,
          items: [
            "YOU'RE READY TO TURN",
            "YOUR SCREEN TIME",
            "INTO CAREER TIME",
          ],
        },
      ]}
    />
  </PerfectCom>
);

export default Perfect;
