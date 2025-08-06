import { GridCom, Wrap } from "./styled";

import Text from "../Text";
import Descr from "../Descr";

const Grid = ({ left, colsMob, title, grid }) => (
  <GridCom $styledLeft={left}>
    <Text Wrap={"p"}>
      {title.map((el) => (
        <span key={el}>{el}</span>
      ))}
    </Text>
    <Wrap $styledColsMob={colsMob}>
      {grid.map(({ id, items }) => (
        <Descr key={id} Wrap={"p"}>
          {items.map((el) => (
            <span key={el}>{el}</span>
          ))}
        </Descr>
      ))}
    </Wrap>
  </GridCom>
);

export default Grid;
