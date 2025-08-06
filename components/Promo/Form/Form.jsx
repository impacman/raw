/** @format */

import { useState, useEffect } from "react";
import { FormCom, FormHead, FormBody } from "./styled";

import Title from "../Title";
import Descr from "../Descr";
import Input from "../Input";
import Btn from "../Btn";
import Done from "../Done";

const formatCode = (input) => {
  let value = input.replace(/\D/g, "").slice(0, 6); // Удаляем нечисловые символы и ограничиваем 6 цифрами
  return value.length > 3 ? `${value.slice(0, 3)} ${value.slice(3)}` : value;
};

const Form = ({}) => {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const texts = {
    title: {
      default: "Verify code",
      done: "Code verified!",
    },
    descr: {
      default: "Check customer codes <span>before</span> giving out free&nbsp;drinks.",
      done: `<span>${value}</span> is good. Please give one free drink to&nbsp;a&nbsp;client.`,
    },
    error: {
      default: "Enter all <span>6 digits</span> to verify correctly.",
      error: "<span>Wrong or used code</span>",
    },
    btn: {
      default: "Check the code",
      done: "Verify another code",
    },
  };

  useEffect(() => {
    setBtnDisabled(error || value.length < 7);
  }, [error, value]);

  const sendRequest = async () => {
    setSending(true);
    const validationCode = parseInt(value.replace(/\s/g, ""), 10);

    try {
      const response = await fetch("https://api.raw.app/raw/challenges/freedrink/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ validationCode }),
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();

      setDone(data.verified);
      setError(!data.verified);
    } catch (error) {
      console.error("Verification error:", error);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (done) {
      setDone(false);
      setValue("");

      return;
    }

    error && setError(false);

    if (value.length < 7) {
      setError(true);

      return;
    }

    sendRequest();
  };

  const handleChange = ({ target }) => {
    setValue(formatCode(target.value));
    error && setError(false);
  };

  return (
    <FormCom className={error && "error"} onSubmit={handleSubmit}>
      <FormHead>
        <Title tag={"h2"} text={!done ? texts.title.default : texts.title.done} />
        <Descr text={!done ? texts.descr.default : texts.descr.done} />
      </FormHead>
      <FormBody>
        {!done ? (
          <>
            <Input change={handleChange} placeholder={"Enter the code..."} value={value} numeric />
            <Descr text={!error ? texts.error.default : texts.error.error} input />
          </>
        ) : (
          <Done />
        )}
      </FormBody>
      <Btn text={!done ? texts.btn.default : texts.btn.done} sending={sending} btnDisabled={btnDisabled} />
    </FormCom>
  );
};

export default Form;
