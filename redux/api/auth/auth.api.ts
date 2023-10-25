import { api } from "./api";

interface IAuthResponse {
  access_token: string;
  refresh_token: string;
}
interface ICredential {
  username: string;
  password: string;
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
  }),
});

export const { useLoginMutation } = authApi;
