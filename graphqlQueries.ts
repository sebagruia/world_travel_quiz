import gql from 'graphql-tag';

export const QUESTIONS = gql`
  query GetQuestions {
    questions {
      text
      id
      name
      correctAnswer
      choices {
        text
        id
      }
      backgoundImage
      answerDescription
    }
  }
`;
export const QUESTION = gql`
  query GetQuestion($id: ID!) {
    question(id: $id) {
      text
      id
      name
      correctAnswer
      choices {
        text
        id
      }
      backgoundImage
      answerDescription
    }
  }
`;
