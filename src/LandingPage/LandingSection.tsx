//components
import Search from './Search/Search';
import QuestionBox from "./Question-part/Question-box";
import Item from "./CartItem/Item/Item";

import Header from "../partials/Header";
import Footer from "../partials/Footer";
// Types
// Styles
import { Wrapper, Grid } from './LandingSection.styles';
import * as React from "react";
import {useQuery} from "react-query";
import Data from "../Data/products.json";
import Map from "./map.png";

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
};

let products = Data.products;
const getProducts = async (): Promise<CartItemType[]> => products;


const LandingSection = () => {
    const { data } = useQuery<CartItemType[]>(
        'products',
        getProducts
    );

        return (
            <>  <Header />
                <Wrapper>
                    <div className="background-cover">
                        <div className="title">
                            <p>Planning a trip?</p>
                        </div>
                        <Search />
                    </div>

                    <div className='lower-section'>
                        <Grid >
                            {data?.map(item => (
                                <Grid key={item.id} >
                                    <Item item={item} />
                                </Grid>
                            ))}
                        </Grid>
                        <div className='map'>
                            <img className="img" src={Map} alt="Map" />
                        </div>
                    </div>
                    <QuestionBox />

                </Wrapper>
                <Footer/>
            </>

        );
}

export default LandingSection;