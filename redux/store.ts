import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth/api";
import rootReducer from "./reducers/rootReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { lazoApi } from "./api/lazo/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authApi.middleware, lazoApi.middleware),
});

const persistor = persistStore(store);
export { store, persistor };

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
