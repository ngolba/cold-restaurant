const express = require('express')
const app = express();
const PORT = 7100;


app.listen(PORT, () => console.log(`Index listening on PORT ${PORT}!`))

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});