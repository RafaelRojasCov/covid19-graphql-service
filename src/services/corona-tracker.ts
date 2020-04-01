import got from 'got';

const { CORONATRACKER_API_BASE_URL_V2, CORONATRACKER_API_BASE_URL_V3 } = process.env;

const getAllCountryPrincipalData = async (): Promise<any> => {
  const { body } = await got(`${CORONATRACKER_API_BASE_URL_V2}/analytics/country`, {
    responseType: 'json',
  });

  return body;
};

const getWorldWideData = async (): Promise<any> => {
  const { body } = await got(`${CORONATRACKER_API_BASE_URL_V3}/stats/worldometer/global`, {
    responseType: 'json',
  });

  return body;
};

const getTopCountryData = async (limit: number): Promise<any> => {
  console.log({ limit });

  const { body } = await got(
    `${CORONATRACKER_API_BASE_URL_V3}/stats/worldometer/topCountry?limit=${limit}`,
    {
      responseType: 'json',
    },
  );

  console.log({ body });

  return body;
};

const getCountryData = async (countryCode: string): Promise<any> => {
  const {
    body,
  } = await got(
    `${CORONATRACKER_API_BASE_URL_V3}/stats/worldometer/country?countryCode=${countryCode}`,
    { responseType: 'json' },
  );

  return body;
};

export { getAllCountryPrincipalData, getWorldWideData, getTopCountryData, getCountryData };
