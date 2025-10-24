import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMyArt } from '../api';

export const fetchMyArt = createAsyncThunk(
    'art/fetchMyArt',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getMyArt();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch my art.');
        }
    }
);

const artSlice = createSlice({
    name: 'art',
    initialState: {
        myArt: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        // You might add a reducer here for a single art piece being minted if you want to update the state immediately
        addMintedArt: (state, action) => {
            state.myArt.unshift(action.payload); // Add new art to the beginning
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMyArt.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchMyArt.fulfilled, (state, action) => {
                state.isLoading = false;
                state.myArt = action.payload;
            })
            .addCase(fetchMyArt.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { addMintedArt } = artSlice.actions;

export default artSlice.reducer;