const express = require("express");
const app = express();
const tourRouter = require("./routes/tourRouter.js");

// app.use(tourRouter);
// Middleware to parse JSON
app.use(express.json());

app.use('/tours', tourRouter);


const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});