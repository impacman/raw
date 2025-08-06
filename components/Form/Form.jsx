import { useEffect, useState, useRef } from 'react';
import { validation } from '@/context/validation';
import { googleApi } from '@/context/googleApi';
import { GAErrors, GAOk } from '@/context/googleApi.utils';
import { useAppContext } from '@/context/state';
import { date } from '@/context/date';
import { Forms, Btns, Error } from './styled';

import Btn from '@/components/Btn';
import Input from './Input';

const Form = ({ form, formState, pacmanpacman, oneScreen }) => {
  const { sheetID, inputValidation, fields, submit } = form;
  const { counterClicks } = useAppContext();

  const clickRef = useRef(null);

  const [data, setData] = useState({});
  const [submitText, setSubmitText] = useState(submit ? submit.text : '');

  const [emailIsExist, setEmailIsExist] = useState(false);
  const [sendingIsError, setSendingIsError] = useState(false);

  const sendingForm = formState.sendingContactForm || formState.sendingMembershipForm || formState.sendingHeRawForm;
  const setDoneForm = formState.setDoneContactForm || formState.setDoneMembershipForm || formState.setDoneHeRawForm;
  const setSendingForm = formState.setSendingContactForm || formState.setSendingMembershipForm || formState.setSendingHeRawForm;

  const { register, handleSubmit, errors } = validation(inputValidation);

  useEffect(() => {
    sendingForm && onGoogleSubmit();
  }, [sendingForm]);

  useEffect(() => {
    if (!pacmanpacman) return;

    counterClicks > 1 && clickRef.current.children[0].click();
  }, [pacmanpacman]);

  const onSubmit = async (values) => {
    setSendingForm(true);
    setSubmitText('Sending...');
    setEmailIsExist(false);
    setSendingIsError(false);

    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  const onGoogleSubmit = async () => {
    const { name: Name, email: Email, text: Message, device: CustomDevice, phone, heRawNumber, ghostingNumber } = data;
    let Phone = phone || heRawNumber || ghostingNumber;

    (heRawNumber || ghostingNumber) && Phone.startsWith('+') && (Phone = Phone.replace('+', '(+)'));

    const response = googleApi(sheetID, date({ Name, Email, Message, Phone, CustomDevice }));

    response.then(({ status, statusType }) => {
      if (!status) {
        setSendingForm(false);
        setSubmitText(submit.text);

        statusType === GAErrors.emailExists && setEmailIsExist(true);
        statusType === GAErrors.err && setSendingIsError(true);

        return;
      }

      if (status && statusType === GAOk) {
        setEmailIsExist(false);
        setSendingIsError(false);
        setSendingForm(false);
        setDoneForm(true);
        setSubmitText(submit.text);
      } else return;
    });
  };

  const Form = oneScreen ? Forms.oneScreen : Forms.default;
  const BtnWrap = oneScreen ? Btns.oneScreen : Btns.default;

  return (
    <Form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      {emailIsExist && <Error>Email Is Exist</Error>}
      {sendingIsError && <Error>OOPS SOMETHING WRONG.....</Error>}
      {fields &&
        fields.map(({ id, label, message, placeholder, name }) => (
          <Input oneScreen={oneScreen} key={id} data={{ label, message, placeholder, name, register, errors }} />
        ))}
      {submit && (
        <BtnWrap ref={clickRef} className={sendingForm && 'isSending'} styledHidden={submit.hidden}>
          <Btn type={submit.type}>
            <span>{submitText}</span>
          </Btn>
        </BtnWrap>
      )}
    </Form>
  );
};

export default Form;
