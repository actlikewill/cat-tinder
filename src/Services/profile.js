import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getProfile = createAsyncThunk('profile/getProfile', async () => {
  return fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
  
})



export const catProfileSlice = createSlice({
  name: 'catProfile',
  initialState: {
    data: {},
    status: null
  },
  extraReducers: {
    [getProfile.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getProfile.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.data = action.payload[0]

    },
    [getProfile.rejected]: (state, action) => {
      state.status = 'failed'
    }

  }
})


export default catProfileSlice.reducer