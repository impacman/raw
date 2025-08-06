import { useEffect, useRef, useState } from "react";
import { validation } from "@/context/validation";
import { googleApi } from "@/context/googleApi";
import { GAOk } from "@/context/googleApi.utils";
import { date } from "@/context/date";
import { FormCom } from "./styled";

import Step from "./Step";
import Close from "../Close";

const Form = ({ steps, formState }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const refForm = useRef(null);

  const { register, handleSubmit, errors } = validation([`${steps[step].id}`]);
  const { setActiveForm, setDone, sending, setSending } = formState;

  useEffect(() => {
    sending && onGoogleSubmit();
  }, [sending]);

  const onSubmit = async (values) => {
    step === steps.length - 1 ? setSending(true) : setStep(step + 1);

    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
    refForm.current &&
      refForm.current
        .querySelectorAll("input")
        .forEach((input) => (input.value = ""));
  };

  const onGoogleSubmit = async () => {
    const {
      callYou: Name,
      lastName: Surname,
      gender: Gender,
      college: College,
      socialMediaLinks: Links,
    } = data;

    const response = googleApi(
      934720503,
      date({ Name, Surname, Gender, College, Links })
    );

    response.then(({ status, statusType }) => {
      if (!status) return;

      if (status && statusType === GAOk) {
        setStep(0);
        setActiveForm(false);
        setSending(false);
        setDone(true);
      } else return;
    });
  };

  return (
    <FormCom
      ref={refForm}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Close />
      <Step data={steps[step]} step={step} register={register} err={errors} />
    </FormCom>
  );
};

export default Form;
