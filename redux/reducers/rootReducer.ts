import { combineReducers } from "redux";
import { authApi } from "../api/auth/auth.api";
import { lazoApi } from "../api/lazo/api";
import authReducer from "../slices/auth.slice";
import productReducer from "../slices/product.slice";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [lazoApi.reducerPath]: lazoApi.reducer,
  auth: authReducer,
  products: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
