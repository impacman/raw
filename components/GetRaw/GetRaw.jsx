import { useRef, useState } from 'react';
import { SmoothScrollProviderWithouDestroy } from '@/context/scroll';
import {
  GetRawCom,
  MainTitle,
  Title,
  SupTitle,
  MainImg,
  Line,
  DescrWrap,
  DescrMore,
  Descr,
  Section,
  PrivacyImg,
  ReviewsImg,
  Scroll,
  ScreenItem,
  ReviewsItem,
  ReviewsItemName,
  ReviewsItemTitle,
  ReviewsItemDescr,
  ReviewsItemMore,
  Stars,
  Star,
} from './styled';

import Picture from '../Picture';

const RewItem = ({ item }) => {
  const [more, setMore] = useState(false);

  return (
    <ReviewsItem className={more ? 'more' : ''}>
      <Stars>
        {[1, 2, 3, 4, 5].map((el) => (
          <Star key={el}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10.1864 0.479263C10.1203 0.309258 9.87972 0.309258 9.8136 0.479263L7.00598 7.69806C6.97608 7.77493 6.90206 7.82556 6.81958 7.82556H0.609174C0.416053 7.82556 0.335088 8.07217 0.490627 8.18664L5.64837 11.9825C5.71577 12.0321 5.74516 12.1184 5.72203 12.1989L3.652 19.3957C3.59809 19.5832 3.81688 19.729 3.96915 19.6072L9.87505 14.8819C9.9481 14.8235 10.0519 14.8235 10.1249 14.8819L16.0307 19.6071C16.183 19.7289 16.4018 19.583 16.3478 19.3956L14.2765 12.1989C14.2533 12.1185 14.2827 12.0321 14.3501 11.9825L19.5092 8.18665C19.6648 8.0722 19.5838 7.82556 19.3907 7.82556H13.1804C13.0979 7.82556 13.0239 7.77493 12.994 7.69806L10.1864 0.479263Z"
                fill="#FF9500"
              />
            </svg>
          </Star>
        ))}
      </Stars>
      <ReviewsItemName>{item.name}</ReviewsItemName>
      <ReviewsItemTitle>{item.title}</ReviewsItemTitle>
      <ReviewsItemDescr dangerouslySetInnerHTML={{ __html: item.descr }}></ReviewsItemDescr>
      {item.more && <ReviewsItemMore onClick={() => setMore(!more)}>{!more ? 'more' : 'close'}</ReviewsItemMore>}
    </ReviewsItem>
  );
};

const GetRaw = ({ data, snap, pint, link }) => {
  const refContainer = useRef(null);
  const [more, setMore] = useState(false);

  const getApp = () => {
    if (snap) snaptr('track', 'SIGN_UP');
    else if (pint) {
      pintrk('track', 'signup', {
        event_id: 'eventId0001',
      });
    } else return;
  };

  const { title, img, screenshots, descr, newVersoin, reviews, privacy } = data;

  return (
    <SmoothScrollProviderWithouDestroy refContainer={refContainer}>
      <GetRawCom data-scroll-container ref={refContainer} data-triger="getraw">
        {title && <MainTitle>{title}</MainTitle>}
        {img && (
          <MainImg onClick={getApp} href={link ? link : '#'}>
            <Picture path={img.path} src={img.src} alt={img.alt} />
          </MainImg>
        )}
        <Line />
        {screenshots && (
          <>
            <Title>{screenshots.title}</Title>
            <Scroll>
              {screenshots.items.map(({ id, img }) => (
                <ScreenItem key={id}>
                  <Picture path={img.path} src={`0${img.src}`} alt={img.alt} />
                </ScreenItem>
              ))}
            </Scroll>
          </>
        )}
        <Line />
        {descr && (
          <DescrWrap className={more ? 'more' : ''}>
            <Descr dangerouslySetInnerHTML={{ __html: descr }}></Descr>
            <DescrMore onClick={() => setMore(!more)}>{!more ? 'more' : 'close'}</DescrMore>
          </DescrWrap>
        )}
        <Line />
        {newVersoin && (
          <Section>
            <Title>{newVersoin.title}</Title>
            <SupTitle>{newVersoin.version}</SupTitle>
            <Descr>{newVersoin.descr}</Descr>
          </Section>
        )}
        <Line />
        {reviews && (
          <Section>
            <Title>{reviews.title}</Title>
            <ReviewsImg>
              <Picture path={reviews.img.path} src={reviews.img.src} alt={reviews.img.alt} />
            </ReviewsImg>
            <Scroll>
              {reviews.items.map((item) => (
                <RewItem key={item.id} item={item} />
              ))}
            </Scroll>
          </Section>
        )}
        <Line />
        {privacy && (
          <Section>
            <Title>{privacy.title}</Title>
            <Descr dangerouslySetInnerHTML={{ __html: privacy.descr }}></Descr>
            <PrivacyImg>
              <Picture path={privacy.img.path} src={privacy.img.src} alt={privacy.img.alt} />
            </PrivacyImg>
            <Descr dangerouslySetInnerHTML={{ __html: privacy.text }}></Descr>
          </Section>
        )}
      </GetRawCom>
    </SmoothScrollProviderWithouDestroy>
  );
};

export default GetRaw;
