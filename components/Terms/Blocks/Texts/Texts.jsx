import { TextsCom, Text, Tablet, Row, Col } from './styled';

const Texts = ({ texts, theme }) => (
  <TextsCom styledOrder={texts.order}>
    {texts.items.map(({ id, text, bold, mt, mb, inline, tablet }) => {
      if (!tablet) return <Text bold={bold} key={id} styledMt={mt} styledMb={mb} styledInline={inline} dangerouslySetInnerHTML={{ __html: text }} />;
      else
        return (
          <Tablet key={id}>
            {tablet.map(({ id, col }) => (
              <Row key={id} styledTheme={theme}>
                {col.map(({ id, text }) => (
                  <Col key={id} styledTheme={theme}>
                    {text}
                  </Col>
                ))}
              </Row>
            ))}
          </Tablet>
        );
    })}
  </TextsCom>
);

export default Texts;
