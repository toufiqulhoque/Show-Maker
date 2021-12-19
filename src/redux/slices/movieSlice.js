import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchmovies = createAsyncThunk(
    'movie/fetchmovies',
    async () => {
        const response = await fetch('http://localhost:5000/services').then(res => res.json())
        // console.log(response);
        return response
    }
)
export const fetchreviews = createAsyncThunk(
    'review/fetchreviews',
    async () => {
        const response = await fetch('http://localhost:5000/reviews').then(res => res.json())
        // console.log(response);
        return response
    }
)

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        discover: [],
        watchList: [],
        review: [],
        status: 'idle'
    },
    reducers: {
        addTowatchList: (state, { payload }) => {
            state.watchList.push(payload)
        },
        removeFromwatchList: (state, { payload }) => {
            state.watchList = state.watchList.filter(movie => movie.id !== payload.id);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchmovies.fulfilled, (state, action) => {
            state.discover = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchmovies.pending, (state, action) => {
            state.status = 'pending';
        })
        builder.addCase(fetchreviews.fulfilled, (state, action) => {
            state.review = action.payload;
            state.status = 'success';

        })
        builder.addCase(fetchreviews.pending, (state, action) => {
            state.status = 'pending';
        })


    },


});

export const { addTowatchList, removeFromwatchList } = movieSlice.actions;

export default movieSlice.reducer;

