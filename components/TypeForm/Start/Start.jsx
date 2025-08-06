import Link from "next/link";
import { StartCom, WrapLogo, Title, Descr } from "./styled";

import Logo from "@/components/Logo";
import Btn from "../Btn";

const Start = ({ start, setActiveForm }) => (
  <StartCom>
    <WrapLogo>
      <Logo />
    </WrapLogo>
    <Title>{start.title}</Title>
    <Descr>
      <p>Drop your details. We'll drop the knowledge</p>
      <Btn
        start
        data={{
          type: "button",
          text: "Apply for free",
          setActiveForm: setActiveForm,
        }}
      />
      <p>
        FYI: spots are limited (wish we could take everyone). You'll be noted
        for
      </p>
      <p>
        future openings. See{" "}
        <Link href="/ambassadors/terms-conditions">terms</Link> for info
      </p>
    </Descr>
  </StartCom>
);

export default Start;
