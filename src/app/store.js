import { configureStore } from '@reduxjs/toolkit';
import { carTypesReducer } from '../features/car/carTypesSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    carTypes: carTypesReducer
  },
});
