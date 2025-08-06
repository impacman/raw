import { useRef } from 'react';
import { SmoothScrollProviderWithouDestroy } from '@/context/scroll';
import { useAppContext } from '@/context/state';
import { HeRawCom, ScrollSectoin, Title, Descr, LogoWrap, Imgs, FormWrap, Done } from './styled';

import Logo from '../Logo';
import Picture from '../Picture';
import Form from '../Form';
import FormLoading from '../FormLoading';

const HeRaw = ({ data }) => {
  const refContainer = useRef(null);

  const { heRawFormState } = useAppContext();
  const { doneHeRawForm, sendingHeRawForm } = heRawFormState;

  const { form } = data;

  return (
    <SmoothScrollProviderWithouDestroy refContainer={refContainer}>
      {sendingHeRawForm && <FormLoading position={'fixed'} color={'black-light'} colorLines={'white'} />}
      <HeRawCom data-scroll-container ref={refContainer}>
        <ScrollSectoin $styledPT={84} $styledPB={196} data-scroll-section>
          <Descr.default $styledMB={9} $styledML={143}>
            Introducing our
          </Descr.default>
          <Title.h1>
            <span>"HeRAWs of</span>
            <span>the Week"</span>
          </Title.h1>
          <Descr.default $styledML={157}>
            (THIS IS LIKE “HERO”, <br />
            BUT MORE raw)
          </Descr.default>
          <Imgs.i1 data-scroll="true" data-scroll-speed="1" data-scroll-delay="0.05">
            <Picture path={'heraw'} src={'1'} alt={'He Raw'} png />
          </Imgs.i1>
        </ScrollSectoin>
        <ScrollSectoin $styledPB={172} data-scroll-section>
          <Descr.withImg>
            <span>At Raw,</span> <br />
            <span>&nbsp;we're not just</span> <br />
            another dating app. <br />
            We know some love-finding <span>magic</span>
          </Descr.withImg>
          <Descr.default $styledMT={-80} $styledML={1482}>
            — where those <br />
            who need it will <br />
            get it.
          </Descr.default>
          <Imgs.i2>
            <Picture path={'heraw'} src={'2'} alt={'He Raw'} png />
          </Imgs.i2>
          <Imgs.i3 data-scroll="true" data-scroll-speed="0.5" data-scroll-delay="0.05">
            <Picture path={'heraw'} src={'3'} alt={'He Raw'} png />
          </Imgs.i3>
          <Imgs.i4>
            <Picture path={'heraw'} src={'4'} alt={'He Raw'} png />
          </Imgs.i4>
        </ScrollSectoin>
        <ScrollSectoin $styledPT={572} $styledPB={94} data-scroll-section>
          <LogoWrap>
            <Logo violet />
          </LogoWrap>
          <Descr.bold.big $styledML={726}>
            <span>Each week</span>, <br />
            we sprinkle a little <span>extra spells</span> on a few <br />
            lucky RAW users, boosting their profiles <br />
            to stardom <br />
            <span>in the swipe feed</span>
          </Descr.bold.big>
          <Imgs.i5>
            <Picture path={'heraw'} src={'5'} alt={'He Raw'} png />
          </Imgs.i5>
        </ScrollSectoin>
        <ScrollSectoin $styledPT={55} data-scroll-section>
          <Descr.full $styledMB={394}>
            <span>
              You will find love or… you will find love. You will find love or… you will find love. You will find love or… you will find love. You
              will find love or… you will find love.
            </span>
            <span>
              You will find love or… you will find love. You will find love or… you will find love. You will find love or… you will find love. You
              will find love or… you will find love.
            </span>
          </Descr.full>
          <Title.h2>
            <span>become our next HeRAW, SheRAW,</span>
            <span>or TheyRAW.</span>
          </Title.h2>
          <Imgs.i6 data-scroll="true" data-scroll-speed="-0.5" data-scroll-delay="0.05">
            <Picture path={'heraw'} src={'6'} alt={'He Raw'} png />
          </Imgs.i6>
          <Imgs.i7 data-scroll="true" data-scroll-speed="0.5" data-scroll-delay="0.05">
            <Picture path={'heraw'} src={'7'} alt={'He Raw'} png />
          </Imgs.i7>
        </ScrollSectoin>
        <ScrollSectoin $zIndex={2} $styledPT={183} data-scroll-section>
          <FormWrap>
            {!doneHeRawForm ? (
              <Form form={form} formState={heRawFormState} oneScreen />
            ) : (
              <Done $styledML={0}>You're in — potential HeRAW incoming! </Done>
            )}
          </FormWrap>
        </ScrollSectoin>
        <ScrollSectoin $styledPT={24} data-scroll-section>
          <Title.h2Big>why?</Title.h2Big>
          <Descr.uppercase $styledML={662} $styledMB={547}>
            Because love doesn't <br />
            play by the rules, and <br />
            neither do we.
          </Descr.uppercase>
          <Descr.bold.default $styledML={117} $styledMB={43.2}>
            - Download the app
          </Descr.bold.default>
          <Descr.bold.default $styledML={285} $styledMB={84}>
            - be on the lookout for the <br />
            special card in your feed:
          </Descr.bold.default>
          <Descr.bold.default $styledML={692} $styledMB={754}>
            - swipe it up and send a DM
          </Descr.bold.default>
          <Descr.big>
            <span>//You will find love or…</span>
            <span>
              You will find <span>love.</span>//
            </span>
          </Descr.big>
          <Imgs.i8 data-scroll="true" data-scroll-speed="0.5" data-scroll-delay="0.05">
            <Picture path={'heraw'} src={'8'} alt={'He Raw'} png />
          </Imgs.i8>
          <Imgs.i9 data-scroll="true" data-scroll-speed="1" data-scroll-delay="0.05">
            <Picture path={'heraw'} src={'9'} alt={'He Raw'} png />
          </Imgs.i9>
          <Imgs.i10>
            <Picture path={'heraw'} src={'10'} alt={'He Raw'} png />
          </Imgs.i10>
        </ScrollSectoin>
      </HeRawCom>
    </SmoothScrollProviderWithouDestroy>
  );
};

export default HeRaw;
