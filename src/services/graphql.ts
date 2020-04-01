import { ApolloServer } from 'apollo-server-lambda';
import typeDefs from './../schemas';
import resolvers from './../resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server.createHandler({
  cors: {
    origin: '*',
    methods: 'GET, POST',
  },
});
