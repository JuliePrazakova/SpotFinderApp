import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../../partials/header";
import Footer from "../../partials/footer";
import { Menu, MenuItemProps, Image, Divider } from "semantic-ui-react";
import {
  Wrapper,
  ProfileSection,
  FlexBox,
  RightSection,
  Title,
} from "./login-components.styles";
import { BackgroundCover } from "../adventures-page/adventures-page.styles";
// import Tour from "../adventures-page/tour/tour";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [activeItem, setActiveItem] = useState<string>("home");

  const handleItemClick = (e: React.MouseEvent, { name }: MenuItemProps) =>
    setActiveItem(name as string);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <Header visible={false} />

      {isAuthenticated ? (
        <>
          <BackgroundCover></BackgroundCover>
          <FlexBox>
            <Wrapper>
              <ProfileSection>
                <Image
                  size="tiny"
                  src={user?.picture}
                  alt={user?.name}
                  avatar
                />
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
              </ProfileSection>

              <Divider />

              <Menu pointing secondary vertical>
                <Menu.Item
                  name="orders"
                  active={activeItem === "orders"}
                  onClick={handleItemClick}
                />
                <Menu.Item
                  name="roadtrips"
                  active={activeItem === "roadtrips"}
                  onClick={handleItemClick}
                />
              </Menu>
            </Wrapper>

            {activeItem === "orders" ? (
              <RightSection>
                <Title>Orders</Title>
                {/* Vypis tour fetchnutych z DB
                <Grid>
                  {tours?.map((tours) => (
                    <div key={tours.id}>
                      <Tour tour={tours} btn={true} />
                      <Divider section />
                    </div>
                  ))}
                </Grid> */}
              </RightSection>
            ) : (
              <RightSection>
                <Title>RoadTrips</Title>
                {/* <Grid>
                  {tours?.map((tours) => (
                    <div key={tours.id}>
                      <Tour tour={tours} btn={true} />
                      <Divider section />
                    </div>
                  ))}
                </Grid> */}
              </RightSection>
            )}
          </FlexBox>
        </>
      ) : null}
      <Footer />
    </>
  );
};

export default Profile;
