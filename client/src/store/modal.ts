import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modals: []
};

const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        append: (state, action) => {
            state.modals = [...state.modals, action.payload] as any;
        },
        destory: state => {
            // Remove last one
            state.modals = state.modals.slice(0, -1);
        },
        destoryAll: state => {
            // Remove all
            state.modals = [];
        },
    }
});

export const { append, destory, destoryAll } = modal.actions;
export default modal.reducer;