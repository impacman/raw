import { LogoLinkCom, LogoNoLinkCom } from './styled';

import LogoSvg from '../SVG/Logo';

const LogoLink = ({ color }) => (
  <LogoLinkCom href={'/'} passHref>
    <LogoSvg color={color} />
  </LogoLinkCom>
);

const LogoNoLink = ({ color }) => (
  <LogoNoLinkCom>
    <LogoSvg color={color} />
  </LogoNoLinkCom>
);

const Logo = ({ noLink, dark, violet }) => {
  let color = 'var(--color-white)';
  violet ? (color = 'var(--color-violet)') : dark && (color = 'var(--color-black)');

  return noLink ? <LogoNoLink color={color} /> : <LogoLink color={color} />;
};

export default Logo;
