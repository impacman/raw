import { motion, AnimatePresence } from 'framer-motion';
import { ItemCom, Title, Description, Text } from './styled';

const Item = ({ title, description, id, toggle, isVisible }) => (
  <ItemCom onClick={() => toggle(id)} initial={false} animate={isVisible === id ? 'open' : 'closed'}>
    <Title>
      <motion.span
        variants={{
          closed: {
            color: 'var(--color-white)',
          },
          open: {
            color: 'var(--color-snuff)',
          },
        }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.span>
      <motion.svg
        variants={{
          closed: {
            rotate: 0,
          },
          open: {
            rotate: -45,
          },
        }}
        transition={{ duration: 0.3 }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M24 12H0v-.174h24V12z" fill="var(--color-white)" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 24V0h.175v24H12z" fill="var(--color-white)" />
      </motion.svg>
    </Title>
    <AnimatePresence>
      {isVisible === id && (
        <Description
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: 'auto',
            opacity: 1,
          }}
          exit={{
            height: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <Text>
            {description.map(({ id, text }) => (
              <span key={id} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </Text>
        </Description>
      )}
    </AnimatePresence>
  </ItemCom>
);

export default Item;
