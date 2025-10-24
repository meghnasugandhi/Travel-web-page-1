import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user')), // Store user object (id, username)
        isAuthenticated: !!localStorage.getItem('token'),
        isLoading: false,
        error: null,
    },
    reducers: {
        // Action for when login/registration starts
        authRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        // Action for successful login/registration
        authSuccess: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
        },
        // Action for failed login/registration
        authFailure: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
            state.error = action.payload;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        // Action for user logout
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
            state.error = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
    },
});

export const { authRequest, authSuccess, authFailure, logout } = authSlice.actions;

export default authSlice.reducer;