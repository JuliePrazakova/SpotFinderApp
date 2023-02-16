// Types
import { CartItemType } from '../LandingSection';
// Styles
import { Wrapper } from './CartItem.styles';
import React from 'react';

export type ICartItemProps = {
    item: CartItemType;
}


const CartItem: React.FunctionComponent<ICartItemProps> = ({ item }) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className='information'>
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
);

export default CartItem;
