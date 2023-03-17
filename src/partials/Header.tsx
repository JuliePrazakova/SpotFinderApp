import React, { useState } from "react";
import { Link } from "react-router-dom";
import messages from "../Messages";
import { useIntl } from "react-intl";
import paths from "../utilities/pathnames";
import MiniSearch from "../pages/landing-page/search-bar/mini-search-bar";
import LoginButton from "../pages/login-components/login-button";
import LogoutButton from "../pages/login-components/logout-button";
import { useAuth0 } from "@auth0/auth0-react";

// Styles
import { Logo, Navigation, RightSection } from "./header.styles";
import { HeaderType } from "../pages/landing-page/landing-section";
import ModalCart from "../pages/cart-page/cart-page";
import ModalContactForm from "../pages/landing-page/contact-us/contact-modal";

const Header: React.FunctionComponent<HeaderType> = ({ visible }) => {
  const intl = useIntl();

  const { isAuthenticated } = useAuth0();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleCloseContactForm = () => {
    setIsContactFormOpen(false);
  };
  const handleOpenContactForm = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };
  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  return (
    <Navigation>
      <Logo href={paths.home.path}>
        <img className="img" src="/images/logo.png" alt="Logo" />
      </Logo>

      {visible && <MiniSearch />}

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
          <button onClick={handleOpenContactForm}>
            {intl.formatMessage(messages.contactUs)}
          </button>
        </div>

        <div> {!isAuthenticated && <LoginButton />}</div>

        {isAuthenticated && (
          <>
            <div>
              <Link to={paths.profile.path}>Profile</Link>
            </div>
            <div>
              <LogoutButton />
            </div>
          </>
        )}
        <button onClick={handleOpenCart}>
          <i className="cart plus large icon"></i>
        </button>
        <i className="facebook f large icon"></i>
        <i className="instagram large icon"></i>
      </RightSection>

      <ModalContactForm
        title="Contact us"
        isOpen={isContactFormOpen}
        onClose={handleCloseContactForm}
      />

      <ModalCart
        title="Shopping cart"
        isOpen={isCartOpen}
        onClose={handleCloseCart}
      />
    </Navigation>
  );
};

export default Header;
