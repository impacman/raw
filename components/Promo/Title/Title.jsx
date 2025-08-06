/** @format */

import { TitleCom } from "./styled";

const Title = ({ tag, text }) => {
  const Tag = tag ? tag : "p";

  return (
    <TitleCom>
      <Tag>{text}</Tag>
    </TitleCom>
  );
};

export default Title;
