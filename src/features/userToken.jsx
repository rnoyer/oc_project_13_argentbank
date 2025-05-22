import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loginInfos",
  initialState: {
    value: { token: undefined },
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    unsetToken: (state) => {
      state.token = undefined;
    },
  },
});

export const { setToken, unsetToken } = loginSlice.actions;

export const setTokenInAsync = (hash) => (dispatch) => {
  dispatch(setToken(hash));
};

export const userToken = (state) => state.login.value;

export default loginSlice.reducer;
