import * as React from "react";
import { Link } from "react-router-dom";
import { Logo, Navigation, RightSection } from "./Header.styles";
import messages from "../Messages";
import { useIntl } from "react-intl";

const Header: React.FunctionComponent = () => {
  const intl = useIntl();

  return (
    <Navigation>
      <Logo href="/">
        <img className="img" src="/images/logo.png" alt="Logo" />
      </Logo>
      <RightSection>
        <div>
          <Link to="/">{intl.formatMessage(messages.home)}</Link>
        </div>
        <div>
          <Link to="/adventures">
            {intl.formatMessage(messages.adventures)}
          </Link>
        </div>
        <div>
          <Link to="/contact">{intl.formatMessage(messages.contactUs)}</Link>
        </div>
        <div>
          <Link to="/signin">{intl.formatMessage(messages.signIn)}</Link>
        </div>
        <i className="cart plus large icon"></i>
        <i className="facebook f large icon"></i>
        <i className="instagram large icon"></i>
      </RightSection>
    </Navigation>
  );
};

export default Header;
