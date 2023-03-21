import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import messages from "../../Messages";
import { useIntl } from "react-intl";
import { CartState } from "../../redux/reducers/cart-reducer";
import CartItem from "./cart-item";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import paths from "../../utilities/pathnames";
import ModalConfirm from "./alert";

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
  SubTitle,
  TotalPrice,
} from "./cart-page.styles";
import { useNavigate } from "react-router-dom";

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

export type CartPacked = {
  cart: CartState;
};

const OrderingForm: React.FC<CartPacked> = ({ cart }) => {
  const intl = useIntl();
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const { isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cart: cart,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("pred modalem");
    setConfirmOpen(true);

    axios
      .post("http://localhost:5001/orders", {
        cart: formData.cart,
        firstname: formData.firstname,
        lastname: formData.lastname,
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

  const handleCloseConfirm = () => {
    setConfirmOpen(false);
    navigate(paths.home.path);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Order>
      {!isAuthenticated && (
        <>
          <Button onClick={() => loginWithRedirect()}>
            {intl.formatMessage(messages.login)}
          </Button>
          <Divider horizontal>{intl.formatMessage(messages.or)}</Divider>{" "}
        </>
      )}

      <SubTitle>{intl.formatMessage(messages.fillIn)}</SubTitle>
      <form onSubmit={handleSubmit}>
        <Group>
          <Input
            placeholder="First name"
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          <Input
            placeholder="Last name"
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </Group>
        <Group>
          <Input
            placeholder="mail@gmail.com"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            placeholder="+420 123 234 345"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Group>
        <Group>
          <Button type="submit">{intl.formatMessage(messages.order)}</Button>
        </Group>
      </form>
      <ModalConfirm
        title="Order placed"
        isOpen={isConfirmOpen}
        onClose={handleCloseConfirm}
      />
    </Order>
  );
};

const ModalComponent: React.FC<ModalProps> = ({ title, isOpen, onClose }) => {
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

          <OrderingForm cart={cart} />
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalComponent;
