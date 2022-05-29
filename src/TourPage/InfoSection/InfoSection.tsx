// Types
import { CartItemType } from '../../LandingPage/LandingSection';
// Styles
import { Wrapper, PriceTag, Description, Box } from './InfoSection.styles';
import React from "react";

export interface IInfoSectionProps {
    item: CartItemType;
}

const InfoSection: React.FunctionComponent<IInfoSectionProps> = ({ item }) => (
    <Box>
    <Wrapper>
            <div className='text-box'>
                <span className='title'>{item.title}</span>
                <div className='first-child'>
                   <i className="genderless icon"></i>
                   <p>{item.smallDes1}</p>
                </div>
                <div>
                   <i className="genderless icon"></i>
                   <p>{item.smallDes2}</p>
                </div>
                <div className='address'>
                    <i className="genderless icon"></i>
                    <div>
                        <div>
                            <p>{item.streetNumber}{item.city}</p>
                        </div>
                        <div>
                            <p>{item.zip}, {item.country}</p>
                        </div>
                    </div>
                </div>
            </div>
    </Wrapper>
        <PriceTag>
            From <b>${item.price}</b>  per person
        </PriceTag>
        <Description>
            Cras ut ligula ac nisl cursus tincidunt. Mauris convallis interdum augue, eu ullamcorper tortor luctus a. Fusce a augue condimentum, ullamcorper elit at.Cras ut ligula ac nisl cursus tincidunt. Mauris convallis interdum augue, eu ullamcorper tortor luctus a. Fusce a augue condimentum, ullamcorper elit at.
        </Description>
</Box>
);

export default InfoSection;
