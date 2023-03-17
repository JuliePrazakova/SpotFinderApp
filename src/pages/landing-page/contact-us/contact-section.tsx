import React, { useState } from "react";
import { useIntl } from "react-intl";
import messages from "../../../Messages";
import Modal from "./contact-modal";

// Styles
import { Box, ContactButton, ContactSection } from "./contact-section.styles";

const Contact = () => {
  const intl = useIntl();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <ContactSection>
      <Box>
        <div>{intl.formatMessage(messages.contactTitle)}</div>
        <ContactButton>
          <button onClick={handleOpenModal}>
            {intl.formatMessage(messages.contactUs)}
          </button>
        </ContactButton>
      </Box>
      <Modal
        title="Contact us"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </ContactSection>
  );
};

export default Contact;
