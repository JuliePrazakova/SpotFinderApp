import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import messages from "../../Messages";
import { useIntl } from "react-intl";

// Styles
import { Button } from "./login-components.styles";

const LoginButton = () => {
  const { loginWithRedirect, getAccessTokenSilently } = useAuth0();
  const intl = useIntl();

  const handleClick = async () => {
    try {
      loginWithRedirect();
      const accessToken = await getAccessTokenSilently();
      console.log(accessToken); // You can log or use the accessToken here
      localStorage.setItem("accessToken", accessToken); // Save accessToken to localStorage
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Button onClick={handleClick}>{intl.formatMessage(messages.login)}</Button>
  );
};

export default LoginButton;
