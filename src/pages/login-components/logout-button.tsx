import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./login-components.styles";
import { useIntl } from "react-intl";
import messages from "../../Messages";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const intl = useIntl();

  const handleLogout = () => {
    localStorage.removeItem("accessToken"); // remove the accessToken from localStorage
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <Button onClick={handleLogout}>
      {intl.formatMessage(messages.logout)}
    </Button>
  );
};

export default LogoutButton;
