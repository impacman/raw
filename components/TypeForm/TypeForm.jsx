import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useAppContext } from "@/context/state";
import { TypeFormCom } from "./styled";

import Start from "./Start";
import Form from "./Form";
import Done from "./Done";
import FormLoading from "../FormLoading";

const TypeForm = ({ start, steps }) => {
  const [mobile, setMobile] = useState(false);
  const { formState } = useAppContext();
  const { activeForm, done, sending, setActiveForm } = formState;

  useEffect(() => setMobile(isMobile), [isMobile]);

  return (
    <TypeFormCom id="type-form">
      <Start start={start} setActiveForm={setActiveForm} />
      {/* {activeForm && !mobile ? (
        <Form steps={steps} formState={formState} />
      ) : (
        <Start start={start} setActiveForm={setActiveForm} />
      )} */}
      {/* {done && !mobile && <Done />}
      {sending && !mobile && (
        <FormLoading
          color={"violet"}
          position={"absolute"}
          colorLines={"white"}
        />
      )} */}
    </TypeFormCom>
  );
};

export default TypeForm;
