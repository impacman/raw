import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { SmoothScrollProviderWithouDestroy } from '@/context/scroll';
import { useAppContext } from '@/context/state';
import { isMobile } from 'react-device-detect';
import { MembershipCom, Footer, Text, BtnWrap } from './styled';

import Btn from '../Btn';
import Banner from '../Banner';
import About from '../About';
import Form from './Form';
import FormDone from '../FormDone';
import FormLoading from '../FormLoading';
import Lines from '../SVG/Lines';
import ScrollTo from '../ScrollTo';

const Membership = ({ data }) => {
  const refContainer = useRef(null);
  const { banner, about, dataForm, btn } = data;

  const { membershipFormState, counterClicks, setCounterClicks } = useAppContext();
  const { doneMembershipForm, sendingMembershipForm } = membershipFormState;

  const [pacmanpacman, setPacmanPacman] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => setMobile(isMobile), [isMobile]);

  const wer = () => {
    setPacmanPacman(true);
    setCounterClicks(counterClicks + 1);
    setTimeout(() => setPacmanPacman(false), 1500);
  };

  return (
    <>
      <SmoothScrollProviderWithouDestroy refContainer={refContainer}>
        <MembershipCom data-scroll-container ref={refContainer}>
          <Banner banner={banner} membership noLinkLogo noTriger />
          <About about={about} />
          {!doneMembershipForm ? (
            <Form form={dataForm.form} formState={membershipFormState} pacmanpacman={pacmanpacman} />
          ) : (
            <div data-scroll-section>
              <FormDone texts={dataForm.doneTexts} />
            </div>
          )}
          <Footer data-scroll-section>
            <Text>
              <span dangerouslySetInnerHTML={{ __html: dataForm.feeling.text }} />
              <a href={`mailto:${dataForm.feeling.email}`}>{dataForm.feeling.email}</a>
            </Text>
            <Link href={'/membership/privacy-policy'} passHref>
              Privacy policy
            </Link>
          </Footer>
          {btn && !doneMembershipForm && (
            <BtnWrap data-membership-join onClick={wer} className={mobile && counterClicks ? 'isTransform' : null}>
              <Btn type={btn.type} href={btn.href} dark={!counterClicks ? true : false}>
                <span>{counterClicks ? <>{!sendingMembershipForm ? btn.textSend : btn.textSending}</> : <>{btn.text}</>}</span>
              </Btn>
            </BtnWrap>
          )}
          {btn && <ScrollTo id={btn.href} />}
        </MembershipCom>
      </SmoothScrollProviderWithouDestroy>
      {sendingMembershipForm && (
        <FormLoading color={'black-light'}>
          <Lines color={'white'} />
        </FormLoading>
      )}
    </>
  );
};

export default Membership;
