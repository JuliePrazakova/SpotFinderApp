// Types
import { CartItemType } from '../../LandingPage/LandingSection';
// Styles
import { Wrapper } from './PhotoSection.styles';
import React from "react";

export interface IPhotoSectionProps {
    item: CartItemType;
}

const PhotoSection: React.FunctionComponent<IPhotoSectionProps> = ({ item }) => (
    <Wrapper>
        <div >
            <img src={item.image} alt={item.title} />
        </div>
    </Wrapper>
);

export default PhotoSection;
