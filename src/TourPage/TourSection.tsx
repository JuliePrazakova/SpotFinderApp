//components
import Map from "../partials/Map";
import {useParams} from "react-router";
import InfoSection from "./InfoSection";

// Types
// Styles
import {Wrapper} from './TourSection.styles';
import * as React from "react";
import Data from "../Data/products.json";


let products = Data.products;


const TourSection = () => {
    const params = useParams();
    let id: number;
    if(params.id) {
        id = +params.id;
    }else {
        id = 1;
    }

        return (
            <Wrapper>
                <div className="background-cover">
                    "tady bude pozdeji search bar"
                </div>
                    <div className="title">
                        <InfoSection item={products[id]} />
                    </div>

                <Map />
            </Wrapper>
        );
}

export default TourSection;