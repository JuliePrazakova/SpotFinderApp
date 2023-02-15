//components
import Search from './Search/Search';
import QuestionBox from "./Question-part/Question-box";
import Item from "./CartItem/Item/Item";
import Map from "../partials/Map";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
// Types
// Styles
import { Wrapper, Grid } from './LandingSection.styles';
import * as React from "react";
import Data from "../Data/products.json";

export interface ITestPageProps {}


export type CartItemType = {
    id: number;
    category: string;
    smallDes1: string;
    smallDes2: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
    city: string;
    street: string;
    streetNumber: number;
    zip: number;
    country: string;
};

let products = Data.products;


const LandingSection: React.FunctionComponent<ITestPageProps> = (props) => {

        return (
            <>  <Header />
                <Wrapper>
                    <div className="background-cover">
                        <div className="title">
                            <p>Where are you going?</p>
                        </div>
                        <Search />
                    </div>

                    <div className='lower-section'>
                        <Grid >
                            {products?.map(item => (
                                <Grid key={item.id} >
                                    <Item item={item} />
                                </Grid>
                            ))}
                        </Grid>
                        <Map />
                    </div>
                    <QuestionBox />

                </Wrapper>
                <Footer/>
            </>

        );
}

export default LandingSection;