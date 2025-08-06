import { BlocksCom, Item, Title } from './styled';

import List from './List';
import Texts from './Texts';

const Blocks = ({ blocks, numbering, theme }) => (
  <BlocksCom styledTheme={theme}>
    {blocks.map(({ id, title, lists, texts }, index) => (
      <Item key={id}>
        {title && (
          <Title styledTitle={numbering}>
            {numbering && <span>{(index += 1)}.&nbsp;</span>}
            {title}
          </Title>
        )}
        {lists && <List lists={lists} />}
        {texts && <Texts texts={texts} theme={theme} />}
      </Item>
    ))}
  </BlocksCom>
);

export default Blocks;
