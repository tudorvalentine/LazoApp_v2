import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import rootReducer from "./rootReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { lazoApi } from "./api/lazoApi";
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, lazoApi.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
