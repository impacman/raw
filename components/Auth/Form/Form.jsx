import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAppContext } from '@/context/state';
import { FormCom, BtnWrap } from './styled';

import Btn from '@/components/Btn';
import Input from './Input';

const Form = ({ data }) => {
  const { fields, submit } = data;
  const { pacman } = useAppContext();
  const { push } = useRouter();

  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = (evt) => {
    evt.preventDefault();

    if (inputPassword !== pacman) {
      setError(true);
      return;
    }

    setError(false);

    localStorage.setItem('is-passed', true);

    push('/');
  };

  return (
    <FormCom noValidate autoComplete="off" onSubmit={onSubmit}>
      {fields &&
        fields.map(({ id, label, placeholder, name }) => (
          <Input key={id} data={{ label, placeholder, name, error }} setInputPassword={setInputPassword} />
        ))}
      <BtnWrap>
        <Btn type={submit.type} dark>
          <span>{submit.text}</span>
        </Btn>
      </BtnWrap>
    </FormCom>
  );
};

export default Form;
