import { WantedFormCom, WrapPicture } from './styled';

import Picture from '../Picture';
import Form from './Form';

const WantedForm = ({ img, steps, compliments }) => (
  <WantedFormCom data-scroll-section>
    <WrapPicture>
      <Picture path={img.path} src={img.src} alt={img.alt} png />
    </WrapPicture>
    <Form steps={steps} compliments={compliments} />
  </WantedFormCom>
);

export default WantedForm;
