import { combineReducers } from "redux";
import { authApi } from "../api/authApi";
import { lazoApi } from "../api/lazoApi";
import authReducer from "../slices/authSlice";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [lazoApi.reducerPath]: lazoApi.reducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
