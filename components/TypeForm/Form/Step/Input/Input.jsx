import {
  InputText,
  InputTextEl,
  InputRadio,
  InputRadioEl,
  InputRadioLabel,
  InputRadioLabelLetter,
  Err,
} from "./styled";

const Text = ({ data }) => {
  const { register, name, type, placeholder, err } = data;

  return (
    <InputText className={err && err[name] && "isError"}>
      <InputTextEl {...register(name)} type={type} placeholder={placeholder} />
      {err && <Err>{err[name]?.message}</Err>}
    </InputText>
  );
};

const Radio = ({ data }) => {
  const { register, name, type, placeholder, err, index } = data;
  const letter = String.fromCharCode(65 + index);

  return (
    <InputRadio className={err && err[name] && "isError"}>
      <InputRadioEl
        id={placeholder.id}
        {...register(name)}
        type={type}
        value={placeholder.text}
      />

      <InputRadioLabel htmlFor={placeholder.id}>
        <InputRadioLabelLetter>{letter}</InputRadioLabelLetter>
        <span>{placeholder.text}</span>
      </InputRadioLabel>
    </InputRadio>
  );
};

const Input = ({ data }) => {
  if (data.type === "radio") return <Radio data={data} />;
  else return <Text data={data} />;
};

export default Input;
