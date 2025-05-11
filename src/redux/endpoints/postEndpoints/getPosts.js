import { baseUrl } from "@/redux/baseUrl";

export const getPostEndpoints = baseUrl.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/post/getposts",
    }),
    getPostsByUserId: builder.query({
      query: (id)=> `/post/getpostsbyuserid/${id}`
    })
  }),
});

export const {useGetPostsQuery, useGetPostsByUserIdQuery} = getPostEndpoints;