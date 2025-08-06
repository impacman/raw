import { InputCom, InputEl, InputMessage, Label, Err } from './styled';

const NormalCom = ({ name, placeholder, register }) => <InputEl id={name} {...register(name)} placeholder={placeholder} type="text" />;

const MessageCom = ({ name, placeholder, register }) => {
  const changeHeight = ({ target }) => (target.style.height = `${target.scrollHeight}px`);

  return <InputMessage id={name} {...register(name)} placeholder={placeholder} type="text" onChange={changeHeight} rows={1} />;
};

const Input = ({ data }) => {
  const { label, message, placeholder, name, register, errors } = data;

  const Input = !message ? NormalCom : MessageCom;

  return (
    <InputCom className={errors && errors[name] && 'isError'}>
      <Input name={name} placeholder={placeholder} register={register} />
      <Label htmlFor={name}>
        {label}
        <Err>{errors[name]?.message}</Err>
      </Label>
    </InputCom>
  );
};

export default Input;
