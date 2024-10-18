import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {

  'x-rapidapi-key': '29fc82599fmshd7e1b59dce3524bp14ccd4jsn241c47ddf3e9',
  'x-rapidapi-host': 'news-api14.p.rapidapi.com',
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://news-api14.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/v2/search/articles?query=${newsCategory}&language=en&limit=${count}`)
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;