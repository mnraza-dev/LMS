import { createApi } from "@/reduxjs/toolkit/query/react";

const USER_API = "http://localhost:8000/api/v1/user/";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({ baseUrl: USER_API, credentials: "include" }),
});
