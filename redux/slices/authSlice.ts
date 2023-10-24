import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../reducers/rootReducer";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: { accessToken: null, refreshToken: null } as AuthState,
  reducers: {
    setTokens: (
      state,
      { payload: { accessToken, refreshToken } }: PayloadAction<AuthState>
    ) => {
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    },
  },
});

export const { setTokens } = slice.actions;

export default slice.reducer;

export const selectCurrentAccessToken = (state: RootState) =>
  state.auth.accessToken;
export const selectCurrentRefreshToken = (state: RootState) =>
  state.auth.refreshToken;
