import { ImCom, Wrapper, Item, WrappImages, ImgBig, WrappContent, Title, Descr } from './styled';

import Picture from '../Picture';

const Im = ({ im }) => (
  <ImCom data-scroll-section data-triger="im">
    <Wrapper>
      {im.map(({ id, type, images, title, descr }) => (
        <Item key={id} className={type}>
          {images && (
            <WrappImages>
              {images.map(({ id, path, src, alt, size, modification, position }) => (
                <ImgBig
                  key={id}
                  data-scroll
                  data-scroll-speed={id}
                  data-scroll-delay={0.05}
                  className={`${size === 'big' ? modification : ''} ${position ? position : ''}`}
                >
                  <Picture path={path} src={src} alt={alt} />
                </ImgBig>
              ))}
            </WrappImages>
          )}
          <WrappContent>
            {title && <Title className={title.transform ? title.transform : ''}>{title.text}</Title>}
            {descr && (
              <Descr
                className={`${descr.size ? descr.size : ''} ${descr.transform ? descr.transform : ''}`}
                dangerouslySetInnerHTML={{ __html: descr.text }}
              />
            )}
          </WrappContent>
        </Item>
      ))}
    </Wrapper>
  </ImCom>
);

export default Im;
