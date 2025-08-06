import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { typeValidation } from './validation.utils';

const schema = (values) => {
  const obj = {};

  for (const el of values) obj[el] = typeValidation[el] ? typeValidation[el] : typeValidation['default'];

  return yup.object().shape(obj);
};

export const validation = (values) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema(values)),
  });

  return { register, handleSubmit, errors };
};
