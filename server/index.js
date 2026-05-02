import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import SkillModel from "./Models/SkillModel.js";

const app = express();
app.use(express.json());
app.use(cors());

const connectString = "mongodb://localhost:27017/stbuDb";
mongoose.connect(connectString);

app.post("/addSkill", async (req, res) => {
  try {
    const { skill, level, contact, type, city, date } = req.body;

    // 1️⃣ Required fields
    if (!skill || !level || !contact || !type || !city || !date) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // 2️⃣ Skill validation (letters only)
    const skillRegex = /^[a-zA-Z\s]{2,30}$/;
    if (!skillRegex.test(skill)) {
      return res.status(400).json({
        message: "Skill must be 2-30 letters only",
      });
    }

    // 3️⃣ Contact validation (phone or email)
    const phoneRegex = /^[0-9]{8,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isPhone = phoneRegex.test(contact);
    const isEmail = emailRegex.test(contact);

    if (!isPhone && !isEmail) {
      return res.status(400).json({
        message: "Contact must be a valid phone number or email",
      });
    }

    // 🔥 4️⃣ BUSINESS LOGIC: Student Experience Classification
    let experience = "";

    if (level === "Beginner") {
      experience = "Student Starter";
    } else if (level === "Intermediate") {
      experience = "Skilled Student";
    } else if (level === "Advanced") {
      experience = "Expert Student";
    } else {
      return res.status(400).json({
        message: "Invalid skill level",
      });
    }

    const newSkill = new SkillModel({
      skill,
      level,
      contact,
      type,
      city,
      date,
    });

    await newSkill.save();

    res.json({
      msg: "Skill Added ✅",
      data: newSkill,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error saving skill" });
  }
});

app.get("/skills", async (req, res) => {
  try {
    const skills = await SkillModel.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3001, () => {
  console.log("You are connected");
});
