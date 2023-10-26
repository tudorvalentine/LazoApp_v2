import { api } from "./api";

interface IAuthResponse {
  access_token: string;
  refresh_token: string;
}
interface ICredential {
  username: string;
  password: string;
}

interface IResponseToken {
  detail?: string;
  code?: string;
  access?: string | null;
}

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IAuthResponse, ICredential>({
      query: (credential) => ({
        url: "/login/",
        method: "POST",
        body: credential,
      }),
    }),
    tokenVerify: builder.mutation<IResponseToken, { token: string }>({
      query: (t) => ({
        url: "/token/verify/",
        method: "POST",
        body: t,
      }),
    }),
    getNewAccessToken: builder.mutation<IResponseToken, { refresh: string }>({
      query: (token_r) => ({
        url: "/token/refresh/",
        method: "POST",
        body: token_r,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation, useTokenVerifyMutation } = authApi;
