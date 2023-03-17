import React, { useState } from "react";
import { useIntl } from "react-intl";
import { Box, ContactButton, ContactSection } from "./contact-section.styles";
import messages from "../../../Messages";
import Modal from "./contact-modal";

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
        <div>Need help with planning your trip? Let us know!</div>
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
