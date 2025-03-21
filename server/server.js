const express = require("express");
const { Pool } = require('pg');

function main() {
  const app = express();
  const Database = require("./Database");

  const database = new Database();
  
  app.post("/register", (req, res) => {
    print(req, res);
  });

  app.post("/login", (req, res) => {
    print(req, res);
  })

  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
}

main();