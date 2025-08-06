import { BtnStart, BtnDefault } from "./styled";

import OK from "@/components/SVG/OK";

const Btn = ({ start, data, icon, step }) => {
  const BtnCom = start ? BtnStart : BtnDefault;

  return (
    <BtnCom
      $styledStep={step}
      onClick={() => data.setActiveForm && data.setActiveForm(true)}
      whileHover={{
        backgroundColor: "var(--color-black-light)",
        cursor: "pointer",
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.9,
        transition: { duration: 0.2 },
      }}
      type={data.type}
    >
      {data.text}
      {icon && <OK />}
    </BtnCom>
  );
};

export default Btn;
