import React, { useEffect, useState } from "react";

// Styles
import { Container, Grid, List, Segment } from "semantic-ui-react";
import axios from "axios";
import { Title } from "../admin-page.styles";

export type Question = {
  _id: number;
  fname: string;
  lname: string;
  email: string;
  message: string;
};

export type Props = {
  question: Question;
};

const QuestionComponent: React.FunctionComponent<Props> = ({ question }) => {
  return (
    <Segment>
      <Container>
        <Title>
          <p>
            {question?.fname} {question?.lname}
          </p>
          <br />
        </Title>
      </Container>

      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <List>
              <List.Item>
                <List.Content>{question?.email}</List.Content>
              </List.Item>

              <List.Item>
                <List.Content>{question?.message}</List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

const Orders: React.FunctionComponent = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  // get data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/admin/questions"
        );

        setQuestions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  });

  return (
    <>
      {questions?.map((question) => (
        <div key={question._id}>
          <QuestionComponent question={question} key={question._id} />
        </div>
      ))}
    </>
  );
};

export default Orders;
