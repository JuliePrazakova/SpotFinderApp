//components
import Header from "../partials/Header";
import Footer from "../partials/Footer";
// Types
// Styles
import { Wrapper, InstructionSection } from "./AdventuresPage.styles";
import * as React from "react";

export type ITestPageProps = Record<string, unknown>;

// export type CategoryItemType = {
//   id: number;
//   name: string;
//   description: string;
// };

const Instruction = () => (
  <InstructionSection>
    <div className="info-section">
      <div>How to reserve a tour?</div>
      <section>
        <div>
          <span className="number">1</span>
          Choose a tour you want
        </div>
        <div>
          <span className="number">2</span>
          Pick a date and time of your tour
        </div>
      </section>
      <section>
        <span>3</span>
        <div>Set amount of people</div>
        <span>4</span>
        <div>Click order</div>
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
            <p>Explore the world with SpotFinder</p>
            <div>Choose the best activities for your trip</div>
          </div>
        </div>
        <Instruction />
        <div className="middle-section">
          <div>Categories</div>

          {/* <Grid>
            {categories?.map((category) => (
              <div key={category.id}>
                <Categories category={category} />
              </div>
            ))}
          </Grid> */}
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default AdventuresPage;
