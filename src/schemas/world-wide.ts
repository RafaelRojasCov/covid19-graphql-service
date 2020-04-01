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
`;

export default typeDefs;
