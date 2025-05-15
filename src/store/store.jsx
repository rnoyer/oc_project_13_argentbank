import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "/src/features/userToken";
import userReducer from "/src/features/userInfos";

export default configureStore({
  reducer: {
    logger: loginReducer,
    user: userReducer,
  },
});
