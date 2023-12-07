import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../../constants/normalized-mock";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: normalizedUsers.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {}),
    ids: normalizedUsers.map(({ id }) => id),
  },
});
