import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getVotes = createAsyncThunk('votes/getVotes', async () => {
  return fetch('https://api.thecatapi.com/v1/votes', {
    method: 'GET',
    headers: {
      'x-api-key': 'e9727758-0bde-4774-a404-bce28361c18a'

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


export const addVotes = createAsyncThunk('votes/addVote', async ({id, vote}) => {
  console.log(id, vote)
  return fetch('https://api.thecatapi.com/v1/votes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'e9727758-0bde-4774-a404-bce28361c18a'
    },
    body: JSON.stringify({
          image_id: id,
          value: vote
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

