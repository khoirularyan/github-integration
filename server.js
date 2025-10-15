//network address http://localhost:9191
const express = require("express");
const app = express();
const PORT = 9191;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

console.log("Starting the server...");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
