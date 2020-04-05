import countryHandler from '../handlers/country';

const { getCountryData, getDataWithCoordinates } = countryHandler;
const resolvers = {
  getCountryData: (_: any, { countryCode }: any) => getCountryData(countryCode),
  getDataWithCoordinates: (_: any, { lat, lng }: any) => getDataWithCoordinates(lat, lng),
};

export default resolvers;
