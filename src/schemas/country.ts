import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type CountryDataResponse {
    countryCode: String
    country: String
    lat: Int
    lng: Int
    totalConfirmed: Int
    totalDeaths: Int
    totalRecovered: Int
    dailyConfirmed: Int
    dailyDeaths: Int
    activeCases: Int
    totalCritical: Int
    totalConfirmedPerMillionPopulation: Int
    FR: String
    PR: String
    lastUpdated: String
  }
`;

export default typeDefs;
