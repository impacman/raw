import { Inputs, Messages, Labels, Errors } from './styled';

const NormalCom = ({ name, placeholder, register, oneScreen }) => {
  const InputEl = oneScreen ? Inputs.el.oneScreen : Inputs.el.default;

  return <InputEl id={name} {...register(name)} placeholder={placeholder} type="text" />;
};

const MessageCom = ({ name, placeholder, register, oneScreen }) => {
  const Wrap = oneScreen ? Messages.wrap.oneScreen : Messages.wrap.default;
  const Input = oneScreen ? Messages.el.oneScreen : Messages.el.default;

  return (
    <Wrap>
      <Input id={name} {...register(name)} placeholder={placeholder} type="text" rows={1} />
    </Wrap>
  );
};

const Input = ({ data, oneScreen }) => {
  const { label, message, placeholder, name, register, errors } = data;

  const Input = !message ? NormalCom : MessageCom;
  const InputWrap = oneScreen ? Inputs.wrap.oneScreen : Inputs.wrap.default;
  const Label = oneScreen ? Labels.oneScreen : Labels.default;
  const Err = oneScreen ? Errors.oneScreen : Errors.default;

  return (
    <InputWrap className={errors && errors[name] && 'isError'}>
      <Label htmlFor={name}>
        {errors[name] ? <Err dangerouslySetInnerHTML={{ __html: errors[name].message }} /> : <p dangerouslySetInnerHTML={{ __html: label }} />}
      </Label>
      <Input name={name} placeholder={placeholder} register={register} oneScreen={oneScreen} />
    </InputWrap>
  );
};

export default Input;
