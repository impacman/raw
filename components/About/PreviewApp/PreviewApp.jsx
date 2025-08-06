import { PreviewAppCom, Grid, LinkApp, Images, Parallax, ParallaxMove } from './styled';
import { download } from '@/context/download';

import Picture from '@/components/Picture';

const PreviewApp = ({ previewApp }) => (
  <PreviewAppCom>
    <Parallax>
      {previewApp.parallaxEls.map(({ id, text, speed }) => (
        <ParallaxMove key={id} data-scroll data-scroll-direction="horizontal" data-scroll-speed={speed}>
          {text}
        </ParallaxMove>
      ))}
    </Parallax>
    <Grid>
      <LinkApp
        style={{
          opacity: previewApp.guidlines.active ? 1 : 0,
          pointerEvents: previewApp.guidlines.active ? 'auto' : 'none',
        }}
        onClick={download}
        data-download={previewApp.guidlines.link}
        whileHover={{
          cursor: 'pointer',
          color: 'var(--color-white)',
        }}
        whileTap={{
          color: 'var(--color-white)',
        }}
      >
        {previewApp.guidlines.text}
      </LinkApp>
      <Images data-scroll data-scroll-repeat>
        <div id="fixed-target"></div>
        <div data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
          <Picture path={previewApp.img.path} src={previewApp.img.src} alt={previewApp.img.alt} />
        </div>
      </Images>
      {/* <LinkApp
        style={{
          opacity: previewApp.vision.active ? 1 : 0,
          pointerEvents: previewApp.vision.active ? 'auto' : 'none',
        }}
        onClick={download}
        data-download={previewApp.vision.link}
        data-hover={previewApp.vision.link ? 'tap to download' : ''}
      >
        {previewApp.vision.text}
      </LinkApp> */}
    </Grid>
  </PreviewAppCom>
);

export default PreviewApp;
