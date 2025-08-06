import { useRef, useState, useEffect } from 'react';
import { SmoothScrollProviderWithouDestroy } from '@/context/scroll';
import { useAppContext } from '@/context/state';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { ContactFormCom, ContactFormScroll, Text } from './styled';

import Form from '../Form';
import FormLoading from '../FormLoading';
import FormDone from '../FormDone';
import Bg from '../Bg';

const ContactForm = ({ data, bg }) => {
  const refContainer = useRef(null);
  const [mobile, setMobile] = useState(false);

  const { isMobile } = useMatchMedia();
  const { contactFormState } = useAppContext();
  const { doneContactForm, sendingContactForm } = contactFormState;

  const { feeling, doneTexts, form } = data;

  useEffect(() => (isMobile ? setMobile(true) : setMobile(false)));

  return (
    <SmoothScrollProviderWithouDestroy refContainer={refContainer}>
      <ContactFormCom data-scroll-container>
        <Bg img={bg} fixed />
        {sendingContactForm && <FormLoading color={'black-light'} colorLines={'white'} />}
        {!doneContactForm ? (
          <ContactFormScroll data-scroll-section>
            <Form form={form} formState={contactFormState} />
            {mobile && (
              <Text>
                <span dangerouslySetInnerHTML={{ __html: feeling.text }} />
                <a href={`mailto:${feeling.email}`}>{feeling.email}</a>
              </Text>
            )}
          </ContactFormScroll>
        ) : (
          <FormDone texts={doneTexts} fixed />
        )}
      </ContactFormCom>
    </SmoothScrollProviderWithouDestroy>
  );
};

export default ContactForm;
