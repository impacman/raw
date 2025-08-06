import * as yup from 'yup';

const typeValid = {
  name: 'Hot, but it can’t include special characters. Please, write something else.',
  text: 'This field cant be empty. please tell us your thoughts',
  email: {
    empty: 'Check your email format, please',
    // err: 'Wrong email',
    err: 'Check your email format, please',
  },
  url: 'Wrong link',
  min: {
    val: 3,
    text: 'Min 3 characters',
    phone: {
      val: 9,
      text: 'Min 9 characters',
    },
  },
  max: {
    val: 40,
    text: 'Max 40 characters',
    phone: {
      val: 10,
      text: 'Max 10 characters',
    },
    heRaw: {
      val: 13,
      text: 'Max 13 characters',
    },
  },
  noNumber: {
    val: /^([^0-9]*)$/,
    text: 'No number',
  },
  phone: {
    val: /^\+?[0-9]+$/,
    text: 'You must enter a valid number',
  },
  inLatin: {
    val: /^[a-zA-Z\s-'-`]+$/,
    valText: /^[a-zA-Z\s-'-`@:;#!%.^+=_(),&]+$/,
    text: 'In Latin, please',
  },
  empty: 'This is a required field',
  heRaw: 'Unfortunately, your number is invalid.<br /> Could you check it again?',
  ghostingNumber: 'This field cant be empty. please tell us how we can contact you',
};

export const typeValidation = {
  name: yup.string().required(typeValid.name),
  // .min(typeValid.min.val, typeValid.min.text)
  // .max(typeValid.max.val, typeValid.max.text)
  // .matches(typeValid.noNumber.val, typeValid.noNumber.text)
  // .matches(typeValid.inLatin.val, typeValid.inLatin.text),
  email: yup.string().email(typeValid.email.err).required(typeValid.email.empty),
  text: yup.string().required(typeValid.text),
  // .min(typeValid.min.val, typeValid.min.text)
  // .max(typeValid.max.val, typeValid.max.text)
  // .matches(typeValid.inLatin.valText, typeValid.inLatin.text),
  // phone: yup.number().required(typeValid.phone),
  callYou: yup
    .string()
    .required(typeValid.empty)
    .min(typeValid.min.val, typeValid.min.text)
    .max(typeValid.max.val, typeValid.max.text)
    .matches(typeValid.noNumber.val, typeValid.noNumber.text)
    .matches(typeValid.inLatin.val, typeValid.inLatin.text),
  lastName: yup
    .string()
    .required(typeValid.empty)
    .min(typeValid.min.val, typeValid.min.text)
    .max(typeValid.max.val, typeValid.max.text)
    .matches(typeValid.noNumber.val, typeValid.noNumber.text)
    .matches(typeValid.inLatin.val, typeValid.inLatin.text),
  college: yup
    .string()
    .required(typeValid.empty)
    .min(typeValid.min.val, typeValid.min.text)
    .max(typeValid.max.val, typeValid.max.text)
    .matches(typeValid.noNumber.val, typeValid.noNumber.text)
    .matches(typeValid.inLatin.val, typeValid.inLatin.text),
  gender: yup.string().required(typeValid.empty),
  password: yup.string().required(typeValid.empty),
  socialMediaLinks: yup.string().url(typeValid.url).required(typeValid.empty),
  wantedNumber: yup
    .string()
    .required(typeValid.empty)
    .matches(typeValid.phone.val, typeValid.phone.text)
    .min(typeValid.min.phone.val, typeValid.min.phone.text)
    .max(typeValid.max.phone.val, typeValid.max.phone.text),
  wantedInfoName: yup
    .string()
    .required(typeValid.empty)
    .min(typeValid.min.val, typeValid.min.text)
    .max(typeValid.max.val, typeValid.max.text)
    .matches(typeValid.noNumber.val, typeValid.noNumber.text)
    .matches(typeValid.inLatin.val, typeValid.inLatin.text),
  wantedInfoContact: yup
    .string()
    .required(typeValid.empty)
    .min(typeValid.min.val, typeValid.min.text)
    .max(typeValid.max.val, typeValid.max.text)
    .matches(/^[a-zA-Z0-9\s-'-`@:;#!%.^+=_(),&]+$/, typeValid.inLatin.text),
  wantedCompliment: yup.string(),
  heRawNumber: yup
    .string()
    .required(typeValid.heRaw)
    .matches(typeValid.phone.val, typeValid.phone.text)
    .min(typeValid.min.phone.val, typeValid.min.phone.text)
    .max(typeValid.max.heRaw.val, typeValid.max.heRaw.text),
  ghostingNumber: yup
    .string()
    .required(typeValid.ghostingNumber)
    .matches(typeValid.phone.val, typeValid.phone.text)
    .min(typeValid.min.phone.val, typeValid.min.phone.text)
    .max(typeValid.max.heRaw.val, typeValid.max.heRaw.text),
  default: yup
    .string()
    .required(typeValid.empty)
    .min(typeValid.min.val, typeValid.min.text)
    .max(typeValid.max.val, typeValid.max.text)
    .matches(typeValid.noNumber.val, typeValid.noNumber.text)
    .matches(typeValid.inLatin.val, typeValid.inLatin.text),
};
