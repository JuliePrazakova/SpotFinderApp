import React, { useEffect, useState } from "react";
import messages from "../../../Messages";

// Styles
import { Title } from "../admin-page.styles";
import { Container, Divider, Grid, List, Segment } from "semantic-ui-react";
import { Button } from "../../../App.styles";
import { CompanyListProps, CompanyType } from "../../../utilities/types";
import axios from "axios";
import { useIntl } from "react-intl";

const CompanyComponent: React.FunctionComponent<CompanyListProps> = ({
  company,
  onCompanyClick,
}) => {
  const intl = useIntl();

  return (
    <Segment>
      <Container>
        <Title>
          <p>{company?.name}</p>
          <Button onClick={() => company && onCompanyClick(company)}>
            View activities
          </Button>
        </Title>
      </Container>
      <Divider />
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <List>
              <List.Item>
                <List.Content>
                  <List.Icon name="mail" />

                  {company?.email}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Icon name="phone" />
                  {company?.phone}
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <List>
              <List.Item>
                <List.Content>
                  <b>{intl.formatMessage(messages.street)}: </b>
                  {company?.street}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <b>{intl.formatMessage(messages.zip)}: </b> {company?.zip}
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <List>
              <List.Item>
                <List.Content>
                  <b>{intl.formatMessage(messages.country)}:</b>{" "}
                  {company?.country}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <b>{intl.formatMessage(messages.city)}:</b> {company?.city}
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

const Companies: React.FunctionComponent<CompanyListProps> = ({
  onCompanyClick,
}) => {
  const [companies, setCompanies] = useState<CompanyType[]>([]);

  useEffect(() => {
    const API_URL = "http://localhost:5001/adventures/companies";

    axios
      .get(API_URL)
      .then((response) => {
        if (Array.isArray(response.data)) {
          const companyItems: CompanyType[] = response.data.map(
            (company: CompanyType) => ({
              _id: company._id,
              name: company.name,
              country: company.country,
              city: company.city,
              street: company.street,
              zip: company.zip,
              descShort: company.descShort,
              descLong: company.descLong,
              image1: company.image1,
              image2: company.image2,
              image3: company.image3,
              email: company.email,
              phone: company.phone,
            })
          );

          setCompanies(companyItems);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {companies?.map((company) => (
        <div key={company._id}>
          <CompanyComponent
            company={company}
            key={company._id}
            onCompanyClick={onCompanyClick}
          />
        </div>
      ))}
    </>
  );
};

export default Companies;
