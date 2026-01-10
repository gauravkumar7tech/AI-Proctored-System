import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '' });

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL,
    credentials: 'include',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),

  tagTypes: ['User'],
  // it like a prent to other api
  // it a build in builder
  endpoints: (builder) => ({}),
});
