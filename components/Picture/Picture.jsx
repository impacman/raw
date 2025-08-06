import { PictureCom } from "./styled";

const Picture = ({ path, src, alt, mirror, png, noMobile, styles }) => (
  <PictureCom className={mirror && "isMirror"} $styledNoMobile={noMobile}>
    <source srcSet={`/images/${path}/desktop/avif/${src}.avif`} type="image/avif" media="(min-width: 576px)" />
    <source srcSet={`/images/${path}/mobile/avif/${src}.avif`} type="image/avif" media="(max-width: 575px)" />

    <source srcSet={`/images/${path}/desktop/webp/${src}.webp`} type="image/webp" media="(min-width: 576px)" />
    <source srcSet={`/images/${path}/mobile/webp/${src}.webp`} type="image/webp" media="(max-width: 575px)" />

    <img
      style={styles ? styles : null}
      src={`/images/${path}/desktop/${png ? "png" : "jpg"}/${src}.${png ? "png" : "jpg"}`}
      alt={alt}
      width={0}
      height={0}
    />
  </PictureCom>
);

export default Picture;
