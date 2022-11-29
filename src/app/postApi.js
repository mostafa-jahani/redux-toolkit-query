import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/"
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        posts: builder.query({
            query: () => "posts"
        }),
        post: builder.query({
            query: (id) => `posts/${id}`
        }),
        addPost: builder.mutation({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            })
        }),
        updatePost: builder.mutation({
            query: (id, ...rest) => ({
                url: `/posts/${id}`,
                method: 'PUT',
                body: rest
            })
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
            })
        }),
    })
})


export const {usePostsQuery, usePostQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation} = postApi