import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redusers/AuthSlice";
import vacationSlice from "./redusers/VacationSlice";


const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
    vacationSlice: vacationSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
