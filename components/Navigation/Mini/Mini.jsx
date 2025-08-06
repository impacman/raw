/** @format */

import Link from 'next/link';
import pagesColors from '@/context/color.utils';
import { AnimatePresence, motion } from 'framer-motion';
import { MiniCom } from './styled';

const Mobile = ({ items, navIsOpen, light, pathname }) => (
  <AnimatePresence initial={false}>
    {navIsOpen && (
      <MiniCom
        initial={{
          height: 0,
        }}
        animate={{
          height: 'auto',
          display: 'flex',
        }}
        exit={{
          height: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        style={
          light && {
            backgroundColor: 'var(--color-violet)',
          }
        }
        className={'navigation'}
      >
        {items.map(({ id, href, name }) => (
          <motion.div
            key={id}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                delay: Number(`0.${id + 2}`),
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.2,
                delay: 0,
              },
            }}
            whileHover={{
              color: 'var(--color-violet)',
            }}
            whileTap={{
              color: 'var(--color-violet)',
            }}
          >
            <Link
              href={href}
              data-tap-color={pagesColors[pathname].color}
              passHref
              className={pathname === href ? 'active-mobile' : ''}
              dangerouslySetInnerHTML={{ __html: name }}
            />
          </motion.div>
        ))}
      </MiniCom>
    )}
  </AnimatePresence>
);

export default Mobile;
