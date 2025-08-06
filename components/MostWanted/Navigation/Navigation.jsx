import { NavigationCom, Item } from './styled';

const Navigation = ({ navigation }) => (
  <NavigationCom data-scroll-section>
    {navigation.map(({ id, href, name }) => (
      <Item key={id} href={href} passHref>
        {name}
      </Item>
    ))}
  </NavigationCom>
);

export default Navigation;
