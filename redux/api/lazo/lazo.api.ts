import IBrand from "../../schemas/brands";
import { IProduct, IProductSegment } from "../../schemas/products";
import { api } from "../auth/api";

export const lazoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query<IBrand[], void>({
      query: () => "brand",
    }),
    getProducts: builder.query<IProduct[], IProductSegment>({
      query: () => "products",
    }),
  }),
});

export const { useGetBrandsQuery, useGetProductsQuery } = lazoApi;
