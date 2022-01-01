import { configureStore } from "@reduxjs/toolkit"
import  profile from "./profile"

export const store = configureStore({
  reducer: {
    profile
  },
})