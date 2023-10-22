import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface IBrand {
  brand_id: number;
  brand_name: string;
}

export const lazoApi = createApi({
  reducerPath: "lazoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.8.119:8000/lazoapi/",
    prepareHeaders: (headers, { getState }) => {
      const access_token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3OTY5MDAwLCJpYXQiOjE2OTc5NjE4MDAsImp0aSI6IjM4NzhkYTczYzFhNDQzMWU5NTM2OTY2MzhiMTM0MzAxIiwidXNlcl9pZCI6MX0.XoU6g-JEv69Ln1w6gwL3USrLrU28gn0FeCPItBTzMCI";
      headers.set("Content-Type", "application/json");

      if (access_token) {
        headers.set("Authorization", `Bearer ${access_token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBrands: builder.query<IBrand[], void>({
      query: () => "brand",
    }),
  }),
});

export const { useGetBrandsQuery } = lazoApi;
