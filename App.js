const express = require("express");
const path = require("path");
const app = express();
const port = 80;
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
  console.log("someone linked server");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
