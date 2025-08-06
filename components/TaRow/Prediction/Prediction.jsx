import { useRef, useState, useEffect } from 'react';
import { useAppContext } from '@/context/state';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { PredictionCom, Svg, Card, Front, Back, BackContent, Img, BackDescr, Animation, Wrap, Title, Descr, Info, Btn, FootNote } from './styled';

import Icons from '../Icons';
import Picture from '@/components/Picture';
import { theme } from './theme';

const Prediction = ({ loadingState, card, link }) => {
  const { isAnimatingTaRaw } = useAppContext();
  const { isMinMobile } = useMatchMedia();
  const { btn, footnote, predictions, images } = card;

  const refCard = useRef(null);

  const [up, setUp] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [typeAnimIndex, setTypeAnimIndex] = useState(0);
  const [themeValue, setThemeValue] = useState(0);
  const [prediction, setPrediction] = useState(0);
  const [cardImages, setCardImages] = useState(0);
  const [randomNumber, setRandomNumber] = useState(3);

  const arrayAnim = ['start', 'interval', 'show', 'end'];
  const typeAnim = arrayAnim[typeAnimIndex];

  const animValue = {
    scaleMin: isMinMobile ? 0.62 : 0.58,
    scale: isMinMobile ? 0.64 : 0.61,
    x: isMinMobile ? '42%' : '38%',
  };

  const animationVariants = {
    play: {
      opacity: [0, 1],
      transition: { duration: 0.5, delay: 0.5, ease: 'easeInOut' },
    },
    card: {
      start: {
        rotate: [7, 0],
        rotateY: [0, -100],
        x: ['0%', animValue.x],
        y: ['-1%', '0%'],
        scale: [animValue.scale, animValue.scaleMin],
        transition: { duration: 0.5, ease: 'easeInOut' },
      },
      interval: {
        rotate: [0, 0],
        rotateY: [-100, -180],
        x: [animValue.x, '0%'],
        scale: [animValue.scaleMin, 0.7],
        transition: { duration: 0.5, ease: 'easeInOut' },
      },
      show: {
        rotate: [0, 0],
        rotateY: [-180, -180],
        x: ['0%', '0%'],
        scale: [0.7, 0.8],
        transition: { duration: 0.5, ease: 'easeInOut' },
      },
      end: {
        rotate: [0, 0],
        rotateY: [-180, 0],
        x: ['0%', '0%'],
        scale: [0.8, isMinMobile ? 1 : 0.96],
        transition: { duration: 1, ease: 'easeInOut' },
      },
    },
    content: {
      hide: {
        opacity: 0,
      },
      show: {
        opacity: 1,
      },
    },
  };

  useEffect(() => {
    if (!isAnimatingTaRaw) return;

    const intervalId = setInterval(() => {
      setTypeAnimIndex((prevIndex) => {
        if (prevIndex === arrayAnim.length - 1) {
          clearInterval(intervalId);
          return prevIndex;
        } else if (prevIndex === 0) {
          setTimeout(() => {
            setTypeAnimIndex(prevIndex + 1);
            setUp(true);
          }, 200);
          return prevIndex;
        } else if (prevIndex === 1) {
          setTimeout(() => {
            setTypeAnimIndex(prevIndex + 1);
            setUp(true);
          }, 400);
          return prevIndex;
        } else {
          setTimeout(() => {
            setTypeAnimIndex(prevIndex + 1);
            setShowContent(true);
          }, 700);
          return prevIndex;
        }
      });
    }, 200);

    return () => clearInterval(intervalId);
  }, [isAnimatingTaRaw]);

  useEffect(() => {
    setThemeValue(Math.floor(Math.random() * theme.length));
    setPrediction(Math.floor(Math.random() * predictions.length));
    setCardImages(Math.floor(Math.random() * images.length));
    setRandomNumber(Math.floor(Math.random() * (20 - 3 + 1)) + 3);
  }, []);

  useEffect(() => {
    !isAnimatingTaRaw && loadingState && setTimeout(() => refCard.current.classList.add('active'), 700);

    isAnimatingTaRaw && refCard.current.classList.remove('active');
  }, [loadingState, isAnimatingTaRaw]);

  return (
    <PredictionCom $styledIndex={up ? '9' : '-1'} animate={loadingState && 'play'} variants={animationVariants}>
      <Card ref={refCard} animate={isAnimatingTaRaw && `${typeAnim}`} variants={animationVariants.card}>
        <Front $styledColor={typeAnim === 'end' && theme[themeValue].bg}>
          <Animation $styledColor={theme[themeValue].bg} animate={showContent ? 'show' : 'hide'} variants={animationVariants.content}>
            <Icons prediction color={theme[themeValue].icons} />
            <Svg xmlns="http://www.w3.org/2000/svg" width="627" height="897" viewBox="0 0 627 897" fill="none">
              <path
                d="M196.804 1.15918C196.804 16.7144 188.824 32.3458 180.894 45.114C139.55 111.683 78.8022 166.319 20.9848 218.237C16.9762 221.836 -2.87119 239.425 -7.32969 243.72C-7.95996 244.327 -24.9407 260.892 -24.9925 264.349C-25.0462 267.928 -21.4295 271.062 -18.251 272.709C-9.87165 277.05 -0.620424 279.643 8.58035 281.742C43.2296 289.646 104.652 297.45 137.479 298.731C264.476 303.686 390.52 278.984 508.129 231.315C603.316 192.735 687.463 135.911 766.127 70.8667C784.99 55.2701 803.732 38.7187 824.509 25.631C840.947 15.2763 832.282 31.4052 827.341 39.8556C799.076 88.1926 760.508 131.563 723.925 173.54C657.852 249.357 588.086 322.151 514.601 390.82C459.585 442.231 401.884 490.69 341.41 535.561C313.393 556.35 284.714 576.62 254.107 593.471C247.887 596.896 242.509 599.793 235.973 602.303C233.462 603.266 228.232 606.332 228.018 603.651C227.629 598.789 235.05 596.8 239.141 594.145C260.623 580.205 283.873 568.695 307.096 558.011C338.461 543.58 370.77 530.72 403.904 520.932C415.712 517.444 428.936 513.34 441.387 512.842C448.196 512.57 431.038 521.94 424.938 524.977C387.834 543.45 349.111 558.733 309.927 572.168C262.933 588.28 214.788 602.64 165.793 611.269C140.346 615.751 113.065 619.188 87.1867 616.258C81.6832 615.634 65.4479 613.793 62.7823 606.685C59.9463 599.122 83.5095 598.595 86.0407 598.595C102.795 598.595 123.41 601.986 135.254 614.977C136.091 615.895 139.936 622.49 139.097 621.651C134.226 616.78 141.838 614.681 145.636 613.898C169.378 609.003 194.517 608.311 218.579 606.617C275.804 602.589 333.078 599.77 390.421 598.19C410.686 597.632 430.957 597.055 451.23 596.977C456.759 596.955 473.248 596.227 467.814 597.246C452.669 600.086 435.375 598.794 420.219 598.595C368.826 597.919 317.435 595.307 266.107 592.797C202.336 589.678 138.597 586.318 74.7823 584.168C37.4623 582.91 -0.480437 583.335 -37.5318 577.966C-50.9847 576.016 -72.3042 573.488 -82.2956 562.46C-94.2152 549.304 -72.0851 530.894 -63.3519 524.235C-26.5713 496.193 29.6669 477.596 75.9284 486.348C127.781 496.158 149.471 557.216 168.625 599.404C188.513 643.209 202.4 693.646 232.332 732.077C238.409 739.88 244.479 745.494 254.714 746.302C279.207 748.236 304.947 736.222 326.916 727.223C369.391 709.825 522.69 632.284 524.308 731.808C525.03 776.175 498.277 820.792 473.073 855.447C465.153 866.337 456.374 876.664 447.59 886.863C447.534 886.927 439.126 896.342 439.095 896.301C437.746 894.503 446.076 885.705 446.376 885.38C455.232 875.786 466.192 868.444 477.252 861.65C494.39 851.122 513.202 840.761 533.14 836.773C543.622 834.677 555.916 838.733 565.701 834.818"
                stroke={`var(--color-${theme[themeValue].content})`}
                strokeWidth="0.5"
                strokeLinecap="round"
              />
            </Svg>
            <Wrap $styledColor={theme[themeValue].content}>
              <Title $styledColor={theme[themeValue].text}>
                {predictions[prediction].title.split(', ').map((el) => (
                  <span key={el} dangerouslySetInnerHTML={{ __html: el }} />
                ))}
              </Title>
              <Descr
                $styledColor={theme[themeValue].content}
                $styledSpace={predictions[prediction].descr.length > 340 ? true : false}
                dangerouslySetInnerHTML={{ __html: predictions[prediction].descr }}
              />
              <Info>
                {btn && (
                  <Btn
                    whileHover={{
                      cursor: 'pointer',
                      backgroundColor: `var(--color-${theme[themeValue].btn.hover.bg})`,
                      color: `var(--color-${theme[themeValue].btn.hover.text})`,
                    }}
                    whileTap={{
                      cursor: 'pointer',
                      scale: 0.95,
                    }}
                    href={link ? link : btn.link}
                    $styledColor={{ bg: theme[themeValue].btn.bg, text: theme[themeValue].btn.text }}
                  >
                    {btn.text}
                  </Btn>
                )}
                {footnote && (
                  <FootNote $styledColor={theme[themeValue].text}>
                    {footnote.map((el) => (
                      <span key={el}>{el}</span>
                    ))}
                  </FootNote>
                )}
              </Info>
            </Wrap>
          </Animation>
        </Front>
        <Back>
          <BackContent>
            <Img data-number={randomNumber}>
              <Picture path={'taraw'} src={images[cardImages].src} alt={images[cardImages].name.join(' ')} />
            </Img>
            <BackDescr>
              {images[cardImages].name.map((el) => (
                <span key={el}>{el}</span>
              ))}
            </BackDescr>
          </BackContent>
        </Back>
      </Card>
    </PredictionCom>
  );
};

export default Prediction;
