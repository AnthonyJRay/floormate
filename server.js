// const express = require("express");
import express from "express";
// const cors = require("cors");
import cors from "cors";
// const pool = require("./db");
// import pool from "./db.js";

import { getTestData, getEstimatesData } from "./src/api/api.js";

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

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
