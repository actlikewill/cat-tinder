import { configureStore } from "@reduxjs/toolkit"
import  { catProfileSlice  } from "./profile"
import { getVotesSlice } from "./votes"

export const store = configureStore({
  reducer: {
    profile: catProfileSlice.reducer,
    votes: getVotesSlice.reducer
  },
})