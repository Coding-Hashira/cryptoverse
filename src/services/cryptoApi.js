import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoHeaders = {
  "x-rapidapi-host": "coingecko.p.rapidapi.com",
  "x-rapidapi-key": "a7ae62c9e2msh4f28d4dedec6f59p166b0ejsn6dba292f0abd",
};

const baseUrl = "https://coingecko.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins/list"),
    }),
  }),
});

export const { useGetCryptoQuery } = cryptoApi;
