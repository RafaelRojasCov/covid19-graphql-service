import { gql } from 'apollo-server-lambda';
import countrySchema from './country';
import worldWideSchema from './world-wide';

const typeDefs = gql`
  type Query {
    getWorldwideData: WorldWideDataResponse
    getAllCountryPrincipalData: [CountryPrincipalData]
    getTopCountryData(limit: Int!): [CountryDataResponse]
    getCountryData(countryCode: String!): [CountryDataResponse]
    getDataWithCoordinates(lat: Float!, lng: Float!): [CountryDataResponse]
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [typeDefs, countrySchema, worldWideSchema];
