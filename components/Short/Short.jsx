import { useState } from 'react';
import { ShortCom, Wrapper, ImgBig, ImgMin } from './styled';
import Picture from '../Picture';

const Short = ({ images }) => {
  const [activeImage, setActiveImage] = useState(false);

  if (!images.data) return null;

  return (
    <ShortCom data-swiper-parallax-opacity="0.5" onClick={() => setActiveImage(!activeImage)}>
      <Wrapper>
        {images.data.map(({ id, size, alt, mirror }) => {
          const ImageComponent = size === 'big' ? ImgBig : size === 'min' ? ImgMin : null;
          if (!ImageComponent) return null;

          const className = activeImage ? (size === 'big' ? 'isMin' : 'isBig') : null;
          const srcSuffix = size === 'big' ? '-big' : '-min';

          return (
            <ImageComponent key={id} className={className}>
              <Picture path="shorts" src={`${images.src}${srcSuffix}`} alt={alt} mirror={mirror} />
            </ImageComponent>
          );
        })}
      </Wrapper>
    </ShortCom>
  );
};

export default Short;
