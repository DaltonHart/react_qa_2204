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

/*
  request 
  - url path -> /test 
  - method 
      - GET
        - query params ?search=cat+gifs
        - url params /student/:id 
      - POST
          - body data 
          - url params /student/:id 
      - PUT 
        - body data
        - url params /student/:id 
      - PATCH
        - body data
        - url params /student/:id 
      - DELETE
        - url params /student/:id 
*/

//== api routes

// $("element").on("click", callback)

// listener
// server.method("route", callback(req,res))

// to access data
// query params => req.query
// url params => req.params
// body => use middleware => req.body

app.get("/api/v1/bands", function (req, res) {
  console.log(req.query);

  Band.all().then(data => {
    res.json(data);
  });
});

// show route by id
app.get("/api/v1/bands/:id", function (req, res) {
  Band.filter({ column: "band_id", value: req.params.id }).then(data => {
    res.json(data);
  });
});

/* === Server Bind === */
//Bind our server to a port

app.listen(4000, function () {
  console.log("Let's get this music goin~");
});
