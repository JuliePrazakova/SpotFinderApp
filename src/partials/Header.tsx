import * as React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/images/logo.png";
import { Wrapper } from "./Header.styles";

const Header: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <div className="topNav">
        <a className="active" href="/">
          <img className="img" src={Logo} alt="Logo" />
        </a>
        <div className="header-right">
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
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
