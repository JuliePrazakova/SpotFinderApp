import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import messages from "../../Messages";
import { useIntl } from "react-intl";

// Styles
import { Button } from "./login-components.styles";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const intl = useIntl();

  return (
    <Button onClick={() => loginWithRedirect()}>
      {intl.formatMessage(messages.login)}
    </Button>
  );
};

export default LoginButton;
