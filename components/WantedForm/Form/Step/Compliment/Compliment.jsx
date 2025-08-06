import { useState, useEffect } from 'react';
import { ComplimentCom, Text, Btn } from './styled';

import Reloaded from '@/components/SVG/Reloaded';

const Compliment = ({ data }) => {
  const { register, name, type, placeholder, compliment, compliments } = data;

  const [qwe, setqwe] = useState('');

  useEffect(() => {
    if (!compliment) return;

    setqwe(compliments[Math.floor(Math.random() * compliments.length)].text);
  }, [compliment]);

  const getCompliment = () => setqwe(compliments[Math.floor(Math.random() * compliments.length)].text);

  return (
    <ComplimentCom>
      <Text {...register(name)} type={type} placeholder={placeholder} value={qwe} />
      <Btn type="button" onClick={getCompliment}>
        <Reloaded />
      </Btn>
    </ComplimentCom>
  );
};

export default Compliment;
