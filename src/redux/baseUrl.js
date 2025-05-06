// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
// export const baseUrl = createApi({
//     reducerPath: 'baseUrl',
//     baseQuery: fetchBaseQuery({baseUrl: 'https://spa-finder-api.onrender.com/api'}),
//     endpoints: ()=> ({}),    
// })

// redux/baseUrl.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = createApi({
  reducerPath: "baseUrl",
  baseQuery: fetchBaseQuery({ baseUrl: "https://spa-finder-api.onrender.com/api" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories/all",
    }),
  }),
});

export const { useGetCategoriesQuery } = baseUrl;
