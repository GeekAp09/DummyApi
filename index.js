import express from "express";
import fs from "fs";

const port = 3000;
const app = express();

// Load user data from data.json
const userData = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

app.get("/", (req, res) => {
  res.send("Hi, the server is working!");
});

// Search endpoint
app.get("/search", (req, res) => {
  const query = req.query.q; // Query parameter for name search
  const limit = parseInt(req.query.limit) || 5; // Limit parameter with default value of 5

  if (!query) {
    return res.status(400).json({ error: "Query parameter 'q' is required" });
  }

  const results = userData
    .filter((user) => user.first_name.toLowerCase().startsWith(query.toLowerCase()))
    .slice(0, limit);

  res.json({ results });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
