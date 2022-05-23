import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserModel from "./models/User.js";

mongoose.connect("mongodb://mongo:27017/user");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/user", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send(users);
  } catch (err) {
    res.send("Error: ", err.message);
  }
});

app.post("/user", async (req, res) => {
  try {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.send(newUser);
  } catch (err) {
    res.send("Error: ", err.message);
  }
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`));
