import worldWideResolvers from './world-wide';
import countryResolvers from './country';

const resolvers = {
  Query: {
    ...worldWideResolvers,
    ...countryResolvers,
  },
};

export default resolvers;
