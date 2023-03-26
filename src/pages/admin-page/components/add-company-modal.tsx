import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";

// Styles
import {
  ModalBody,
  ModalCloseButton,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "../../cart-page/cart-page.styles";

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

const AddCompanyModal: React.FC<ModalProps> = ({ title, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    country: "",
    city: "",
    street: "",
    zip: "",
    descShort: "",
    descLong: "",
    image1: "",
    image2: "",
    image3: "",
    email: "",
    phone: "",
  });

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post("http://localhost:5001/adventures/company", {
        _id: formData._id,
        name: formData.name,
        country: formData.country,
        city: formData.city,
        street: formData.street,
        zip: formData.zip,
        descShort: formData.descShort,
        descLong: formData.descLong,
        image1: formData.image1,
        image2: formData.image2,
        image3: formData.image3,
        email: formData.email,
        phone: formData.phone,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Input
                type="text"
                name="name"
                label="Name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                type="string"
                name="country"
                onChange={handleChange}
                label="Country"
              />
              <Form.Input
                type="string"
                name="city"
                onChange={handleChange}
                label="City"
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                type="string"
                name="street"
                onChange={handleChange}
                label="Street"
              />
              <Form.Input
                type="string"
                name="zip"
                onChange={handleChange}
                label="Zip"
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                type="string"
                name="descShort"
                onChange={handleChange}
                label="Short description"
              />
              <Form.Input
                type="string"
                name="descLong"
                onChange={handleChange}
                label="Long description"
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                type="string"
                name="email"
                onChange={handleChange}
                label="Email"
              />
              <Form.Input
                type="string"
                name="phone"
                onChange={handleChange}
                label="Phone number"
              />
            </Form.Group>
            <Form.Field></Form.Field>
            <Button type="submit">Add company</Button>
          </Form>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default AddCompanyModal;
