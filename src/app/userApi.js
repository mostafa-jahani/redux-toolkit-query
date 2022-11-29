import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/"
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        users: builder.query({
            query: () => "users"
        }),
        user: builder.query({
            query: (id) => `users/${id}`
        }),
    })
})


export const {useUsersQuery, useUserQuery} = userApi