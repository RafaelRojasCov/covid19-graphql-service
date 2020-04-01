import {
  getWorldWideData,
  getTopCountryData,
  getAllCountryPrincipalData,
} from '../services/corona-tracker';

const resolvers = {
  getWorldwideData: () => getWorldWideData(),
  getTopCountryData: (_: any, { limit }: any) => getTopCountryData(limit),
  getAllCountryPrincipalData: () => getAllCountryPrincipalData(),
};

export default resolvers;
