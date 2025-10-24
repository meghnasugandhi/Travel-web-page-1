import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import artReducer from '../features/artSlice';
import galleryReducer from '../features/gallerySlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        art: artReducer,
        gallery: galleryReducer,
    },
});