import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import {
  getTestData,
  getEstimatesData,
  createNewUser,
  userLogin,
  authUser,
} from "./db/helperFunctions.js";

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Api endpoints
app.get("/", async (req, res) => {
  const pendingData = await getTestData();
  res.send(pendingData);
});

app.get("/estimates", async (req, res) => {
  const pendingData = await getEstimatesData();
  res.send(pendingData);
});

// Sign Up Form
app.post("/signup", async (req, res) => {
  try {
    let {
      userFirstName,
      userLastName,
      userBusinessName,
      userAddress,
      userPhone,
      userEmail,
      userPassword,
    } = req.body.userData;

    let isUser = await authUser(userEmail);
    if (isUser.rows < 1) {
      let resData = await createNewUser(
        userFirstName,
        userLastName,
        userBusinessName,
        userAddress,
        userPhone,
        userEmail,
        userPassword
      );
      res.status(201).json({
        success: true,
      });
    } else {
      res
        .status(401)
        .json({ success: false, message: "That email is already taken!" });
    }
  } catch (error) {
    console.error(error);
  }
});

app.post("/login", async (req, res) => {
  // let { userEmail, userPassword } = req.body.userInput;
  let { userEmail, userPassword } = req.body;
  let resData = await authUser(userEmail);
  if (resData.rows < 1) {
    return res
      .status(401)
      .json({ success: false, message: "That user doesn't exist!" });
  } else {
    let { user_password } = resData.rows[0];
    if (user_password === userPassword) {
      res.status(201).json({ success: true, message: "Login Successful" });
    } else {
      res.status(401).json({ success: false, message: "Incorrect password" });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
