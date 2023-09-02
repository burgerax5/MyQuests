import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice' 
import questReducer from '../features/quests/questSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    quest: questReducer,
  },
});
