import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loginInfos",
  initialState: {
    value: { token: undefined },
  },
  reducers: {
    setToken: (state, action) => {
      state.value.token = action.payload;
    },
    unsetToken: (state) => {
      state.value.token = undefined;
    },
  },
});

export const { setToken, unsetToken } = loginSlice.actions;

export const setTokenInAsync = (hash) => (dispatch) => {
  dispatch(setToken(hash));
};

export const userToken = (state) => state.logger.value;

export default loginSlice.reducer;
