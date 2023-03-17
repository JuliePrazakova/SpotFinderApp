import React from "react";
import messages from "../../Messages";
import { useIntl } from "react-intl";
import Data from "../../data/categories.json";
import Search from "./search-bar/search-bar";
import Header from "../../partials/header";
import Footer from "../../partials/footer";
import Categories from "./categories/categories";

// Styles
import {
  Wrapper,
  Grid,
  BackgroundCover,
  Title,
  MiddleSection,
} from "./landing-section.styles";
import Contact from "./contact-us/contact-section";

export type CategoryItemType = {
  id: number;
  name: string;
  description: string;
};

export type HeaderType = {
  visible: boolean;
};

const categories = Data.categories;

const LandingSection: React.FunctionComponent = () => {
  const intl = useIntl();

  return (
    <>
      <Header visible={false} />
      <Wrapper>
        <BackgroundCover>
          <Title>
            <p>{intl.formatMessage(messages.landingPageTitle)}</p>
          </Title>
          <Search />
        </BackgroundCover>

        <MiddleSection>
          <div>{intl.formatMessage(messages.categories)}</div>

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
