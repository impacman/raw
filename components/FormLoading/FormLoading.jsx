import { FormLoadingCom } from './styled';

import Lines from '../SVG/Lines';

const FormLoading = ({ color, position, colorLines }) => (
  <FormLoadingCom
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    exit={{
      opacity: 0,
    }}
    transition={{
      duration: 0.2,
    }}
    $styledColor={color}
    $styledPosition={position}
  >
    <Lines color={colorLines} />
  </FormLoadingCom>
);

export default FormLoading;
