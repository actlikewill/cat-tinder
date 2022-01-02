import { configureStore } from "@reduxjs/toolkit"
import  { catProfileSlice  } from "./profile"
import { getVotesSlice, addVotesSlice } from "./votes"
import { getLikedImagesSlice } from "./likes"

export const store = configureStore({
  reducer: {
    profile: catProfileSlice.reducer,
    votes: getVotesSlice.reducer,
    addVotes: addVotesSlice.reducer,
    likedImages: getLikedImagesSlice.reducer
  },
})