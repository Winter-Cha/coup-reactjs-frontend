// redux-toolkit slice for user
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/models/User';
import { enqueueSnackbar } from 'notistack';
import { Fetch } from '@/models/fetch';

// make Post thunk
export const fetchUser = createAsyncThunk(
    'user/getList'
    , async () => {
        // make 2 seconds delay
        // await new Promise((resolve) => setTimeout(resolve));
        const response = await fetch('http://localhost:8080/members');
        console.log("In fetchUser!! :: response :: ", response);
        const data = await response.json();
        console.log("In fetchUser!! :: data :: ", data);
        return data as User;
    }
);

// make Post thunk
export const createUser = createAsyncThunk(
    'user/create'
    , async (decoded:User, thunkAPI) => {
        console.log("In createUser thunk :", decoded);
        // make 2 seconds delay
        // await new Promise((resolve) => setTimeout(resolve));
        var option = {
            method: 'POST', // *GET, POST, PUT, DELETE 등
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json', // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                'email':decoded.email
                ,'username':decoded.name
            }) // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
        };

        console.log("request body :: ", option.body);
        const response = await fetch('http://localhost:8080/api/members', option);
        console.log("In fetchUser!! :: response :: ", response);
        const data = await response.json();
        console.log("In fetchUser!! :: data :: ", data);
        return data as User;
    }
);

type UserFetchMix = User & Fetch; // type Mix

const initialState: UserFetchMix = {
    id: '',
    name: '',
    email: '',
    avatar: '',
    token: '',
    loading:false,
    error:undefined
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // setUser: (state, action: PayloadAction<User>) => {
        //     state.id = action.payload.id;
        //     state.name = action.payload.name;
        //     state.email = action.payload.email;
        //     state.avatar = action.payload.avatar;
        //     state.token = action.payload.token;
        // },
        // clearUser: (state) => {
        //     state.id = '';
        //     state.name = '';
        //     state.email = '';
        //     state.avatar = '';
        //     state.token = '';
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            console.log("extraReducers fulfilled :: ", state, action);
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.avatar = action.payload.avatar;
            state.token = action.payload.token;
            state.loading = false;
            state.error = undefined;
            // enqueueSnackbar('성공.', { variant: 'success' });
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            console.log('extraReducers rejected :: ');
            // state.loading = false;
            // state.error = action.error.message;
            // enqueueSnackbar(state.error, { variant: 'error' });
        });
        builder.addCase(fetchUser.pending, (state) => {
            console.log('extraReducers pending :: ');
            // state.loading = true;
        });
    },
});

//export selectUser function
export const selectUser = (state: any) => state.user;
// export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
