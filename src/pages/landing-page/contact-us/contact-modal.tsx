import React, { useEffect, useState } from "react";

// Styles
import {
  ModalBody,
  ModalCloseButton,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "../../cart-page/cart-page.styles";
import { Form, Message } from "semantic-ui-react";
import axios from "axios";

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
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      formData.fname &&
      formData.lname &&
      formData.email &&
      formData.message
    ) {
      axios
        .post("http://localhost:5001/users/question", {
          fname: formData.fname,
          lname: formData.lname,
          email: formData.email,
          message: formData.message,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setShowSuccess(false);
          setShowError(true);
        });
      setShowError(false);
      setShowSuccess(true);
    } else {
      setShowSuccess(false);
      setShowError(true);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

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
          <Form onSubmit={handleSubmit} error={showError} success={showSuccess}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First name"
                placeholder="First name"
                name="fname"
                onChange={handleChange}
              />
              <Form.Input
                fluid
                label="Last name"
                placeholder="Last name"
                name="lname"
                onChange={handleChange}
              />
              <Form.Input
                fluid
                label="Email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.TextArea
              label="Message"
              placeholder="Don't hesitate to contact us!"
              name="message"
              onChange={handleChangeTextArea}
            />
            <Form.Button>Submit</Form.Button>

            <Message
              error
              header="Sending the message failed!"
              content="Please fill all fields so we could get back to you with answer!"
            />

            <Message
              success
              header="Message was send!"
              content="We will get back to you as soon as possible"
            />
          </Form>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
