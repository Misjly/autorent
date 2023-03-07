import { createSlice } from "@reduxjs/toolkit";
import { TYPES } from "../../app/shared/TYPES";

const initialState = {
    types: TYPES
}

const carTypesSlice = createSlice({
    name: 'carTypes',
    initialState
});

export const carTypesReducer = carTypesSlice.reducer;

export const selectAllCarTypes = (state) => {
    return state.carTypes.types;
}