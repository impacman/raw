import { AnimatePresence } from 'framer-motion';
import { DoneFixed, DoneNormal } from './styled';

const FormDone = ({ texts, fixed }) => {
  const Done = fixed ? DoneFixed : DoneNormal;

  return (
    <AnimatePresence initial={true}>
      <Done
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
        {texts && texts.map(({ id, text }) => <p key={id} dangerouslySetInnerHTML={{ __html: text }} />)}
      </Done>
    </AnimatePresence>
  );
};

export default FormDone;
