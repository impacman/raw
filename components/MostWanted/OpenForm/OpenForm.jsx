import { OpenFormCom } from './styled';

const OpenForm = ({ openMobileForm }) => (
  <OpenFormCom data-scroll-section data-scroll-to href={openMobileForm.href}>
    {openMobileForm.name}
  </OpenFormCom>
);

export default OpenForm;
