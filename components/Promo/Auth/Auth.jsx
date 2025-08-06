/** @format */

import { useState, useEffect } from "react";
import { useAppContext } from "@/context/state";
import { AuthCom, AuthHead, AuthBody } from "./styled";

import Title from "../Title";
import Descr from "../Descr";
import Input from "../Input";
import Btn from "../Btn";

const Auth = ({ setPass }) => {
  const { pacman } = useAppContext();

  const [value, setValue] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    setBtnDisabled(error || value.length === 0);
  }, [error, value]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSending(true);

    setTimeout(() => {
      if (value !== pacman) {
        setError(true);
        setSending(false);

        return;
      }

      setSending(false);
      setPass(true);
    }, 1000);
  };

  const handleChange = ({ target }) => {
    const value = target.value;

    setValue(value);
    error && setError(false);
  };

  return (
    <AuthCom className={error && "error"} onSubmit={handleSubmit}>
      <AuthHead>
        <Title tag={"h2"} text={"Enter the pass"} />
      </AuthHead>
      <AuthBody>
        <Input change={handleChange} placeholder={"Password..."} value={value} password />
        <Descr text={!error ? "&nbsp;" : "Incorrect <span>password</span>"} input />
      </AuthBody>
      <Btn text={"Continue"} sending={sending} btnDisabled={btnDisabled} />
    </AuthCom>
  );
};

export default Auth;
