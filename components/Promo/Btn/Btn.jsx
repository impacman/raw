/** @format */

import { BtnCom } from "./styled";

import FormLoading from "@/components/FormLoading";

const Btn = ({ text, sending, btnDisabled }) => (
  <BtnCom type="submit" disabled={btnDisabled || sending} className={sending && "sending"}>
    {!sending ? <span>{text}</span> : <FormLoading color={"transparent"} position={"absolute"} colorLines={"white"} />}
  </BtnCom>
);

export default Btn;
