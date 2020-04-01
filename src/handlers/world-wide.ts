import makeCoronaTrackerRequest from '../services/corona-tracker';

const { CORONATRACKER_API_BASE_URL_V2, CORONATRACKER_API_BASE_URL_V3 } = process.env;

const getAllCountryPrincipalData = async (): Promise<any> => {
  const data = await makeCoronaTrackerRequest(`${CORONATRACKER_API_BASE_URL_V2}/analytics/country`);

  return data;
};

const getWorldWideData = async (): Promise<any> => {
  const data = await makeCoronaTrackerRequest(
    `${CORONATRACKER_API_BASE_URL_V3}/stats/worldometer/global`,
  );

  return data;
};

const getTopCountryData = async (limit: number): Promise<any> => {
  const data = await makeCoronaTrackerRequest(
    `${CORONATRACKER_API_BASE_URL_V3}/stats/worldometer/topCountry?limit=${limit}`,
  );

  return data;
};

export default { getAllCountryPrincipalData, getWorldWideData, getTopCountryData };
