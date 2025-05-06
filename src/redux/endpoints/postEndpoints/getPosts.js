import { baseUrl } from "@/redux/baseUrl";

export const getPostEndpoints = baseUrl.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/post/getposts",
    }),
  }),
});

export const {useGetPostsQuery} = getPostEndpoints;