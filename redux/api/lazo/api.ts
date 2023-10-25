import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";
import { BASE_URL } from "../api.config";

export const lazoApi = createApi({
  reducerPath: "lazoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const access_token = (getState() as RootState).auth.accessToken;

      headers.set("Content-Type", "application/json");

      if (access_token) {
        headers.set("Authorization", `Bearer ${access_token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
