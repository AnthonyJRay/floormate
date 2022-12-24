import express from "express";
import cors from "cors";

import { getTestData, getEstimatesData, createNewUser } from "./src/api/api.js";

const app = express();
const port = 5000;

// Middleware
app.use(cors());

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
  // Destructure out user data variables
  console.log(req.body);
  try {
    // const {} = req.body;
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
