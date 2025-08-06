/** @format */

import { DescrCom } from "./styled";

const Descr = ({ text, input }) => <DescrCom className={input ? "input" : null} dangerouslySetInnerHTML={{ __html: text }} />;

export default Descr;
