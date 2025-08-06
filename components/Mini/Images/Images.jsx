/** @format */

import { ImagesCom, Img1, Img2, Img3, Img4 } from './styled';

import Picture from '@/components/Picture';

const Images = ({}) => (
  <ImagesCom>
    <Img1>
      <div data-scroll data-scroll-speed="1-1">
        <Picture path={'mini'} src={'1'} alt={''} />
      </div>
    </Img1>
    <Img2>
      <div data-scroll data-scroll-speed="-1">
        <Picture path={'mini'} src={'2'} alt={''} />
      </div>
    </Img2>
    <Img3>
      <div data-scroll data-scroll-speed="0.5">
        <Picture path={'mini'} src={'3'} alt={''} />
      </div>
    </Img3>
    <Img4>
      <div data-scroll data-scroll-speed="-1">
        <Picture path={'mini'} src={'4'} alt={''} />
      </div>
    </Img4>
  </ImagesCom>
);

export default Images;
