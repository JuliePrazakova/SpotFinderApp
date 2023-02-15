//components
import Map from '../partials/Map'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import {useParams} from 'react-router'
import InfoSection from './InfoSection/InfoSection'
import MiddleSection from './MiddleSection/MiddleSection'
import PhotoSection from './PhotoSection/PhotoSection'
import OrderSection from './OrderSection/OrderSection'

// Types
// Styles
import {Wrapper} from './TourSection.styles'
import * as React from 'react'
import Data from '../Data/products.json'

const products = Data.products

export type ITourProps = Record<string, unknown>

export type TourType = {
    id: number;
    category: string;
    smallDes1: string;
    description: string;
    image: string;
    price: number;
    title: string;
    included1: string;
    included2: string;
    included3: string;
};

const TourSection: React.FunctionComponent<ITourProps> = () => {
    const params = useParams()
    let id: number
    if(params.id) {
        id = +params.id - 1
    }else {
        id = 1
    }

        return (
            <Wrapper>
                <Header />
                <div className="background-cover"></div>

                    <div className="first-part">
                        <InfoSection item={products[id]} />
                        <Map />
                    </div>
                <MiddleSection />
                <PhotoSection item={products[id]} />

                <OrderSection />

                <Footer />
            </Wrapper>
        )
}

export default TourSection