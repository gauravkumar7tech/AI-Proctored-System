import { apiSlice } from './apiSlice';

// Define the base URL for the exams API
const CHEATING_LOGS_URL = '/api/users';

// Inject endpoints for the exam slice
export const cheatingLogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get cheating logs for a specific exam
    getCheatingLogs: builder.query({
      query: (examId) => ({
        url: `${CHEATING_LOGS_URL}/cheatingLogs/${examId}`,
        method: 'GET',
      }),
    }),
    // Save a new cheating log entry for an exam
    saveCheatingLog: builder.mutation({
      query: (data) => ({
        url: `${CHEATING_LOGS_URL}/cheatingLogs`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

// Export the generated hooks for each endpoint
export const { useGetCheatingLogsQuery, useSaveCheatingLogMutation } = cheatingLogApiSlice;
