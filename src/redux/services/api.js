import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["review"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: "restaurants",
      }),
    }),
    getDishes: builder.query({
      query: (restaurantId) => ({
        url: "dishes",
        params: { restaurantId },
      }),
    }),
    getReviews: builder.query({
      query: (restaurantId) => ({
        url: "reviews",
        params: { restaurantId },
      }),
      providesTags: (result, _, restaurantId) =>
        result
          .map(({ id }) => ({
            type: "Review",
            id,
          }))
          .concat([
            { type: "review", id: "ALL" },
            { type: "review", id: restaurantId },
          ]),
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, newReview }) => ({
        url: `review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (result, _, { restaurantId }) => [
        { type: "review", id: restaurantId },
      ],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesQuery,
  useGetReviewsQuery,
  useCreateReviewMutation,
} = api;
