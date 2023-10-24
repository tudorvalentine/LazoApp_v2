import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./api.config";

interface IAuthResponse {
  access_token: string;
  refresh_token: string;
}
interface ICredential {
  username: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<IAuthResponse, ICredential>({
      query: (credential) => ({
        url: "/login/",
        method: "POST",
        body: credential,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
