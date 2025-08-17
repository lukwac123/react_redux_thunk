import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";

const store = configureStore({
  reducer: rootReducer,
  // middleware domyślnie zawiera thunk, więc nic nie trzeba dopisywać
});

export default store;
