import { useState, useEffect } from 'react';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { AnimatePresence } from 'framer-motion';
import { InputText, InputTexWrap, InputTextEl, Err, Label } from './styled';
import { Country, CountryHead, CountryHeadArrow, CountryBody, CodeCountry } from './country.styled';

const Input = ({ data }) => {
  const { register, name, type, placeholder, err, phone, label } = data;

  const [activeSelect, setActiveSekect] = useState(false);
  const [codeCountry, setCodeCountry] = useState('+1');
  const [nameCountry, setNameCountry] = useState('US');
  const [mobile, setMobile] = useState(false);

  const { isMinMobile } = useMatchMedia();

  useEffect(() => setMobile(isMinMobile), [isMinMobile]);

  const toggleSelect = () => setActiveSekect(!activeSelect);

  const getSelectNumber = ({ target }) => {
    setCodeCountry(target.dataset.number);
    setNameCountry(target.dataset.name);
    setActiveSekect(!activeSelect);
  };

  return (
    <InputText styledPhone={phone} className={err && err[name] && 'isError'}>
      {phone && (
        <Country>
          <CountryHead className={activeSelect ? 'isActive' : false} onClick={toggleSelect}>
            {nameCountry}
            <CountryHeadArrow
              className={activeSelect ? 'isTransform' : false}
              width="71"
              height="39"
              viewBox="0 0 71 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.53413 1.01253C2.77756 -0.230901 4.79356 -0.230901 6.03699 1.01253L35.6256 30.6011L65.2141 1.01253C66.4576 -0.230901 68.4736 -0.230901 69.717 1.01253C70.9604 2.25596 70.9604 4.27196 69.717 5.51538L37.877 37.3554C36.6336 38.5988 34.6176 38.5988 33.3741 37.3554L1.53413 5.51538C0.290705 4.27196 0.290705 2.25596 1.53413 1.01253Z"
                fill="var(--color-black)"
              />
            </CountryHeadArrow>
          </CountryHead>
          <AnimatePresence initial={false}>
            {activeSelect && (
              <CountryBody
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                {phone.map(({ id, number, name }) => {
                  if (nameCountry !== name)
                    return (
                      <span key={id} data-number={number} data-name={name} onClick={getSelectNumber}>
                        {name}
                      </span>
                    );
                  else return null;
                })}
              </CountryBody>
            )}
          </AnimatePresence>
        </Country>
      )}
      <InputTexWrap>
        {phone && <CodeCountry>{codeCountry}</CodeCountry>}
        <InputTextEl styledPhone={phone} {...register(name)} type={type} placeholder={placeholder} data-code-country={phone ? codeCountry : null} />
      </InputTexWrap>
      {err[name] ? <Err>{err[name].message}</Err> : <>{label && !mobile ? <Label>{label}</Label> : null}</>}
    </InputText>
  );
};

export default Input;
