import { useAppContext } from "@/context/state";
import { FocusCom, FocusEl } from "./styled";
import Svg from "./Svg";

const Focus = () => {
  const { refFocus } = useAppContext();

  return (
    <FocusCom>
      <FocusEl ref={refFocus}>
        <Svg />
        <Svg />
        <Svg />
        <Svg />
      </FocusEl>
    </FocusCom>
  );
};

export default Focus;
