import { configureStore } from "@reduxjs/toolkit";
import skillReducer from "../Features/SkillSlice";

export const store = configureStore({
  reducer: { skill: skillReducer },
});
