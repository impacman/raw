import { StepCom, Label } from "./styled";

import Input from "./Input";
import Btn from "../../Btn";
import ArrowR from "@/components/SVG/ArrowR";

export const Step = ({ data, step, register, err }) => (
  <StepCom>
    <Label>
      {(step += 1)}
      <ArrowR />
      {data.label}
    </Label>
    {data.inputs.map(({ id, name, type, placeholder }, index) => (
      <Input
        key={id}
        data={{ register, name, type, placeholder, err, index }}
      />
    ))}
    <Btn data={data.btn} icon step />
  </StepCom>
);

export default Step;
