import { useRef, useState, useEffect } from 'react';
import { SmoothScrollProviderWithouDestroy } from '@/context/scroll';
import { useAppContext } from '@/context/state';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { GhostingCom, ScrollSectoin, Title, Descr, Imgs, FormWrap } from './styled';

import Picture from '../Picture';
import Form from '../Form';
import FormLoading from '../FormLoading';

const Ghosting = ({ data }) => {
  const refContainer = useRef(null);
  const [mobile, setMobile] = useState(false);

  const { heRawFormState } = useAppContext();
  const { isMinMobile } = useMatchMedia();

  const { doneHeRawForm, sendingHeRawForm } = heRawFormState;
  const { form } = data;

  useEffect(() => {
    isMinMobile ? setMobile(true) : setMobile(false);
  }, [isMinMobile]);

  return (
    <SmoothScrollProviderWithouDestroy refContainer={refContainer}>
      {sendingHeRawForm && <FormLoading position={'fixed'} color={'black-light'} colorLines={'white'} />}
      <GhostingCom data-scroll-container ref={refContainer}>
        <ScrollSectoin $styledPT={286} $styledPB={174} data-scroll-section>
          <Descr.bold $styledML={870} $styledMB={115}>
            Been ghosted <br />
            on raw?
          </Descr.bold>
          <Title.h1>
            We all get it <br />
            <span>we all give it</span>
          </Title.h1>
          <Imgs.i1 data-scroll="true" data-scroll-speed={mobile ? '-1' : '1'} data-scroll-delay="0.05">
            <Picture path={'ghosting'} src={'1'} alt={'Ghosting'} png />
          </Imgs.i1>
          <Imgs.i2 data-scroll="true" data-scroll-speed={mobile ? '-0.5' : '-1'} data-scroll-delay="0.05">
            <Picture path={'ghosting'} src={'2'} alt={'Ghosting'} png />
          </Imgs.i2>
          <Imgs.i3 data-scroll="true" data-scroll-speed={mobile ? '-0.5' : '-2'} data-scroll-delay="0.05">
            <Picture path={'ghosting'} src={'3'} alt={'Ghosting'} png />
          </Imgs.i3>
        </ScrollSectoin>
        <ScrollSectoin $styledPT={540} data-scroll-section>
          <Title.h2>
            <span>Let’s ghost-bust your love life —</span>
          </Title.h2>
          <Descr.default $styledML={495} $styledMB={135}>
            we’ve got your back against <br />
            those dating app phantoms
          </Descr.default>
          <Imgs.i4 data-scroll="true" data-scroll-speed={mobile ? '-1.5' : '-1'} data-scroll-delay="0.05">
            <Picture path={'ghosting'} src={'4'} alt={'Ghosting'} png />
          </Imgs.i4>
          <Imgs.i5 data-scroll="true" data-scroll-speed="1" data-scroll-delay="0.05">
            <Picture path={'ghosting'} src={'5'} alt={'Ghosting'} png />
          </Imgs.i5>
        </ScrollSectoin>
        <ScrollSectoin $styledPT={268} $styledPB={66} data-scroll-section>
          <Title.h2Big $styledML={750}>
            <span>Confess </span>
          </Title.h2Big>
          <Title.h2Big $styledML={924} $styledMB={60}>
            <span>your</span>
          </Title.h2Big>
          <Title.h2Big $styledML={1196}>
            <span>ghosts//</span>
          </Title.h2Big>
          <Imgs.i61 data-scroll="true" data-scroll-speed="1" data-scroll-delay="0.05">
            <Picture path={'ghosting'} src={'6'} alt={'Ghosting'} png />
          </Imgs.i61>
          <Imgs.i62 data-scroll="true" data-scroll-speed="0.5" data-scroll-delay="0.05">
            <Picture path={'ghosting'} src={'6'} alt={'Ghosting'} png />
          </Imgs.i62>
          <Imgs.i7 data-scroll="true" data-scroll-speed="0.5" data-scroll-delay="0.05">
            <Picture path={'ghosting'} src={'7'} alt={'Ghosting'} png />
          </Imgs.i7>
        </ScrollSectoin>
        <ScrollSectoin $styledPT={272} $styledPB={96} data-scroll-section>
          <Descr.big $styledML={92}>
            <span>Admit</span> you've been <br />
            spooked by a <br />
            disappearing act,
          </Descr.big>
          <Descr.big $styledML={723} $styledMT={-186}>
            <span>share</span> your phone <br />
            number in the <br />
            form,
          </Descr.big>
          <Descr.big $styledML={1369} $styledMT={-10}>
            and you might <br />
            score some <br />
            spooktacular <br />
            <span>prizes:</span>
          </Descr.big>
          <Imgs.i8 data-scroll="true" data-scroll-speed="-0.5" data-scroll-delay="0.05">
            <Picture path={'ghosting'} src={'8'} alt={'Ghosting'} png />
          </Imgs.i8>
        </ScrollSectoin>
        <ScrollSectoin $zIndex={2} $styledPT={232} $styledPB={172} data-scroll-section>
          <FormWrap>
            {!doneHeRawForm ? (
              <Form form={form} formState={heRawFormState} oneScreen light />
            ) : (
              <>
                <Descr.doneBig $styledML={268} $styledMT={168}>
                  <span>RAW</span>
                  <span>est luck!</span>
                </Descr.doneBig>
                <Descr.doneMin $styledML={723} $styledMT={-19}>
                  We'll buzz if you win
                </Descr.doneMin>
              </>
            )}
          </FormWrap>
        </ScrollSectoin>
        <ScrollSectoin $styledPT={143} $styledPB={17} data-scroll-section>
          <Title.h2Footer>
            <span>your shot to get:</span>
            <span>Free RAW Premium </span>
          </Title.h2Footer>
          <Descr.footer $styledML={430} $styledMB={47}>
            Ghostbusting <br />
            <span>
              gear to scare <br />
            </span>
            off anyone from <br />
            ghosting
          </Descr.footer>
          <Descr.little $styledML={100} $styledMB={441}>
            &middot;&nbsp;&nbsp;And more
          </Descr.little>
          <Descr.full $styledMB={52}>
            <span>//Don't let being “left on read” haunt you</span>
            <span>— turn that silence into your superpower// </span>
          </Descr.full>
          <Descr.star $styledML={83}>* RAW presents: Ghosting is a win</Descr.star>
          <Imgs.i9 data-scroll="true" data-scroll-speed="1" data-scroll-delay="0.05">
            <Picture path={'ghosting'} src={'9'} alt={'Ghosting'} png />
          </Imgs.i9>
          <Imgs.i10>
            <Picture path={'ghosting'} src={'10'} alt={'Ghosting'} png />
          </Imgs.i10>
        </ScrollSectoin>
      </GhostingCom>
    </SmoothScrollProviderWithouDestroy>
  );
};

export default Ghosting;
