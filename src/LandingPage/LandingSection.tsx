//components
import Search from "./Search/Search";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Categories from "./Categories/Categories";
// Types
// Styles
import { Wrapper, Grid, ContactSection } from "./LandingSection.styles";
import * as React from "react";
import Data from "../Data/categories.json";

export type ITestPageProps = Record<string, unknown>;

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
export type CategoryItemType = {
  id: number;
  name: string;
  description: string;
};
const categories = Data.categories;

const Contact = () => (
  <ContactSection>
    <div className="help-section">
      <div>Need help with planning your trip? Let us know!</div>
      <div className="btn">
        <a href="/contact">Contact us</a>
      </div>
    </div>
  </ContactSection>
);
const LandingSection: React.FunctionComponent<ITestPageProps> = () => {
  return (
    <>
      {" "}
      <Header />
      <Wrapper>
        <div className="background-cover">
          <div className="title">
            <p>Where are you going?</p>
          </div>
          <Search />
        </div>

        <div className="middle-section">
          <div>Categories</div>

          <Grid>
            {categories?.map((category) => (
              <div key={category.id}>
                <Categories category={category} />
              </div>
            ))}
          </Grid>
        </div>

        <Contact />
      </Wrapper>
      <Footer />
    </>
  );
};

export default LandingSection;
