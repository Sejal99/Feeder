const express = require("express");
const dotenv = require("dotenv");
const db = require("./db");
dotenv.config();
const app = express();

app.use(express.json());

app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants");
    console.log(results);
    res.status(200).json({
      status: "success",
      data: restaurants.rows,
    });
  } catch (error) {
    console.log(error);
  }
});
const port = process.env.port || 3001;
app.listen(port, () => {
  console.log("server running on port", port);
});
