import countryHandler from '../handlers/country';

interface getCountryDataArgs {
  countryCode: string;
}

interface getCountryDataWithDatesArgs {
  countryCode: string;
  startDate: string;
  endDate: string;
}

interface getDataWithCoordinatesArgs {
  lat: number;
  lng: number;
}

const { getCountryData, getCountryDataWithDates, getDataWithCoordinates } = countryHandler;
const resolvers = {
  getCountryData: (_: any, { countryCode }: getCountryDataArgs) => getCountryData(countryCode),
  getCountryDataWithDates: (
    _: any,
    { countryCode, startDate, endDate }: getCountryDataWithDatesArgs,
  ) => getCountryDataWithDates(countryCode, startDate, endDate),
  getDataWithCoordinates: (_: any, { lat, lng }: getDataWithCoordinatesArgs) =>
    getDataWithCoordinates(lat, lng),
};

export default resolvers;
