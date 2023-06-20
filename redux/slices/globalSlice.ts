import { createSlice } from '@reduxjs/toolkit';

export interface GolobalState {
    dialogOpen: boolean;
}

const initialState: GolobalState = {
    dialogOpen: false,
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        openDialog: (state) => {
            state.dialogOpen = true;
        },
        closeDialog: (state) => {
            state.dialogOpen = false;
        }
    },
});

export const { openDialog, closeDialog } = globalSlice.actions;
export default globalSlice.reducer;


