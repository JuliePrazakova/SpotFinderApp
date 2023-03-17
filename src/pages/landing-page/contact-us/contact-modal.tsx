import React, { useEffect } from "react";

// Styles
import {
  ModalBody,
  ModalCloseButton,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "../../cart-page/cart-page.styles";
import { Form } from "semantic-ui-react";

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose }) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey, false);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey, false);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseButton onClick={onClose}>
            <i className="close icon"></i>
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Form>
            <Form.Group widths="equal">
              <Form.Input fluid label="First name" placeholder="First name" />
              <Form.Input fluid label="Last name" placeholder="Last name" />
              <Form.Input fluid label="Email" placeholder="Email" />
            </Form.Group>
            <Form.TextArea
              label="Message"
              name="text"
              placeholder="Don't hesitate to contact us!"
            />
            <Form.Button>Submit</Form.Button>
          </Form>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
