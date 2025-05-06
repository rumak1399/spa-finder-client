import { baseUrl } from "@/redux/baseUrl";

export const getCategoriesEndpoint = baseUrl.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories/all",
    }),
  }),
});

export const { useGetCategoriesQuery } = getCategoriesEndpoint;
