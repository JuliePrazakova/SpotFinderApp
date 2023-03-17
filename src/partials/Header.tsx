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
import Modal from "../pages/cart-page/cart-page";

const Header: React.FunctionComponent<HeaderType> = ({ visible }) => {
  const intl = useIntl();

  const { isAuthenticated } = useAuth0();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
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
          <Link to={paths.contact.path}>
            {intl.formatMessage(messages.contactUs)}
          </Link>
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
        <button onClick={handleOpenModal}>
          <i className="cart plus large icon"></i>
        </button>
        <i className="facebook f large icon"></i>
        <i className="instagram large icon"></i>
      </RightSection>

      <Modal
        title="Shopping cart"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Navigation>
  );
};

export default Header;
