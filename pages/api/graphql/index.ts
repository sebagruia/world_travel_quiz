import schema from '@/apollo/schema';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

const server = new ApolloServer({
  schema,
});

export default startServerAndCreateNextHandler(server);
