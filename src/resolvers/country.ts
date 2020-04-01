import countryHandler from '../handlers/country';

const { getCountryData } = countryHandler;
const resolvers = {
  getCountryData: (_: any, { countryCode }: any) => getCountryData(countryCode),
};

export default resolvers;
