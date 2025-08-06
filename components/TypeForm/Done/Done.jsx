import Link from "next/link";
import { DoneCom, Text } from "./styled";

import Close from "../Close";

const Done = () => (
  <DoneCom>
    <Close />
    <Text>You're in. First step to RAW Ambassador status = complete 🔥</Text>
    <Text>
      Our daredevil squad is reviewing your application. We'll hit you back with
      next steps soon. Meanwhile, check our website or&nbsp;
      <Link href="/socials" passHref>
        follow us on socials
      </Link>
      .
    </Text>
    <Text>Stay 100% RAWself.</Text>
  </DoneCom>
);

export default Done;
