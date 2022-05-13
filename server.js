/* === External Modules === */
const express = require("express");
const path = require("path");

/* === Internal Modules === */
const Band = require("./models/bands");

/* === Instanced Modules === */
const app = express();

/* === Middleware === */
// body parsing middle
app.use(express.json());

// serve static files
app.use(express.static(path.join(__dirname, "client/dist")));

/* === Routes === */

//== api routes

// == Bands

// get all
app.get("/api/v1/bands", function (req, res) {
  Band.all().then(data => {
    res.json(data);
  });
});

// show route by id
app.get("/api/v1/bands/:id", function (req, res) {
  Band.filter({ column: "band_id", value: req.params.id }).then(data => {
    res.json(data[0]);
  });
});

// update route by id
app.put("/api/v1/bands/:id", function (req, res) {
  Band.update(req.params.id, req.body).then(data => {
    res.json(data);
  });
});

// create
app.post("/api/v1/bands", function (req, res) {
  Band.create(req.body).then(data => {
    res.json(data);
  });
});

// remove
app.delete("/api/v1/bands/:id", function (req, res) {
  Band.remove(req.params.id).then(data => {
    res.json(data);
  });
});

/* === Server Bind === */
//Bind our server to a port

app.listen(4000, function () {
  console.log("Let's get this music goin~");
});
