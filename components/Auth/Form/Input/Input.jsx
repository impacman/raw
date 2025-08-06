import { InputCom, InputEl, Label } from './styled';

const Input = ({ data, setInputPassword }) => {
  const { label, placeholder, name, error } = data;

  const qwe = ({ target }) => setInputPassword(target.value);

  return (
    <InputCom className={error && 'isError'}>
      <InputEl id={name} name={name} placeholder={placeholder} type="password" onChange={qwe} />
      <Label htmlFor={name}>{label}</Label>
    </InputCom>
  );
};

export default Input;
