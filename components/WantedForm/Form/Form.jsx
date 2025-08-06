import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { validation } from '@/context/validation';
import { googleApi } from '@/context/googleApi';
import { GAOk } from '@/context/googleApi.utils';
import { date } from '@/context/date';
import { AnimatePresence } from 'framer-motion';
import { FormCom } from './styled';

import Step from './Step';
import FormLoading from '@/components/FormLoading';

const Form = ({ steps, compliments }) => {
  const [step, setStep] = useState(0);
  const [sending, setSending] = useState(false);
  const [data, setData] = useState({});
  const [number, setNumber] = useState({
    name: '',
    value: '',
  });
  const [compliment, setCompliment] = useState({
    name: '',
    value: '',
  });
  const refForm = useRef(null);

  const { push } = useRouter();

  const { register, handleSubmit, errors } = validation(steps[step].inputValidation);

  useEffect(() => {
    if (!sending) return;

    data[number.name] = `(${number.value})${data['wantedNumber']}`;
    data[compliment.name] = compliment.value.split('\n').join('');

    onGoogleSubmit();
  }, [sending]);

  const onSubmit = async (values) => {
    step === steps.length - 1 ? setSending(true) : setStep(step + 1);

    setData((prevData) => ({
      ...prevData,
      ...values,
    }));

    if (!refForm.current) return;

    const wantedNumber = refForm.current.querySelector('input[name=wantedNumber]');
    wantedNumber &&
      setNumber({
        name: wantedNumber.name,
        value: wantedNumber.dataset.codeCountry,
      });

    const wantedCompliment = refForm.current.querySelector('textarea[name=wantedCompliment]');
    wantedCompliment &&
      setCompliment({
        name: wantedCompliment.name,
        value: wantedCompliment.value,
      });

    const inputs = refForm.current.querySelectorAll('input');
    inputs && inputs.forEach((input) => (input.value = ''));
  };

  const onGoogleSubmit = async () => {
    const { wantedNumber: Phone, wantedInfoName: Name, wantedInfoContact: Contact, wantedCompliment: Compliment } = data;

    const response = googleApi(1898481749, date({ Phone, Name, Contact, Compliment }));

    response.then(({ status, statusType }) => {
      if (!status) return;

      if (status && statusType === GAOk) {
        setStep(0);
        push('/mostwanted/done');

        setTimeout(() => setSending(false), 1000);
      } else return;
    });
  };

  return (
    <FormCom ref={refForm} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <AnimatePresence initial={false}>
        {!sending && <Step data={steps[step]} step={step} stepsLength={steps.length} register={register} err={errors} compliments={compliments} />}
      </AnimatePresence>
      {sending && <FormLoading color={'transparent'} position={'absolute'} colorLines={'white'} />}
    </FormCom>
  );
};

export default Form;
