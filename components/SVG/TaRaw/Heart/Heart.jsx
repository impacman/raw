import { useMatchMedia } from '@/hooks/useMatchMedia';
import { HeartCom, Bg } from './styled';

const Heart = ({ loadingState, prediction, color }) => {
  const { isMinMobile } = useMatchMedia();

  const animationVariants = {
    play: {
      x: [!isMinMobile ? '120%' : '95%', '0%'],
      y: [!isMinMobile ? '-88%' : '-89%', '0%'],
      rotateX: [-360, 0],
      rotateY: [-360, 0],
      top: ['50%', '0%'],
      right: ['50%', '0%'],
      scale: [0.8, 1],
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <HeartCom
      animate={loadingState && !prediction && 'play'}
      variants={animationVariants}
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
    >
      <Bg
        d="M59.557 29.7785C59.557 46.2247 46.2247 59.557 29.7785 59.557C13.3323 59.557 0 46.2247 0 29.7785C0 13.3323 13.3323 0 29.7785 0C46.2247 0 59.557 13.3323 59.557 29.7785Z"
        fill={'transparent'}
        className={!prediction && loadingState ? 'active' : ''}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.737 19.709C34.7445 19.3082 35.8232 19.117 36.9071 19.1472C37.991 19.1773 39.0574 19.4281 40.0411 19.8843C41.0244 20.3403 41.9044 20.992 42.6275 21.7994C45.554 25.0539 45.0457 30.0416 42.0581 33.0442L31.2881 43.8142L30.536 43.0622L31.2844 43.8178C30.8837 44.2148 30.3424 44.4375 29.7783 44.4375C29.2142 44.4375 28.6729 44.2148 28.2721 43.8178L28.2685 43.8142L17.2212 32.7669C16.4547 31.9999 15.8525 31.0844 15.4517 30.0769C15.0509 29.0694 14.8597 27.9907 14.8898 26.9068C14.92 25.8229 15.1708 24.7565 15.627 23.7728C16.083 22.7895 16.7346 21.9095 17.5421 21.1864C20.7966 18.2599 25.7842 18.7682 28.7869 21.7558L28.7917 21.7605L29.7787 22.7551L31.0445 21.481L31.0472 21.4782C31.8142 20.7118 32.7295 20.1098 33.737 19.709Z"
        fill={!prediction ? '#FFFC83' : `var(--color-${color ? color : 'white'})`}
      />
    </HeartCom>
  );
};

export default Heart;
