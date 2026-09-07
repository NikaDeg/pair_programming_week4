const express = require("express");
const app = express();


function authMiddleware(req, res, next) {
    if (req.query.admin === "true") {
        req.admin = true
        // res.status(200).send("Admin access granted");
        console.log("Admin access granted");
        next();
        
    } else {
        console.log("Error, you must be an admin");
        res.status(500).json({ message: "Error, you must be an admin" });

    }}

module.exports = authMiddleware;