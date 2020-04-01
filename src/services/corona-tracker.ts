import got from 'got';

const makeRequest = async (url: string) => {
  const { body } = await got(url, { responseType: 'json' });

  return body;
};

export default makeRequest;
