import { useEffect, useState } from 'react';
import { useAppContext } from '@/context/state';
import { isMobile } from 'react-device-detect';
import { ShortsCom, Heart, DemoComWrap, DemoCom } from './styled';
import { SwiperSlide } from 'swiper/react';
import { Mousewheel, Parallax, Controller } from 'swiper';

import Short from '../Short/Short';

const Shorts = () => {
  const { refFocus, refAnimation, shorts } = useAppContext();

  const [shortsSlide, setShortsSlide] = useState({});
  const [controllerSlide, setControllerSlide] = useState({});
  const [animationEls, setAnimationEls] = useState([]);
  const [activeNavigationOnly, setActiveNavigationOnly] = useState(false);

  const speed = isMobile ? 600 : 1000;
  const initShorts = 0;

  useEffect(() => {
    setAnimationEls(refAnimation.current.childNodes);
    animationEls.forEach((el) => el.classList.add('isAnim'));
  }, [animationEls.length]);

  const activeFocus = (realIndex) => {
    if (!refFocus.current || realIndex < 0) return;

    refFocus.current.classList.add('isActive');
    setTimeout(() => refFocus.current.classList.remove('isActive'), speed / 2);
  };

  const activeAnimationEls = (realIndex) => {
    if (!animationEls.length) return;

    if (realIndex < 0 || realIndex > animationEls.length - 1) {
      animationEls.forEach((el, ind) => ind !== animationEls.length - 1 && el.classList.remove('isActive'));
      !animationEls[animationEls.length - 1].classList.contains('isActive') && animationEls[animationEls.length - 1].classList.add('isActive');

      !activeNavigationOnly && setActiveNavigationOnly(true);
      return;
    }

    if (!activeNavigationOnly) {
      animationEls.forEach((el, ind) => {
        if (ind === realIndex) {
          !el.classList.contains('isActive') && el.classList.add('isActive');
        } else el.classList.remove('isActive');
      });
    }
  };

  return (
    <>
      <ShortsCom
        direction={'vertical'}
        slidesPerView={'auto'}
        speed={speed}
        initialSlide={initShorts}
        centeredSlides
        loop
        modules={[Mousewheel, Parallax, Controller]}
        controller={{
          control: controllerSlide,
        }}
        mousewheel={{
          sensitivity: 0.1,
        }}
        parallax
        observer
        observeParents
        observeSlideChildren
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 'auto',
          },
        }}
        watchSlidesProgress
        slideToClickedSlide={false}
        simulateTouch={false}
        onInit={(swiper) => {
          setShortsSlide(swiper);
        }}
        onSlideChange={(swiper) => {
          activeFocus(swiper.realIndex);
          activeAnimationEls(swiper.realIndex);
        }}
      >
        {shorts.length &&
          shorts.map(({ id, src, data }) => (
            <SwiperSlide key={id}>
              <Short
                images={{
                  src,
                  data,
                }}
              />
            </SwiperSlide>
          ))}
        <Heart xmlns="http://www.w3.org/2000/svg" width="620" height="668" viewBox="0 0 620 668" fill="none">
          <path
            d="M1 667C2.01604 626.843 25.9967 516.336 113.791 395.559C223.534 244.588 255.542 223.239 270.784 212.564C286.026 201.889 336.325 177.49 345.47 230.863C354.616 284.237 331.949 339.514 324.132 340.661C316.314 341.807 278.405 328.461 270.784 244.588C263.163 160.716 283.922 141.536 289.574 135.779C295.227 130.022 324.132 120.635 324.132 179.015C324.132 237.395 320.654 244.588 318.915 244.588C317.195 241.454 314.786 230.66 318.915 212.564C324.077 189.943 348.179 150.193 361.228 140.891C374.278 131.59 393.221 134.713 389.093 166.722C384.965 198.731 384.449 217.832 361.228 284.947C342.652 338.639 372.065 308.696 389.093 287.012C411.282 258.967 462.78 196.679 491.264 171.885C526.869 140.891 634.715 12.3579 660 1"
            stroke="white"
            strokeWidth="2"
          />
        </Heart>
      </ShortsCom>
      <DemoComWrap>
        <DemoCom
          modules={[Controller, Parallax]}
          controller={{
            control: shortsSlide,
          }}
          initialSlide={initShorts}
          slidesPerView={'auto'}
          centeredSlides
          loop
          direction={'vertical'}
          grabCursor
          parallax={true}
          onInit={(swiper) => {
            setControllerSlide(swiper);
          }}
        >
          {shorts.length &&
            shorts.map(({ id }) => (
              <SwiperSlide key={id}>
                {[0, 1, 2].map((el) => (
                  <span key={el} />
                ))}
              </SwiperSlide>
            ))}
        </DemoCom>
      </DemoComWrap>
    </>
  );
};

export default Shorts;
