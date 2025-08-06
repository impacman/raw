import { motion } from 'framer-motion';
import { LogoLoadingCom } from './styled';

const LogoLoading = ({ color, reverseAnimation }) => (
  <LogoLoadingCom width="605" height="181" viewBox="0 0 605 181" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1913_4034)">
      <path
        d="M0 180.796V0H70.1308C92.8202 0 110.697 4.64903 123.76 13.9471C136.824 23.073 143.356 35.6426 143.356 51.6559C143.356 63.8812 139.746 74.2123 132.527 82.6495C125.307 90.9144 115.08 96.6827 101.844 99.9542L158.568 180.796H112.673L58.5283 103.054C58.1845 103.226 57.7548 103.312 57.2391 103.312C56.8953 103.312 56.5516 103.312 56.2078 103.312H40.4799V180.796H0ZM65.4898 98.1463C76.6626 98.1463 85.5149 95.3052 92.0467 89.623C98.7504 83.9409 102.102 76.4508 102.102 67.1527C102.102 57.6825 98.7504 50.1062 92.0467 44.4241C85.5149 38.7419 76.6626 35.9009 65.4898 35.9009H40.4799V98.1463H65.4898Z"
        fill={`var(--color-${color})`}
      />
      <path
        d="M164.374 180.796L232.7 0H285.814L354.14 180.796H310.566L291.228 128.623H226.512L206.916 180.796H164.374ZM228.317 123.716H289.423L258.999 43.6493L228.317 123.716Z"
        fill={`var(--color-${color})`}
      />
      <path
        d="M401.557 180.796L359.273 0H402.073L441.78 169.69L479.165 0H485.096L522.739 169.69L562.446 0H604.731L562.446 180.796H519.645L482.002 10.8477L444.874 180.796H401.557Z"
        fill={`var(--color-${color})`}
      />
    </g>
    <defs>
      <clipPath id="clip0_1913_4034">
        <motion.rect
          initial={{
            width: !reverseAnimation ? '100%' : '0%',
          }}
          animate={{
            width: !reverseAnimation ? '0%' : '100%',
          }}
          exit={{
            width: !reverseAnimation ? '100%' : '0%',
          }}
          transition={{
            duration: 2,
          }}
          width="605"
          height="181"
          fill="var(--color-white)"
        />
      </clipPath>
    </defs>
  </LogoLoadingCom>
);

export default LogoLoading;
