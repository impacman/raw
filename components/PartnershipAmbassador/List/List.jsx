import { ListCom, El, Item } from './styled';

const List = ({ list }) => (
  <ListCom data-scroll-section data-pencil-list data-triger="list">
    <El>
      {list.map(({ id, text, mod }) => (
        <Item key={id} data-scroll data-scroll-repeat mod={mod ? true : false}>
          {text}
        </Item>
      ))}
    </El>
  </ListCom>
);

export default List;
