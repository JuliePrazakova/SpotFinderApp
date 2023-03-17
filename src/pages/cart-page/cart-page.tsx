import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import messages from "../../Messages";
import { useIntl } from "react-intl";
import { CartState } from "../../redux/reducers/cart-reducer";
import CartItem from "./cart-item";

// Styles
import { Divider } from "semantic-ui-react";
import { Button } from "../../App.styles";
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
  TotalPrice,
} from "./cart-page.styles";

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

const OrderingForm: React.FC = () => {
  const intl = useIntl();

  return (
    <Order>
      <Button>{intl.formatMessage(messages.login)}</Button>

      <Divider horizontal>{intl.formatMessage(messages.or)}</Divider>

      <SubTitle>{intl.formatMessage(messages.fillIn)}</SubTitle>
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
          <Button>{intl.formatMessage(messages.order)}</Button>
        </Group>
      </form>
    </Order>
  );
};

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose }) => {
  const intl = useIntl();

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
          {cart?.itemsList.map((item) => (
            <div key={item.tour.id}>
              <CartItem item={item} />
            </div>
          ))}

          <Divider />

          <TotalPrice>
            <p>{intl.formatMessage(messages.total)}:</p>
            <p>${cart.totalPrice}</p>
          </TotalPrice>

          <OrderingForm />
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
