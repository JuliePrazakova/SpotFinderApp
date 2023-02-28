import * as React from "react";
import messages from "../../Messages";
import { useIntl } from "react-intl";
import Data from "../../data/categories.json";
import Search from "./search-bar/search-bar";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import Categories from "./categories/categories";

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
} from "./landing-section.styles";

export type CategoryItemType = {
  id: number;
  name: string;
  description: string;
};
const categories = Data.categories;

const Contact = () => {
  const intl = useIntl();

  return (
    <ContactSection>
      <Box>
        <div>Need help with planning your trip? Let us know!</div>
        <ContactButton>
          <a href="/contact">{intl.formatMessage(messages.contactUs)}</a>
        </ContactButton>
      </Box>
    </ContactSection>
  );
};

const LandingSection: React.FunctionComponent = () => {
  const intl = useIntl();

  return (
    <>
      <Header />
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
