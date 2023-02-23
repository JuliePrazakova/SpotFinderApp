//components
import Search from "./Search/Search";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Categories from "./Categories/Categories";

// Styles
import {
  Wrapper,
  Grid,
  ContactSection,
  BackgroundCover,
  Title,
  MiddleSection,
  Box,
  ContactButton,
} from "./LandingSection.styles";
import * as React from "react";
import Data from "../Data/categories.json";

// Types
export type CategoryItemType = {
  id: number;
  name: string;
  description: string;
};
const categories = Data.categories;

const Contact = () => (
  <ContactSection>
    <Box>
      <div>Need help with planning your trip? Let us know!</div>
      <ContactButton>
        <a href="/contact">Contact us</a>
      </ContactButton>
    </Box>
  </ContactSection>
);
const LandingSection: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <BackgroundCover>
          <Title>
            <p>Where are you going?</p>
          </Title>
          <Search />
        </BackgroundCover>

        <MiddleSection>
          <div>Categories</div>

          <Grid>
            {categories?.map((category) => (
              <div key={category.id}>
                <Categories category={category} />
              </div>
            ))}
          </Grid>
        </MiddleSection>

        <Contact />
      </Wrapper>
      <Footer />
    </>
  );
};

export default LandingSection;
