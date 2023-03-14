import React from "react";
import { useSelector } from "react-redux";
import { Divider } from "semantic-ui-react";
import { Button } from "../../App.styles";

import { CartState } from "../../redux/reducers/cart-reducer";
import CartItem from "./cart-item";
import {
  ModalBody,
  ModalCloseButton,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  Order,
  Group,
  Input,
  Textarea,
  SubTitle,
} from "./cart-page.styles";

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

const OrderingForm: React.FC = () => {
  return (
    <Order>
      <Button>Log in</Button>
      <Divider horizontal>Or</Divider>
      <SubTitle>Fill in</SubTitle>
      <form>
        <Group>
          <Input placeholder="First name" id="form-input-first-name" />
          <Input placeholder="Last name" />
        </Group>
        <Group>
          <Input placeholder="mail@gmail.com" />
          <Input placeholder="+420 123 234 345" />
        </Group>
        <Group>
          <Textarea placeholder="Message" />
        </Group>
        <Group>
          <Button>Add to cart</Button>
        </Group>
      </form>
    </Order>
  );
};

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose }) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const cart = useSelector((state: { cart: CartState }) => state.cart);

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  React.useEffect(() => {
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
          {cart?.itemsList.map((item) => (
            <div key={item.tour.id}>
              <CartItem item={item} />
            </div>
          ))}

          <Divider />

          <OrderingForm />
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
