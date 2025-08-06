import { DescrCom, Text } from './styled';

const Descr = ({ description, theme }) => (
  <DescrCom styledTheme={theme}>
    {description.map(({ id, text, bold, inline }) => (
      <Text key={id} bold={bold} inline={inline}>
        {text}
      </Text>
    ))}
  </DescrCom>
);

export default Descr;
