const express = require("express");

const server = express();

server.use(express.json());

server.use((req, res) => res.status(404).json({message:"Resource not found", method:req.method, path:req.url}));

module.exports = server;