import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getGalleryArt, likeArt, unlikeArt } from '../api';

export const fetchGalleryArt = createAsyncThunk(
    'gallery/fetchGalleryArt',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getGalleryArt();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch gallery art.');
        }
    }
);

export const toggleLike = createAsyncThunk(
    'gallery/toggleLike',
    async ({ artId, isLiked }, { getState, rejectWithValue }) => {
        try {
            if (isLiked) {
                await unlikeArt(artId);
                return { artId, liked: false };
            } else {
                await likeArt(artId);
                return { artId, liked: true };
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to toggle like.');
        }
    }
);

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        publicArt: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGalleryArt.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchGalleryArt.fulfilled, (state, action) => {
                state.isLoading = false;
                state.publicArt = action.payload;
            })
            .addCase(fetchGalleryArt.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(toggleLike.fulfilled, (state, action) => {
                const { artId, liked } = action.payload;
                const artIndex = state.publicArt.findIndex(art => art.id === artId);
                if (artIndex !== -1) {
                    state.publicArt[artIndex].likes += liked ? 1 : -1;
                }
            })
            .addCase(toggleLike.rejected, (state, action) => {
                // Handle error, maybe show a toast notification
                console.error('Failed to toggle like:', action.payload);
            });
    },
});

export default gallerySlice.reducer;