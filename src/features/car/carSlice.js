import { createSlice } from "@reduxjs/toolkit";
import { CARS } from "../../app/shared/CARS";

const initialState = {
    allCars: CARS
}

const carsSlice = createSlice({
    name: 'cars',
    initialState
});

export const carsReducer = carsSlice.reducer;

export const selectAllCars = (state) => {
    return state.cars.allCars;
}