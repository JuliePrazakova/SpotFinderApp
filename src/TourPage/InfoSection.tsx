// Types
import { CartItemType } from '../LandingPage/LandingSection';
// Styles
import { Wrapper } from './InfoSection.styles';

type Props = {
    item: CartItemType;
};

const Item: React.FC<Props> = ({ item }) => (
    <Wrapper>
            <div >
                <img src={item.image} alt={item.title} />
            </div>

            <div className='text-box'>
                <h3>{item.title}</h3>
                <p>{item.smallDes1}</p>
                <p>{item.smallDes2}</p>
                <h3>From ${item.price} per person</h3>
            </div>
    </Wrapper>
);

export default Item;
