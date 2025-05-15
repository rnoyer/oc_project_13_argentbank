import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userInfos",
  initialState: {
    value: {
      userFirstName: undefined,
      userLastName: undefined,
      userEmail: undefined,
    },
  },
  reducers: {
    setUserInfos: (state, action) => {
      state.value.userFirstName = action.payload.body.firstName;
      state.value.userLastName = action.payload.body.lastName;
      state.value.userEmail = action.payload.body.email;
    },
    unsetUserInfos: (state) => {
      state.value.userFirstName = undefined;
      state.value.userLastName = undefined;
      state.value.userEmail = undefined;
    },
    updateUserInfos: (state, action) => {
      state.value.userFirstName = action.payload.firstName;
      state.value.userLastName = action.payload.lastName;
    },
  },
});

export const { setUserInfos, unsetUserInfos, updateUserInfos } =
  userSlice.actions;

export default userSlice.reducer;
