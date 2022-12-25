import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { getTestData, getEstimatesData, createNewUser } from "./src/api/api.js";

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

app.post("/signup", async (req, res) => {
  try {
    // let { userData } = req.body;
    let {
      userFirstName,
      userLastName,
      userBusinessName,
      userAddress,
      userPhone,
      userEmail,
      userPassword,
    } = req.body.userData;

    // console.log(`First Name: ${userFirstName}`);
    console.log(`User Business: ${userBusinessName}`);
    console.log(`Business Name: ${req.body.userData.userBusinessName}`);

    let resData = await createNewUser(
      userFirstName,
      userLastName,
      userBusinessName,
      userAddress,
      userPhone,
      userEmail,
      userPassword
    );

    res.send(resData);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
