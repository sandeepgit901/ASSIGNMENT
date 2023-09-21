const express = require("express");
const mainRoute = require("../routes/mainRoute");

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  app.use("/main", mainRoute);

  app.use("*", (req, res) => res.send("route not found"));
};
