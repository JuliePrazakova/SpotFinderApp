import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import paths from "../../../utilities/pathnames";

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

const AddTourModal: React.FC<ModalProps> = ({ title, isOpen, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    _id: "",
    company: "",
    companyId: "",
    name: "",
    country: "",
    city: "",
    street: "",
    zip: "",
    descShort: "",
    descLong: "",
    ticketPrice: 0,
    image: "",
    duration: "",
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
      .post("http://localhost:5001/adventures/tour", {
        _id: formData._id,
        company: formData.company,
        companyId: formData.companyId,
        name: formData.name,
        country: formData.country,
        city: formData.city,
        street: formData.street,
        zip: formData.zip,
        descShort: formData.descShort,
        descLong: formData.descLong,
        ticketPrice: formData.ticketPrice,
        image: formData.image,
        duration: formData.duration,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate(paths.admin.path);
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
                onChange={handleChange}
                label="Name"
              />
              <Form.Input
                type="string"
                name="company"
                onChange={handleChange}
                label="Company"
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
                type="number"
                name="ticketPrice"
                onChange={handleChange}
                label="Ticket price"
              />
              <Form.Input
                type="string"
                name="duration"
                onChange={handleChange}
                label="Duration"
              />
            </Form.Group>
            <Form.Field></Form.Field>
            <Button type="submit">Add tour</Button>
          </Form>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default AddTourModal;
