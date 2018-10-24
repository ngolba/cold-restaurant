const express = require('express')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 7100;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [{}]
var waitlist = [{}]

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(reservations)
});

app.get("/api/waitlist", function(req,res) {
  return res.json(waitlist)
});

app.post("api/tables", function(req, res) {
  newReso = req.body;
  console.log(newReso);
  reservations.push(newReso);
  res.json(newReso)
});

app.listen(PORT, () => console.log(`Index listening on PORT ${PORT}!`))