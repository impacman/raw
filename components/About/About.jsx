import { AboutCom, Wrapper, TitleWrap, TextProfile } from './styled';

import Title from '../Title';
import DescrSlide from './DescrSlide';
import PreviewApp from './PreviewApp';

const About = ({ about, noTriger }) => (
  <AboutCom data-scroll-section data-triger={noTriger ? null : 'about'}>
    <Wrapper>
      {about.title && (
        <TitleWrap styledTitle={about.titleMin}>
          <Title>{about.title}</Title>
        </TitleWrap>
      )}
      {about.descriptionTop && <DescrSlide description={about.descriptionTop} />}
      {about.previewApp && <PreviewApp previewApp={about.previewApp} />}
      {about.descriptionBottom && <DescrSlide description={about.descriptionBottom} />}
    </Wrapper>
    {about.textProfile && <TextProfile dangerouslySetInnerHTML={{ __html: about.textProfile }} />}
  </AboutCom>
);

export default About;
