/** @format */

import { InputCom } from "./styled";

const Input = ({ change, placeholder, value, numeric, password }) => (
  <InputCom>
    <input onChange={change} type={password ? "password" : "text"} inputMode={numeric && "numeric"} placeholder={placeholder} value={value} />
  </InputCom>
);

export default Input;
