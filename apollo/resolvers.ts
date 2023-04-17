const resolvers = {
  Query: {
    // Get all questions
    questions: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/questions.json`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    },
    // Get question by id
    question: async (_: any, { id }: any) => {
      console.log(id);
      const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/questions/${id}.json`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    },
  },
};

export default resolvers;
