import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../../partials/header";
import Footer from "../../partials/footer";
import messages from "../../Messages";
import { useIntl } from "react-intl";

import Orders from "./my-orders";

// Styles
import { Image, Divider, Grid } from "semantic-ui-react";
import { Block, Flex } from "../admin-page//admin-page.styles";

import {
  Wrapper,
  ProfileSection,
  FlexBox,
  RightSection,
} from "./login-components.styles";
import { BackgroundCover } from "../adventures-page/adventures-page.styles";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const intl = useIntl();

  if (isLoading) {
    return <div>{intl.formatMessage(messages.loading)}</div>;
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
            </Wrapper>

            <RightSection>
              <Grid>
                <Block>
                  <Flex>
                    <Orders user={user.email} />
                  </Flex>
                </Block>
              </Grid>
            </RightSection>
          </FlexBox>
        </>
      ) : null}
      <Footer />
    </>
  );
};

export default Profile;
