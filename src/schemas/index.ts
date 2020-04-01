import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type WorldWideDataResponse {
    totalConfirmed: Int
    totalDeaths: Int
    totalRecovered: Int
    totalNewCases: Int
    totalNewDeaths: Int
    totalActiveCases: Int
    totalCasesPerMillionPop: Int
    created: String
  }

  type CountryPrincipalData {
    countryCode: String
    countryName: String
    lat: Int
    lng: Int
    confirmed: Int
    deaths: Int
    recovered: Int
    dateAsOf: String
  }

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

  type Query {
    getWorldwideData: WorldWideDataResponse
    getAllCountryPrincipalData: [CountryPrincipalData]
    getTopCountryData(limit: Int!): [CountryDataResponse]
    getCountryData(countryCode: String!): [CountryDataResponse]
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [typeDefs];
