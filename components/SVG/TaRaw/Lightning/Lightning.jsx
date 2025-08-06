import { useMatchMedia } from '@/hooks/useMatchMedia';
import { LightningCom } from './styled';

const Lightning = ({ loadingState, prediction, color }) => {
  const { isMinMobile } = useMatchMedia();

  const animationVariants = {
    play: {
      x: [!isMinMobile ? '-250%' : '-274%', '0%'],
      y: [!isMinMobile ? '150%' : '124%', '0%'],
      rotateX: [-360, 0],
      rotateY: [-360, 0],
      top: ['50%', '0%'],
      left: ['50%', '0%'],
      scale: [0.8, 1],
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <LightningCom
      animate={loadingState && !prediction && 'play'}
      variants={animationVariants}
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
    >
      <path
        d="M59.557 29.7785C59.557 46.2247 46.2247 59.557 29.7785 59.557C13.3323 59.557 0 46.2247 0 29.7785C0 13.3323 13.3323 0 29.7785 0C46.2247 0 59.557 13.3323 59.557 29.7785Z"
        fill={!prediction ? '#F17773' : ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.5194 13.9439C34.9424 14.161 35.1699 14.6325 35.0767 15.0987L33.127 24.847L40.7883 27.72C41.1208 27.8447 41.3691 28.1271 41.4503 28.4728C41.5314 28.8185 41.4347 29.1819 41.1924 29.4415L26.3031 45.3943C25.9787 45.7419 25.463 45.8319 25.0401 45.6148C24.6171 45.3977 24.3895 44.9263 24.4828 44.46L26.4325 34.7117L18.7711 31.8387C18.4386 31.714 18.1903 31.4316 18.1092 31.0859C18.028 30.7402 18.1248 30.3768 18.3671 30.1172L33.2563 14.1644C33.5807 13.8169 34.0964 13.7268 34.5194 13.9439ZM21.0074 30.4056L28.0261 33.0376C28.5143 33.2207 28.7978 33.7307 28.6956 34.242L27.3028 41.2059L38.552 29.1531L31.5333 26.5211C31.0451 26.338 30.7616 25.828 30.8639 25.3167L32.2567 18.3528L21.0074 30.4056Z"
        fill={!prediction ? '#90F980' : `var(--color-${color ? color : 'white'})`}
      />
    </LightningCom>
  );
};

export default Lightning;
