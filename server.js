import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import {
  getTestData,
  getEstimatesData,
  createNewUser,
  userLogin,
} from "./src/api/api.js";

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

    let resData = await createNewUser(
      userFirstName,
      userLastName,
      userBusinessName,
      userAddress,
      userPhone,
      userEmail,
      userPassword
    );
    console.log(resData);
    res.send;
  } catch (error) {
    console.error(error);
  }
});

// Login Form
app.post("/login", async (req, res) => {
  try {
    let { userEmail, userPassword } = req.body.userInput;
    let resData = await userLogin(userEmail, userPassword);
    console.log(userEmail, userPassword);
    res.send("Endpoint hit!");
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
