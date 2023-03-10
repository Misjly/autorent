import { createSlice } from "@reduxjs/toolkit";
import { LOCATIONS } from "../../app/shared/LOCATIONS";

const initialState = {
    allLocations: LOCATIONS
}

export const locationSlice = createSlice({
    name: 'locations',
    initialState
});

export const locationsReducer = locationSlice.reducer;

export const selectAllLocations = (state) => {
    return state.locations.allLocations;
};