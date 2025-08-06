/** @format */

import { useRedirect } from "@/hooks/useRedirect";
import { AuthCom } from "./styled";

import Form from "./Form";

const Auth = ({ form }) => {
  useRedirect();

  return (
    <AuthCom>
      <Form data={form} />
    </AuthCom>
  );
};

export default Auth;
