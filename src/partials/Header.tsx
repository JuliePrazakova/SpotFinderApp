import React, { useState } from "react";
import { Link } from "react-router-dom";
import messages from "../Messages";
import { useIntl } from "react-intl";
import paths from "../utilities/pathnames";
import MiniSearch from "../pages/landing-page/search-bar/mini-search-bar";

// Styles
import { Logo, Navigation, RightSection } from "./header.styles";
import { HeaderType } from "../pages/landing-page/landing-section";
import Modal from "../pages/cart-page/cart-page";

const Header: React.FunctionComponent<HeaderType> = ({ visible }) => {
  const intl = useIntl();

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
        <div>
          <Link to={paths.signIn.path}>
            {intl.formatMessage(messages.signIn)}
          </Link>
        </div>
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
