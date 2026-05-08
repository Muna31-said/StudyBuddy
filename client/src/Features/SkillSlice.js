import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: [],
};

// 🔥 Add Skill
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

      // ✅ الصحيح
      const skill = response.data.data;

      return skill;
    } catch (error) {
      console.log(error);
    }
  },
);

// 🔥 Get Skills
export const getSkills = createAsyncThunk("skill/getSkills", async () => {
  try {
    const response = await axios.get("http://localhost:3001/skills");

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const SkillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // ✅ Save skill
      .addCase(saveSkill.fulfilled, (state, action) => {
        state.value.push(action.payload);
      })

      // ✅ Get skills
      .addCase(getSkills.fulfilled, (state, action) => {
        state.value = action.payload;
      });
  },
});

// Export reducer
export default SkillSlice.reducer;
