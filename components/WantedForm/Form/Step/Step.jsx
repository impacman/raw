import { StepCom, LabelWrapper, Label, SupLabel, Descr, DescrLink, WrapBtn } from './styled';

import Input from './Input';
import Compliment from './Compliment';
import Btn from '../../Btn';
import ArrowR from '@/components/SVG/ArrowR';

const Step = ({ data, step, stepsLength, register, err, compliments }) => (
  <StepCom
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
      duration: 0.3,
    }}
  >
    <Label>
      <LabelWrapper>
        {(step += 1)}/{stepsLength}
        <ArrowR />
      </LabelWrapper>
      {data.label}
    </Label>
    {data.supLabel && <SupLabel>{data.supLabel}</SupLabel>}
    {data.inputs.map(({ id, name, type, placeholder, phone, label, compliment }) => {
      if (compliment) return <Compliment key={id} data={{ register, name, type, placeholder, compliment, compliments }} />;
      else return <Input key={id} data={{ register, name, type, placeholder, err, phone, label }} />;
    })}
    {data.descr ? (
      <>
        {!data.descr.link ? (
          <Descr dangerouslySetInnerHTML={{ __html: data.descr.text }} />
        ) : (
          <DescrLink
            href={data.descr.href}
            passHref
            className={data.descr.absolute ? 'isAbsolute' : false}
            dangerouslySetInnerHTML={{ __html: data.descr.text }}
            target={'_blank'}
          />
        )}
      </>
    ) : null}
    <WrapBtn>
      <Btn data={data.btn} icon step />
    </WrapBtn>
  </StepCom>
);

export default Step;
