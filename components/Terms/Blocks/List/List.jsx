import { ListCom, Descr, Items, Item } from './styled';

const List = ({ lists }) => (
  <>
    {lists.map(({ id, mb, order, descriptions, list }) => (
      <ListCom key={id} styledMb={mb} styledOrder={order}>
        {descriptions &&
          descriptions.map(({ id, text, bold, order, mb, mt }) => (
            <Descr key={id} styledBold={bold} styledOrder={order} styledMb={mb} styledMt={mt} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
        {list && (
          <Items styledOrder={list.order}>
            {list.items.map(({ id, text }) => (
              <Item key={id}>
                &nbsp;&nbsp;<span>{list.type === 'number' ? <>{id === 1 ? <>{id}.&nbsp;</> : <>{id}.</>}</> : <>&bull;</>}</span>&nbsp;&nbsp;
                <span dangerouslySetInnerHTML={{ __html: text }} />
              </Item>
            ))}
          </Items>
        )}
      </ListCom>
    ))}
  </>
);

export default List;
