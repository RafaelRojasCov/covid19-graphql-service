import makeCoronaTrackerRequest from '../services/corona-tracker';
import countryCoordinates from '../utils/country-coordinates';

const { CORONATRACKER_API_BASE_URL_V3 } = process.env;

const getCountryData = async (countryCode: string): Promise<any> => {
  const data = await makeCoronaTrackerRequest(
    `${CORONATRACKER_API_BASE_URL_V3}/stats/worldometer/country?countryCode=${countryCode}`,
  );

  return data;
};

const getDataWithCoordinates = async (lat: number, lng: number): Promise<any> => {
  const countryData = await countryCoordinates.find((country: any) => {
    return country.lat === lat && country.lng === lng;
  });

  const data = await getCountryData(countryData.countryCode);

  console.log({ data });

  return data;
};

export default { getCountryData, getDataWithCoordinates };
