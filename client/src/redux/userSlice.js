import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

import cookie from "js-cookie";



export const fetchUserData = createAsyncThunk('user/fetchUserData', async (_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:5000/jwtid', { withCredentials: true });
        return response.data; 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const logoutUser = () => async (dispatch) => {
    try {
        await axios({
            method: 'get',
            url: "http://localhost:5000/api/v1/auth/logout",
            withCredentials: true
        });

        cookie.remove('jwt', { expires: 1 });

        Object.keys(localStorage).forEach(key => {
            if (key !== 'persist:root') {
                localStorage.removeItem(key);
            }
        });
        
        dispatch(userLogout());
    } catch (err) {
        console.log(err);
    }

};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        role: '',
        user: null, 
        status: 'idle',
        error: null,
    },
    reducers: {
        userLogout: (state) => {
            state.role = '';
            state.user = null;
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
        
        .addCase(fetchUserData.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchUserData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
        })
        .addCase(fetchUserData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })
    },
});

export const { userLogout } = userSlice.actions;


export default userSlice.reducer;
