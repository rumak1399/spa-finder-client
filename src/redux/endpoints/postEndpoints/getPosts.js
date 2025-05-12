import { baseUrl } from "@/redux/baseUrl";

export const getPostEndpoints = baseUrl.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/post/getposts",
    }),
    getPostsByUserId: builder.query({
      query: (id) => `/post/getpostsbyuserid/${id}`,
    }),
    getPostsByTags: builder.mutation({
      query: (data) => ({
        url: "/post/getpostsbycategoryandtags",
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostsByUserIdQuery, useGetPostsByTagsMutation } = getPostEndpoints;
