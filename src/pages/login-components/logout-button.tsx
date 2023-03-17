import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./login-components.styles";
import { useIntl } from "react-intl";
import messages from "../../Messages";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const intl = useIntl();

  return (
    <Button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      {intl.formatMessage(messages.logout)}
    </Button>
  );
};

export default LogoutButton;
