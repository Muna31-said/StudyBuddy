import { configureStore } from "@reduxjs/toolkit";
import skillReducer from "../Features/SkillSlice";
import userReducer from "../Features/UserSlice";

export const store = configureStore({
  reducer: { skill: skillReducer, users: userReducer },
});
