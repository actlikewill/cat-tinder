import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getVotes = createAsyncThunk('votes/getVotes', async ({ sub_id }) => {
  return fetch(`https://api.thecatapi.com/v1/votes?sub_id=${sub_id}`, {
    method: 'GET',
    headers: {
      'x-api-key': process.env.REACT_APP_API_KEY
    }
  })
    .then(response => response.json())
})

export const getVotesSlice = createSlice({
  name: 'catProfile',
  initialState: {
    data: {},
    status: null
  },
  extraReducers: {
    [getVotes.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getVotes.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.data = action.payload

    },
    [getVotes.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
})

export const addVotes = createAsyncThunk('votes/addVote', async ({image_id, value, sub_id}) => {
  return fetch('https://api.thecatapi.com/v1/votes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.REACT_APP_API_KEY
    },
    body: JSON.stringify({
          image_id,
          value,
          sub_id 
        })
      })
    .then(response => response.json())
})

export const addVotesSlice = createSlice({
  name: 'catProfile',
  initialState: {
    data: {},
    status: null
  },
  reducers: {
    clearAddVote (state) {
      state.data = {}
      state.status = null
    },
  },
  extraReducers: {
    [addVotes.pending]: (state, action) => {
      state.status = 'loading'
    },
    [addVotes.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.data = action.payload

    },
    [addVotes.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
})

export const { clearAddVote } = addVotesSlice.actions

