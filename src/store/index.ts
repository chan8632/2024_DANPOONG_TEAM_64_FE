import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./scoreSlice";
import userReducer from "./userSlice";
const store = configureStore({
  reducer: {
    score: scoreReducer,
    user: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
