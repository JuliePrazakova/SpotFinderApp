import React, { useEffect, useState } from "react";
import messages from "../../Messages";
import { useIntl } from "react-intl";
import Search from "./search-bar/search-bar";
import Header from "../../partials/header";
import Footer from "../../partials/footer";
import Categories from "./categories/categories";
import Contact from "./contact-us/contact-section";
import axios from "axios";

// Styles
import {
  Wrapper,
  Grid,
  BackgroundCover,
  Title,
  MiddleSection,
} from "./landing-section.styles";
import { CategoryItemType } from "../../utilities/types";

const LandingSection: React.FunctionComponent = () => {
  const intl = useIntl();
  const [categories, setCategories] = useState<CategoryItemType[]>([]);

  useEffect(() => {
    const API_URL = "http://localhost:5001";

    axios
      .get(API_URL)
      .then((response) => {
        if (Array.isArray(response.data)) {
          const categoryItems: CategoryItemType[] = response.data.map(
            (item: CategoryItemType) => ({
              id: item.id,
              name: item.name,
              description: item.description,
            })
          );

          setCategories(categoryItems);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
                <Categories category={category} key={category.id} />
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
