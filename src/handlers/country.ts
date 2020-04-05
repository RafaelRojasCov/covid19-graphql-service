import makeCoronaTrackerRequest from '../services/corona-tracker';
import countryCoordinates from '../utils/country-coordinates';

const { CORONATRACKER_API_BASE_URL_V3 } = process.env;

const getCountryData = async (countryCode: string): Promise<any> => {
  const data = await makeCoronaTrackerRequest(
    `${CORONATRACKER_API_BASE_URL_V3}/stats/worldometer/country?countryCode=${countryCode}`,
  );

  return data;
};

const getCountryDataWithDates = async (
  countryCode: string,
  startDate: string,
  endDate: string,
): Promise<any> => {
  if (
    !startDate.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/y) ||
    !endDate.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/y)
  ) {
    throw new Error('The date format should be YYYY-MM-DD');
  }

  const queryString = `?countryCode=${countryCode}&startDate=${startDate}&endDate=${endDate}`;
  console.log(`${CORONATRACKER_API_BASE_URL_V3}/analytics/trend/country${queryString}`);

  const data: any = await makeCoronaTrackerRequest(
    `${CORONATRACKER_API_BASE_URL_V3}/analytics/trend/country${queryString}`,
  );

  const formattedData = data.map((countryData: any) => {
    const {
      country_code,
      country,
      total_confirmed,
      total_deaths,
      total_recovered,
      last_updated,
    } = countryData;

    return {
      countryCode: country_code,
      country,
      totalConfirmed: total_confirmed,
      totalDeaths: total_deaths,
      totalRecovered: total_recovered,
      lastUpdated: last_updated,
    };
  });

  return formattedData;
};

const getDataWithCoordinates = async (lat: number, lng: number): Promise<any> => {
  const countryData = await countryCoordinates.find((country: any) => {
    return country.lat === lat && country.lng === lng;
  });

  const data = await getCountryData(countryData.countryCode);

  return data;
};

export default { getCountryData, getCountryDataWithDates, getDataWithCoordinates };
