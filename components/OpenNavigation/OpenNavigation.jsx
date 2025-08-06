import { useAppContext } from '@/context/state';
import { useBodyColor } from '@/hooks/useBodyColor';
import { OpenNavigationCom, Wrapper, ItemLight, ItemDark } from './styled';

const OpenNavigation = ({ color, dark, colorInvert }) => {
  const { navIsOpen, setNavIsOpen } = useAppContext();

  useBodyColor(navIsOpen, color, 100);

  const Item = dark ? ItemDark : ItemLight;

  return (
    <OpenNavigationCom>
      <Wrapper onClick={setNavIsOpen} initial={false} animate={navIsOpen ? 'open' : 'closed'}>
        <Item
          variants={{
            closed: {
              y: 'calc(-50% + 8px)',
            },
            open: {
              y: '-50%',
              rotate: 45,
            },
          }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor: `${colorInvert && navIsOpen ? 'var(--color-white)' : ''}`,
          }}
        />
        <Item
          variants={{
            closed: {
              opacity: 1,
            },
            open: {
              opacity: 0,
            },
          }}
          transition={{ duration: 0.1 }}
          style={{
            backgroundColor: `${colorInvert && navIsOpen ? 'var(--color-white)' : ''}`,
          }}
        />
        <Item
          variants={{
            closed: {
              y: 'calc(-50% - 8px)',
            },
            open: {
              y: '-50%',
              rotate: 135,
            },
          }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor: `${colorInvert && navIsOpen ? 'var(--color-white)' : ''}`,
          }}
        />
      </Wrapper>
    </OpenNavigationCom>
  );
};

export default OpenNavigation;
