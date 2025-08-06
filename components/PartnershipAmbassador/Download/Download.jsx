import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import {
  DownloadCom,
  Wrapper,
  Info,
  InfoTitle,
  InfoDescr,
  Title,
  Articles,
  ArticlesRow,
  ArticlesLink,
  ArticlesLinkSlash,
  ArticlesLinkText,
} from './styled';

import Bg from '@/components/Bg';

const Download = ({ data, demo }) => {
  const { info, bg, title, articles } = data;
  const { isMobile } = useMatchMedia();
  const [mobile, setMobile] = useState(false);
  const device = !mobile ? 'des' : 'mob';

  useEffect(() => (isMobile ? setMobile(true) : setMobile(false)));

  return (
    <DownloadCom data-scroll-section data-triger="download">
      <Wrapper>
        {bg && <Bg img={bg} />}
        {title && (
          <div>
            <Title>
              {title[device].map((el) => (
                <span key={el} className={demo ? 'demo' : ''}>
                  {el}
                </span>
              ))}
            </Title>
          </div>
        )}
        {articles && (
          <Articles>
            {articles.map((el, elIndex) => (
              <ArticlesRow key={el.links}>
                {el.links.map((link, linkIndex) => (
                  <ArticlesLink key={link.text}>
                    {!mobile ? <>{linkIndex === 5 ? <ArticlesLinkSlash>//</ArticlesLinkSlash> : ''}</> : <ArticlesLinkSlash>//</ArticlesLinkSlash>}
                    <ArticlesLinkText href={link.link}>{link.text}</ArticlesLinkText>
                    {!mobile && linkIndex !== 4 && linkIndex !== el.links.length - 1 ? <ArticlesLinkSlash>//</ArticlesLinkSlash> : ''}
                  </ArticlesLink>
                ))}
              </ArticlesRow>
            ))}
          </Articles>
        )}
      </Wrapper>
      {info && (
        <Info>
          <InfoTitle>
            {info.title.map((el) =>
              el.link ? (
                <motion.a
                  whileHover={{
                    cursor: 'pointer',
                    color: 'var(--color-black)',
                  }}
                  whileTap={{}}
                  href={el.link}
                  key={el.text[device]}
                >
                  {el.text[device]}
                </motion.a>
              ) : (
                <span key={el.text[device]}>{el.text[device]}</span>
              )
            )}
          </InfoTitle>
          <InfoDescr dangerouslySetInnerHTML={{ __html: info.descr }} />
        </Info>
      )}
    </DownloadCom>
  );
};

export default Download;
