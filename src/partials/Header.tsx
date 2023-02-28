import * as React from "react";
import { Link } from "react-router-dom";
import messages from "../Messages";
import { useIntl } from "react-intl";
import paths from "../utilities/pathnames";

// Styles
import { Logo, Navigation, RightSection } from "./Header.styles";

const Header: React.FunctionComponent = () => {
  const intl = useIntl();

  return (
    <Navigation>
      <Logo href={paths.home.path}>
        <img className="img" src="/images/logo.png" alt="Logo" />
      </Logo>
      <RightSection>
        <div>
          <Link to={paths.home.path}>{intl.formatMessage(messages.home)}</Link>
        </div>
        <div>
          <Link to={paths.adventures.path}>
            {intl.formatMessage(messages.adventures)}
          </Link>
        </div>
        <div>
          <Link to={paths.contact.path}>
            {intl.formatMessage(messages.contactUs)}
          </Link>
        </div>
        <div>
          <Link to={paths.signIn.path}>
            {intl.formatMessage(messages.signIn)}
          </Link>
        </div>
        <i className="cart plus large icon"></i>
        <i className="facebook f large icon"></i>
        <i className="instagram large icon"></i>
      </RightSection>
    </Navigation>
  );
};

export default Header;
