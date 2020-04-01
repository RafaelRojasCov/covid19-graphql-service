import makeCoronaTrackerRequest from '../services/corona-tracker';

const { CORONATRACKER_API_BASE_URL_V2, CORONATRACKER_API_BASE_URL_V3 } = process.env;

const getCountryData = async (countryCode: string): Promise<any> => {
  const data = await makeCoronaTrackerRequest(
    `${CORONATRACKER_API_BASE_URL_V3}/stats/worldometer/country?countryCode=${countryCode}`,
  );

  return data;
};

export default { getCountryData };
