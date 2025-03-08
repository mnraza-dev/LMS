import { createApi } from "@/reduxjs/toolkit/query/react";

const USER_API = "http://localhost:8000/api/v1/user/";

export const authAPI = createApi({
  reducerPath: "authAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: USER_API,
    credentials: "include",
  }),

  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (inputData) => ({
        url: "register/",
        method: "POST",
        body: inputData,
      }),
    }),
    loginUser: builder.mutation({
      query: (inputData) => ({
        url: "login/",
        method: "POST",
        body: inputData,
      }),
      async onQueryStarted({ dispatch, queryFulfilled, queryRejected }) {
        try {
          const result = await queryFulfilled;
          const { token } = result.data;
          localStorage.setItem("token", token);
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
