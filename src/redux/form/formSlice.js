import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isFormOpen: false,
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        openForm: (state) => {
            state.isFormOpen = true;
        },
        closeForm: (state) => {
            state.isFormOpen = false;
        }
    }
});

export const {openForm, closeForm} = formSlice.actions

export default formSlice.reducer;