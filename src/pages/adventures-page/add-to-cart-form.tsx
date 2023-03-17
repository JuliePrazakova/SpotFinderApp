import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cart-reducer";
import Data from "../../data/tours.json";

// Styles
import { Button } from "../../App.styles";
import { OrderForm } from "./adventure.styles";
import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";

export type TourName = {
  name: string;
  id: string;
};

const AddToCartForm: React.FunctionComponent<TourName> = ({ name, id }) => {
  const tours = Data.tours;

  const tour = tours.find((tours) => tours.id === id);

  const [formData, setFormData] = useState({
    tour: {
      id: "",
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
    },
    quantity: 0,
    date: 0,
    time: 0,
  });

  useEffect(() => {
    setFormData({ tour: tour || formData.tour, quantity: 0, date: 0, time: 0 });
  }, [name]);

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addToCart(formData));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <OrderForm>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input
            type="text"
            name="tourName"
            value={name}
            label="Tour"
            placeholder="Long ride"
            id="form-input-first-name"
          />
          <Form.Input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            label="People"
            placeholder="1"
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            label="Date"
            placeholder="03. 03. 2023"
          />
          <Form.Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            label="Time"
            placeholder="1"
          />
        </Form.Group>

        <Form.Field></Form.Field>
        <Button type="submit">Add to cart</Button>
      </Form>
    </OrderForm>
  );
};

export default AddToCartForm;
