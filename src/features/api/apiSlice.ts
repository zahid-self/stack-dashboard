import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../utils/types";

interface UserListResponse<T> {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: T[]
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api'
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data
      })
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: '/register',
        method: 'POST',
        body: data
      })
    }),
    getUsers: builder.query<UserListResponse<User>, number | void>({
      query: (page = 1) => `/users?page=${page}`
    })
  })
});

export const { useSignInMutation, useSignUpMutation, useGetUsersQuery } = apiSlice;