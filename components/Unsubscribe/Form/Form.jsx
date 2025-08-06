import { useEffect, useRef, useState } from 'react';
import { validation } from '@/context/validation';
import { googleApi } from '@/context/googleApi';
import { GAOk } from '@/context/googleApi.utils';
import { date } from '@/context/date';
import { AnimatePresence } from 'framer-motion';
import { FormCom, Title, Done } from './styled';

import Input from './Input';
import Btn from './Btn';
import FormLoading from '@/components/FormLoading';

const Form = ({ form, sheetID }) => {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({});

  const refForm = useRef(null);

  const { register, handleSubmit, errors } = validation(form.inputValidation);

  useEffect(() => {
    if (!sending) return;

    onGoogleSubmit();
  }, [sending]);

  const onSubmit = async (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));

    setSending(true);

    if (!refForm.current) return;

    const inputs = refForm.current.querySelectorAll('input');
    inputs && inputs.forEach((input) => (input.value = ''));
  };

  const onGoogleSubmit = async () => {
    const { email: Email } = data;

    const response = googleApi(sheetID, date({ Email }));

    response.then(({ status, statusType }) => {
      if (!status) return;

      if (status && statusType === GAOk) {
        setSending(false);
        setDone(true);
      } else return;
    });
  };

  return (
    <FormCom ref={refForm} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      {!done ? (
        <>
          <Title dangerouslySetInnerHTML={{ __html: form.title }} />
          <Input data={{ register, errors, name: form.field.name, type: form.field.type, placeholder: form.field.placeholder }} />
          <Btn data={form.submit} />
          <AnimatePresence initial={false}>
            {sending && <FormLoading color={'black-light'} position={'fixed'} colorLines={'white'} />}
          </AnimatePresence>
        </>
      ) : (
        <Done dangerouslySetInnerHTML={{ __html: form.done }} />
      )}
    </FormCom>
  );
};

export default Form;
