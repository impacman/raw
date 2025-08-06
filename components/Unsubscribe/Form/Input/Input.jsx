import { InputText, InputTextEl, Err } from './styled';

import Reloaded from '@/components/SVG/Reloaded';

const Input = ({ data }) => {
  const { register, errors, name, type, placeholder } = data;

  return (
    <InputText className={errors && errors[name] && 'isError'}>
      <InputTextEl {...register(name)} type={type} placeholder={placeholder} />
      {errors && errors[name] && <Err>{errors[name].message}</Err>}
    </InputText>
  );
};

export default Input;
