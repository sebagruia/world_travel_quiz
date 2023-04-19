import gql from 'graphql-tag';

const typeDefs = gql`
  "Question Answer"
  type Choice {
    id: ID!
    text: String!
  }
  "Question object"
  type Question {
    id: ID!
    text: String!
    name: String!
    choices: [Choice!]!
    correctAnswer: String!
    answerDescription: String!
    backgoundImage: String!
  }
  "Queries types are here"
  type Query {
    questions: [Question!]!
    question(id: ID!): Question
  }
`;

export default typeDefs;
