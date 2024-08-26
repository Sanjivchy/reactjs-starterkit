import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import AuthService from '../services/auth.service';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument : { AuthService }
    }
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;