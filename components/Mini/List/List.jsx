/** @format */

import { Fast, Win } from './styled';

const List = ({ data }) => {
  const { title, items, id } = data;

  if (id === 'fast')
    return (
      <Fast.ListCom>
        {title && <Fast.Title>{title}</Fast.Title>}
        {items && (
          <Fast.Items>
            {items.map(({ id, val, time, arrow }) => (
              <Fast.Item key={id}>
                <span>{val}</span>
                <span>{time}</span>
                {arrow && (
                  <Fast.Arrow data-scroll data-scroll-repeat>
                    <span>{'>'}</span>
                    <span>{'>'}</span>
                  </Fast.Arrow>
                )}
              </Fast.Item>
            ))}
          </Fast.Items>
        )}
      </Fast.ListCom>
    );
  else if (id === 'win')
    return (
      <Win.ListCom>
        {items &&
          items.map(({ id, text }, ind) => (
            <Win.Item key={id}>
              {items.length - 1 !== ind && <Win.Number>0{ind + 1}.&nbsp;</Win.Number>}
              <span dangerouslySetInnerHTML={{ __html: text }} />
            </Win.Item>
          ))}
      </Win.ListCom>
    );
};

export default List;
