import { getCountryData } from '../services/corona-tracker';

const resolvers = {
  getCountryData: (_: any, { countryCode }: any) => getCountryData(countryCode),
};

export default resolvers;
