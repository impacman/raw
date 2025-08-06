import { Images } from './styled';

import ParallaxMove from '../ParallaxMove';
import Picture from '../Picture';

const ParallaxImages = ({ images }) => (
  <ParallaxMove bias={(100 / 2.5) * (images.length - 2.5)} speed={images.length * images.length}>
    {images.map(({ id, path, src, alt }) => (
      <Images key={id}>
        <Picture path={path} src={src} alt={alt} />
      </Images>
    ))}
  </ParallaxMove>
);

export default ParallaxImages;
