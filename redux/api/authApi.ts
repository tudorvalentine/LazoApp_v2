import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.8.119:8000/lazoapi" }),
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
