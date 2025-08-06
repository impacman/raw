import { useMatchMedia } from '@/hooks/useMatchMedia';
import { BannerCom, Membership, MembershipDescr, ParallaxLogo, ParallaxText, DescrWrap, ImgWrap } from './styled';

import Logo from '../Logo';
import Descr from '../Descr';
import ParallaxMove from '../ParallaxMove';
import Picture from '../Picture';
import Btn from '../Btn';

const Banner = ({ banner, ambassadors, membership, height, noLinkLogo, noTriger }) => {
  const { isMobile } = useMatchMedia();

  return (
    <BannerCom data-scroll-section styledHeight={height} styledAmbassadors={ambassadors} data-triger={noTriger ? null : 'partnership-home'}>
      {membership && <Membership>membership access</Membership>}
      {membership && (
        <MembershipDescr>
          <p>
            <span>///&nbsp;</span> Guest list rsvp for <span>&nbsp;secret parties</span>
          </p>
          <p>
            <span>///&nbsp;</span> be the first to get a <span>&nbsp;premium at no cost</span>
          </p>
          <p>
            <span>///&nbsp;</span> <span>pink tokens</span> to access RAW & partners’ perks&nbsp;
          </p>
        </MembershipDescr>
      )}
      <ParallaxMove speed={isMobile ? 15 : 40}>
        {ambassadors ? (
          [1, 2, 3].map((el) => <ParallaxText key={el}>Becoming RAW Ambassador</ParallaxText>)
        ) : (
          <ParallaxLogo>
            {[1, 2, 3, 4, 5, 6].map((el) => (
              <Logo key={el} violet={el === 2 ? true : false} noLink={noLinkLogo} />
            ))}
          </ParallaxLogo>
        )}
      </ParallaxMove>
      {!ambassadors && banner.descr && (
        <DescrWrap data-scroll data-scroll-speed="2" data-scroll-position="top" data-scroll-delay="0.05">
          <Descr>{banner.descr}</Descr>
        </DescrWrap>
      )}
      <ImgWrap data-scroll data-scroll-speed="-5" data-scroll-position="top">
        <Picture path={banner.img.path} src={banner.img.src} alt={banner.img.alt} />
      </ImgWrap>
    </BannerCom>
  );
};

export default Banner;
