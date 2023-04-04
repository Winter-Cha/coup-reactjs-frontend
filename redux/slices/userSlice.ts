// redux-toolkit slice for user
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/models/User';

const initialState: User = {
    id: '',
    name: '',
    email: '',
    avatar: '',
    token: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.avatar = action.payload.avatar;
            state.token = action.payload.token;
        },
        clearUser: (state) => {
            state.id = '';
            state.name = '';
            state.email = '';
            state.avatar = '';
            state.token = '';
        },
    }
});

//export selectUser function
export const selectUser = (state: any) => state.user;
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
