import IBrand from "../../schemas/brands";
import { api } from "../auth/api";

export const lazoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query<IBrand[], void>({
      query: () => "brand",
    }),
  }),
});

export const { useGetBrandsQuery } = lazoApi;
