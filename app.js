const express = require('express')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 7100;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



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