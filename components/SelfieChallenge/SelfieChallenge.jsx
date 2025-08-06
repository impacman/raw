import { useRef, useState, useEffect } from 'react';
import { SmoothScrollProviderWithouDestroy } from '@/context/scroll';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { SelfieChallengeCom, ScrollSectoin, WrapLogo, Title, Descr, Parallax, Grid, List, Price, Img } from './styled';

import Logo from '../Logo';
import Picture from '../Picture';
import Btn from './Btn';

const SelfieChallenge = ({}) => {
  const refContainer = useRef(null);

  const { isMinMobile } = useMatchMedia();
  const [mobile, setMobile] = useState(false);
  useEffect(() => setMobile(isMinMobile), [isMinMobile]);

  const pathImg = 'selfiechallenge';

  return (
    <SmoothScrollProviderWithouDestroy refContainer={refContainer}>
      <Btn moveScroll />
      <SelfieChallengeCom data-scroll-container ref={refContainer}>
        <ScrollSectoin data-section-main $styledPTMob={549} $styledPBMob={42} data-scroll-section>
          <WrapLogo>
            <Logo />
          </WrapLogo>
          <Title.h1>
            <span>crush</span>
            <span>the raw selfie</span>
            <span>challenge</span>
          </Title.h1>
          <Img.i1 data-scroll="true" data-scroll-speed="1" data-scroll-delay="0.05">
            <Picture png path={pathImg} src={'1'} alt={'alt'} />
          </Img.i1>
          <Img.i2 data-scroll="true" data-scroll-speed="-2" data-scroll-delay="0.05">
            <Picture png path={pathImg} src={'2'} alt={'alt'} />
          </Img.i2>
        </ScrollSectoin>
        <ScrollSectoin $styledPTDes={420} $styledPTMob={244} data-scroll-section>
          <Parallax.Default.Wrap>
            <Parallax.Default.Move data-scroll data-scroll-direction="horizontal" data-scroll-speed={!mobile ? '-4' : '-2'}>
              ready to be myself // ready to win // ready for loveON //
            </Parallax.Default.Move>
            <Parallax.Default.Move data-scroll data-scroll-direction="horizontal" data-scroll-speed={!mobile ? '4' : '2'}>
              {!mobile ? (
                <> ready to win // ready to be myself // ready for love // ready to win // ready to be myself </>
              ) : (
                <>ready to be myself // ready for love // ready to win // </>
              )}
            </Parallax.Default.Move>
          </Parallax.Default.Wrap>
          <Img.i3 data-scroll="true" data-scroll-speed="-1" data-scroll-delay="0.05">
            <Picture png path={pathImg} src={'3'} alt={'alt'} />
          </Img.i3>
          <Img.i4 data-scroll="true" data-scroll-speed="1" data-scroll-delay="0.05">
            <Picture png path={pathImg} src={'4'} alt={'alt'} />
          </Img.i4>
        </ScrollSectoin>
        <ScrollSectoin $styledPTDes={146} $styledPBDes={55} $styledPBMob={36} data-scroll-section>
          <Title.h2>
            {!mobile ? (
              <>
                <span>Get $$$ just for</span>
                <span>being</span>
                <span>your true, </span>
                <span>unfiltered self</span>
              </>
            ) : (
              <>
                <span>Get $$$ just</span>
                <span>for being</span>
                <span>your true,</span>
                <span>unfiltered</span>
                <span>self</span>
              </>
            )}
          </Title.h2>
          <Descr.WiWi>
            <span>Wi-wi-win on RAW</span>
            <span>Wi-wi-win in love</span>
          </Descr.WiWi>
          <Grid.Wrap>
            <Grid.Img data-scroll="true" data-scroll-speed="-1" data-scroll-delay="0.05">
              <Img.i6>
                <Picture png path={pathImg} src={'6'} alt={'alt'} />
              </Img.i6>
            </Grid.Img>
            <Grid.Img data-scroll="true" data-scroll-speed="-0.5" data-scroll-delay="0.05">
              <Img.i6>
                <Picture png path={pathImg} src={'7'} alt={'alt'} />
              </Img.i6>
            </Grid.Img>
            <Grid.Img>
              <Img.i6>
                <Picture png path={pathImg} src={'8'} alt={'alt'} />
              </Img.i6>
            </Grid.Img>
          </Grid.Wrap>
          <Img.i5 data-scroll="true" data-scroll-speed="1" data-scroll-delay="0.05">
            <Picture png path={pathImg} src={'5'} alt={'alt'} />
          </Img.i5>
        </ScrollSectoin>
        <ScrollSectoin $styledPTDes={55} $styledPBDes={50} $styledPTMob={36} $styledPBMob={36} data-scroll-section>
          <Title.h2>
            <span>How to enter:</span>
          </Title.h2>
          <List.Wrap>
            <List.Item>1. Get RAW</List.Item>
            <List.Item>2. Wait for the in-app notification</List.Item>
            <List.Item>3. Take fun & creative daily double pics</List.Item>
            <List.Item>4. Collect your prizes when you win</List.Item>
            <List.Item>5. Find you true love on RAW</List.Item>
          </List.Wrap>
        </ScrollSectoin>
        <ScrollSectoin
          $styledPTDes={50}
          $styledPBDes={255}
          $styledPLDes={300}
          $styledPTMob={36}
          $styledPBMob={160}
          $styledPLMob={119}
          data-scroll-section
        >
          <Title.h2>
            <span>Pro tips:</span>
          </Title.h2>
          <Descr.Tips $styledMTDes={43} $styledMLDes={290} $styledMTMob={20} $styledMLMob={0}>
            {!mobile ? (
              <>
                <span>your face should be clearly visible in</span>
                <span>your selfie</span>
              </>
            ) : (
              <>
                <span>your face should be clearly</span>
                <span>visible in your selfie</span>
              </>
            )}
          </Descr.Tips>
          <Descr.Tips $styledMTDes={51} $styledMLDes={290} $styledMTMob={17} $styledMLMob={0}>
            <span>good lighting =</span>
            <span>more chances to win</span>
          </Descr.Tips>
          <Descr.Tips $styledMTDes={59} $styledMLDes={464} $styledMTMob={17} $styledMLMob={79} $color={'black'}>
            <span>Your authenticity = </span>
            <span>your superpower</span>
          </Descr.Tips>
          <Img.i9 data-scroll="true" data-scroll-speed="1" data-scroll-delay="0.05">
            <Picture png path={pathImg} src={'9'} alt={'alt'} />
          </Img.i9>
          <Img.i10>
            <Picture png path={pathImg} src={'10'} alt={'alt'} />
          </Img.i10>
        </ScrollSectoin>
        <ScrollSectoin $styledPTDes={1020} $styledPTMob={539} data-scroll-section>
          <Price.Wrap $bgColor={'FFF352'} $color={'black'}>
            <Price.Text>$100</Price.Text>
          </Price.Wrap>
          <Price.Wrap $bgColor={'38FF74'} $color={'black'}>
            <Price.Text>$50</Price.Text>
          </Price.Wrap>
          <Price.Wrap $bgColor={'766CFF'} $color={'white'}>
            <Price.Text>$500</Price.Text>
          </Price.Wrap>
          <Img.i11>
            <Picture png path={pathImg} src={'11'} alt={'alt'} />
          </Img.i11>
        </ScrollSectoin>
        <ScrollSectoin $styledPTDes={566} $styledPTMob={170} $zIndex={1} data-scroll-section>
          <Parallax.Footer.Wrap>
            <Parallax.Footer.Move data-scroll data-scroll-direction="horizontal" data-scroll-speed={!mobile ? '-4' : '-2'}>
              get raw get raw get raw get raw
            </Parallax.Footer.Move>
            <Parallax.Footer.Move data-scroll data-scroll-direction="horizontal" data-scroll-speed={!mobile ? '4' : '2'}>
              get raw get raw get raw get raw
            </Parallax.Footer.Move>
            <Parallax.Footer.Move data-scroll data-scroll-direction="horizontal" data-scroll-speed={!mobile ? '-3' : '-1'}>
              get raw get raw get raw get raw
            </Parallax.Footer.Move>
            <Parallax.Footer.Move data-scroll data-scroll-direction="horizontal" data-scroll-speed={!mobile ? '5' : '-2'}>
              get raw get raw get raw get raw
            </Parallax.Footer.Move>
            <Parallax.Footer.Move data-scroll data-scroll-direction="horizontal" data-scroll-speed={!mobile ? '-2' : '1'}>
              get raw get raw get raw get raw
            </Parallax.Footer.Move>
          </Parallax.Footer.Wrap>
        </ScrollSectoin>
      </SelfieChallengeCom>
    </SmoothScrollProviderWithouDestroy>
  );
};

export default SelfieChallenge;
