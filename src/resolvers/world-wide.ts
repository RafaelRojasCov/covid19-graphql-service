import worldWideHandler from '../handlers/world-wide';

const { getAllCountryPrincipalData, getTopCountryData, getWorldWideData } = worldWideHandler;
const resolvers = {
  getWorldwideData: () => getWorldWideData(),
  getTopCountryData: (_: any, { limit }: any) => getTopCountryData(limit),
  getAllCountryPrincipalData: () => getAllCountryPrincipalData(),
};

export default resolvers;
