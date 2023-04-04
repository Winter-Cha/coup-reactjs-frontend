import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { enqueueSnackbar } from 'notistack';
import { Post } from '../../models/Post';

// make Post thunk
export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
    // make 2 seconds delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data as Post[];
});

export interface PostState {
    posts: Post[];
    loading: boolean;
    error: string | undefined;
}

const initialState: PostState = {
    posts: [],
    loading: false,
    error: undefined,
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPosts: (state) => {
            state.loading = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.loading = false;
            state.error = undefined;
            enqueueSnackbar('성공.', { variant: 'success' });
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            enqueueSnackbar(state.error, { variant: 'error' });
        });
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
        });
    },
});

export const { getPosts } = postSlice.actions;
export default postSlice.reducer;


