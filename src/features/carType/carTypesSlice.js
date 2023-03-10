import { createSlice } from "@reduxjs/toolkit";
import { TYPES } from "../../app/shared/TYPES";

const initialState = {
    carTypes: TYPES
}

const carTypesSlice = createSlice({
    name: 'types',
    initialState
});

export const carTypesReducer = carTypesSlice.reducer;

export const selectAllCarTypes = (state) => {
    return state.types.carTypes;
}