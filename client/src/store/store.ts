import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redusers/AuthSlice";


const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
