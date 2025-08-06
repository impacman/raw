import { TitleCom } from './styled';

const Title = ({ title }) => (
  <TitleCom data-scroll-section>
    {title.map(({ id, text }) => (
      <span key={id}>{text}</span>
    ))}
  </TitleCom>
);

export default Title;
