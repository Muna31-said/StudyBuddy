import mongoose from "mongoose";

const SkillSchema = mongoose.Schema({
  skill: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  experience: {
    type: String,
  },
});

const SkillModel = mongoose.model("skills", SkillSchema);
export default SkillModel;
