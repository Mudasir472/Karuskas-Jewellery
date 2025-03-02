import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserAPI, signupUserAPI } from "../../services/authService";
import toast from 'react-hot-toast';

const saveAuthStateToLocalStorage = (state) => {
    localStorage.setItem('auth', JSON.stringify(state));
};

const loadAuthStateFromLocalStorage = () => {
    const authState = localStorage.getItem('auth');
    return authState ? JSON.parse(authState) : null;
};

const initialState = loadAuthStateFromLocalStorage() || {
    user: null,
    token: null,
    loading: false,
    error: null,
};

export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await loginUserAPI(credentials);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for signup
export const signupUser = createAsyncThunk(
    'auth/signup',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await signupUserAPI(userData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.error = null;
            localStorage.removeItem('auth');
            toast.success("Logout Successfully")

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.existingUser;
                state.token = action.payload.token;
                saveAuthStateToLocalStorage(state);
                toast.success("Login Successfully")
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signupUser.fulfilled, (state, action) => {

                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                toast.success("Signup Successfully")
                saveAuthStateToLocalStorage(state);
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload)
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;