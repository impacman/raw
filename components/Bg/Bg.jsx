import { BgCom } from './styled';

import Picture from '../Picture';

const Bg = ({ animation, loadingState, img, position }) =>
  !animation ? (
    <BgCom className={position && position}>
      <Picture path={img.path} src={img.src} alt={img.alt} noMobile={img.noMobile} />
    </BgCom>
  ) : (
    <BgCom
      className={position && position}
      style={{
        opacity: !loadingState ? 0 : 1,
        top: '2px',
      }}
    >
      <Picture path={img.path} src={img.src} alt={img.alt} />
    </BgCom>
  );

export default Bg;
