/* === External Modules === */
const express = require("express");

/* === Internal Modules === */
const Band = require("./models/bands");

/* === Instanced Modules === */
const app = express();

/* === Middleware === */
// body parsing middle
app.use(express.json());

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
      - PUT 
        - body data
      - PATCH
        - body data
      - DELETE
*/

//== api routes

// bands
app.get("/api/v1/bands", function (req, res) {
  // TODO add model of get All
});

/* === Server Bind === */
//Bind our server to a port

app.listen(4000, function () {
  console.log("Let's get this music goin~");
});
