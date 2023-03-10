import { configureStore } from '@reduxjs/toolkit';
import { carTypesReducer } from '../features/carType/carTypesSlice';
import { locationsReducer } from '../features/location/locationSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    types: carTypesReducer,
    locations: locationsReducer
  },
});
