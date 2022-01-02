import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getLikedImages = createAsyncThunk('likedImages/getImages', async (image_ids) => {
  return Promise.all(
    image_ids.map(image_id => 
    fetch(`https://api.thecatapi.com/v1/images/${image_id}`)
    .then(response => response.json())
    )
  )})

export const getLikedImagesSlice = createSlice({
  name: 'likedImages',
  initialState: {
    data: {},
    status: null
  },
  extraReducers: {
    [getLikedImages.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getLikedImages.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.data = action.payload
    },
    [getLikedImages.rejected]: (state, action) => {
      state.status = 'failed'
      console.log(action)
      state.data  = action.payload
    }
  }
})



    


