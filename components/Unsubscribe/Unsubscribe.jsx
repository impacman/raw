import { UnsubscribeCom } from './styled';

import Bg from '../Bg';
import Form from './Form';

const Unsubscribe = ({ data }) => {
  const { sheetID, form } = data;

  return (
    <UnsubscribeCom>
      <Bg img={{ path: 'bg', src: 'unsubscribe', alt: 'RAW MostWanted Done Bg' }} />
      <Form form={form} sheetID={sheetID} />
    </UnsubscribeCom>
  );
};

export default Unsubscribe;
