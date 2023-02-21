//components
import Header from "../partials/Header";
import Footer from "../partials/Footer";
// Types
// Styles
import { Wrapper, InstructionSection, Grid } from "./AdventuresPage.styles";
import * as React from "react";
import Tour from "./Tour/Tour";
import Data from "../Data/products.json";
import { Input } from "semantic-ui-react";

export type ITestPageProps = Record<string, unknown>;

export type TourItem = {
  id: number;
  name: string;
  country: string;
  city: string;
  street: string;
  zip: string;
  desc_short: string;
  desc_long: string;
  ticket_price: number;
  image: string;
};
// "phone": 358408253756,
// "category": "reindeers",
// "image": "/images/sieriporo.jpeg",

const products = Data.products;

const Instruction = () => (
  <InstructionSection>
    <div className="info-section">
      <div>How to reserve a tour?</div>
      <section>
        <div>
          <div className="number">1</div>
          Choose a tour you want
        </div>
        <div>
          <div className="number">2</div>
          Pick a date and time of your tour
        </div>
      </section>
      <section>
        <div>
          <div className="number">3</div>
          Set amount of people
        </div>
        <div>
          <div className="number">4</div>
          Click order
        </div>
      </section>
    </div>
  </InstructionSection>
);
const AdventuresPage: React.FunctionComponent<ITestPageProps> = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="background-cover">
          <div className="title">
            <p>
              Explore
              <br />
              the world <br />
              with SpotFinder
            </p>
            <div>Choose the best activities for your trip</div>
          </div>
        </div>
        <Instruction />

        <div className="middle-section">
          <div>Our Tours</div>
          <Input icon="search" placeholder="Search..." />

          <Grid>
            {products?.map((products) => (
              <div key={products.id}>
                <Tour tour={products} />
              </div>
            ))}
          </Grid>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default AdventuresPage;
