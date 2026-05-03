import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { value: [] }; //list of student is an object with empty array as initial value

export const saveSkill = createAsyncThunk(
  "skill/addSkill",
  async (skillData) => {
    try {
      const response = await axios.post("http://localhost:3001/addSkill", {
        skill: skillData.skill,
        contact: skillData.contact,
        level: skillData.level,
        type: skillData.type,
        city: skillData.city,
        date: skillData.date,
      });
      const skill = response.data.skills;
      const msg = response.data.msg;
      //Return to redux
      return skill;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getSkills = createAsyncThunk("skill/getSkills", async () => {
  const res = await axios.get("http://localhost:3001/skills");
  return res.data;
});

export const SkillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveSkill.fulfilled, (state, action) => {
        state.value.push(action.payload);
      })
      .addCase(getSkills.fulfilled, (state, action) => {
        state.value = action.payload;
      });
  },
});

//export the reducer
export const { addSkill } = SkillSlice.actions;
export default SkillSlice.reducer;
