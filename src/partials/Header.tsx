import * as React from "react";
import { Link } from "react-router-dom";
import { Logo, Navigation, RightSection } from "./Header.styles";

const Header: React.FunctionComponent = () => {
  return (
    <Navigation>
      <Logo href="/">
        <img className="img" src="/images/logo.png" alt="Logo" />
      </Logo>
      <RightSection>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/adventures">Adventures</Link>
        </div>
        <div>
          <Link to="/contact">Contact us</Link>
        </div>
        <div>
          <Link to="/signin">Sign in</Link>
        </div>
        <i className="cart plus large icon"></i>
        <i className="facebook f large icon"></i>
        <i className="instagram large icon"></i>
      </RightSection>
    </Navigation>
  );
};

export default Header;
